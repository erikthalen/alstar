// Import Three.js from CDN (v0.174.0)
import * as THREE from 'https://unpkg.com/three@0.174.0/build/three.module.js'

// Vertex shader
const vertexShader = `uniform float uTime;
uniform float uNoiseScaleX;
uniform float uNoiseScaleY;
uniform float uNoiseSpeed;
uniform float uNoiseStrength;
uniform float uNoiseShiftX;
uniform float uNoiseShiftY;
uniform float uNoiseShiftSpeed;

vec4 permute(vec4 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}
/**
 * cnoise: 3D Classic Perlin Noise
 * Returns a value in the range [-1,1].
 */
float cnoise(vec3 P) {
    vec3 Pi0 = floor(P); // Integer part
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); // Fractional part
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0

    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010),
                                    dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;

    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011),
                                    dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110),
                   vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);

    // 2.2 is a recommended factor for classic Perlin
    return 2.2 * n_xyz;
} 

varying vec2 vUv;
varying vec3 vNormal;
varying float vNoise;

void main() {
    // Pass the UVs to the fragment shader
    vUv = uv;

    // Calculate shift offsets based on time and direction
    float shiftX = uTime * uNoiseShiftX * uNoiseShiftSpeed;
    float shiftY = uTime * uNoiseShiftY * uNoiseShiftSpeed;

    // Create animated noise used to displace the vertices with directional shift
    vec3 noisePosition = vec3(
        position.x * uNoiseScaleX + shiftX,
        position.y * uNoiseScaleY + shiftY,
        uTime * uNoiseSpeed
    );
    float noiseValue = cnoise(noisePosition) * uNoiseStrength;
    vNoise = noiseValue; // We can also use this in the fragment shader if desired

    // Displace vertex position along its normal
    vec3 transformed = position + normal * noiseValue;

    // Approximate a new normal based on local perturbation:
    // Sample two slightly offset positions for building tangents
    vec3 pos1 = position + vec3(0.01, 0.0, 0.0);
    vec3 pos2 = position + vec3(0.0, 0.01, 0.0);

    // Apply the same directional shift to the offset samples
    float noise1 = cnoise(vec3(
        pos1.x * uNoiseScaleX + shiftX,
        pos1.y * uNoiseScaleY + shiftY,
        uTime * uNoiseSpeed
    )) * uNoiseStrength;
    
    float noise2 = cnoise(vec3(
        pos2.x * uNoiseScaleX + shiftX,
        pos2.y * uNoiseScaleY + shiftY,
        uTime * uNoiseSpeed
    )) * uNoiseStrength;

    vec3 disp1 = pos1 + normal * noise1;
    vec3 disp2 = pos2 + normal * noise2;

    // Build tangent/bitangent to reconstruct a normal
    vec3 tangent = normalize(disp1 - transformed);
    vec3 bitangent = normalize(disp2 - transformed);
    vec3 newNormal = normalize(cross(tangent, bitangent));

    vNormal = newNormal;

    // Standard projection
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
} `

// Fragment shader
const fragmentShader = `uniform float uTime;
uniform float uColorNoiseScale;
uniform float uColorNoiseSpeed;
uniform int uGradientMode;

// Grain effect parameters
uniform bool uEnableGrain;
uniform float uGrainIntensity;
uniform float uGrainScale;
uniform float uGrainDensity;
uniform float uGrainSpeed;
uniform float uGrainThreshold;

// Gradient shift parameters
uniform float uGradientShiftX;
uniform float uGradientShiftY;
uniform float uGradientShiftSpeed;

// Color stop data
uniform sampler2D uColorStops;
uniform int uColorStopCount;

uniform vec3 uLightDir;
uniform float uDiffuseIntensity;
uniform float uAmbientIntensity;
uniform float uRimLightIntensity;

vec4 permute(vec4 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}
/**
 * cnoise: 3D Classic Perlin Noise
 * Returns a value in the range [-1,1].
 */
float cnoise(vec3 P) {
    vec3 Pi0 = floor(P); // Integer part
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); // Fractional part
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0

    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010),
                                    dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;

    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011),
                                    dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110),
                   vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);

    // 2.2 is a recommended factor for classic Perlin
    return 2.2 * n_xyz;
} 

varying vec2 vUv;
varying vec3 vNormal;
varying float vNoise;

// Maximum number of color stops we can process
#define MAX_COLOR_STOPS 10

// Linear interpolation between two colors
vec3 linearGradient(vec3 colorA, vec3 colorB, float t) {
    return mix(colorA, colorB, t);
}

// Step function between colors (hard transitions)
vec3 stepGradient(vec3 colors[4], float t) {
    if (t < 0.25) return colors[0];
    if (t < 0.5) return colors[1];
    if (t < 0.75) return colors[2];
    return colors[3];
}

// Smoother step function (softer transitions)
vec3 smoothStepGradient(vec3 colors[4], float t) {
    if (t < 0.33) {
        return mix(colors[0], colors[1], smoothstep(0.0, 1.0, t / 0.33));
    } else if (t < 0.66) {
        return mix(colors[1], colors[2], smoothstep(0.0, 1.0, (t - 0.33) / 0.33));
    } else {
        return mix(colors[2], colors[3], smoothstep(0.0, 1.0, (t - 0.66) / 0.34));
    }
}

// Cubic B-spline basis function for t in [0..1] and 4 control points P0..P3.
vec3 bSpline(vec3 P0, vec3 P1, vec3 P2, vec3 P3, float t) {
    // For a uniform cubic B-spline, the basis can be written as:
    // w0 = (-t^3 + 3t^2 - 3t + 1) / 6
    // w1 = (3t^3 - 6t^2 + 4) / 6
    // w2 = (-3t^3 + 3t^2 + 3t + 1) / 6
    // w3 = t^3 / 6
    float t2 = t * t;
    float t3 = t2 * t;
    
    float w0 = (1.0 / 6.0) * (-t3 + 3.0 * t2 - 3.0 * t + 1.0);
    float w1 = (1.0 / 6.0) * (3.0 * t3 - 6.0 * t2 + 4.0);
    float w2 = (1.0 / 6.0) * (-3.0 * t3 + 3.0 * t2 + 3.0 * t + 1.0);
    float w3 = (1.0 / 6.0) * (t3);
    
    return P0 * w0 + P1 * w1 + P2 * w2 + P3 * w3;
}

// Get color and position from the color stops texture
vec4 getColorStop(int index) {
    // Handle edge case where there are no stops at all - avoid division by zero
    if (uColorStopCount <= 0) {
        // Return a bright error color with position 0
        return vec4(1.0, 0.0, 1.0, 0.0);
    }
    
    // Clamp index to valid range
    int clampedIndex = index;
    if (clampedIndex >= uColorStopCount) {
        clampedIndex = uColorStopCount - 1;
    }
    
    // Normalize the index to 0..1 range based on actual texture width
    // Handle special case where we have exactly 1 stop to avoid division by zero
    float normIndex = (uColorStopCount == 1) ? 0.0 : float(clampedIndex) / float(uColorStopCount - 1);
    return texture2D(uColorStops, vec2(normIndex, 0.0));
}

// Find the two color stops surrounding position t and interpolate between them
vec3 multiStopGradient(float t) {
    // If we don't have stops, use a fallback color
    if (uColorStopCount <= 0) {
        return vec3(1.0, 0.0, 1.0); // Error color (magenta)
    }
    
    // Edge cases - before first stop or after last stop
    vec4 firstStop = getColorStop(0);
    vec4 lastStop = getColorStop(uColorStopCount - 1);
    
    if (t <= firstStop.a) {
        return firstStop.rgb;
    }
    
    if (t >= lastStop.a) {
        return lastStop.rgb;
    }
    
    // Default color in case we don't find a pair (shouldn't happen)
    vec3 resultColor = vec3(1.0, 0.0, 1.0); // Bright magenta as error indicator
    
    // Find the two stops we're between
    for (int i = 0; i < MAX_COLOR_STOPS - 1; i++) {
        if (i >= uColorStopCount - 1) break;
        
        vec4 stop1 = getColorStop(i);
        vec4 stop2 = getColorStop(i + 1);
        
        float pos1 = stop1.a;
        float pos2 = stop2.a;
        
        if (t >= pos1 && t <= pos2) {
            // Normalize t between these stops
            float localT = (t - pos1) / (pos2 - pos1);
            
            // Apply gradient mode between these two stops
            if (uGradientMode == 0) {
                // For B-spline, we need 4 control points
                // Get prev and next stops if available, otherwise duplicate
                vec3 prevColor = i > 0 ? getColorStop(i - 1).rgb : stop1.rgb;
                vec3 nextColor = i < uColorStopCount - 2 ? getColorStop(i + 2).rgb : stop2.rgb;
                
                // Return B-spline interpolation
                resultColor = bSpline(prevColor, stop1.rgb, stop2.rgb, nextColor, localT);
            } 
            else if (uGradientMode == 1) {
                // Linear interpolation
                resultColor = linearGradient(stop1.rgb, stop2.rgb, localT);
            }
            else if (uGradientMode == 2) {
                // Step function - return first color
                resultColor = stop1.rgb;
            }
            else if (uGradientMode == 3) {
                // Smooth step
                resultColor = mix(stop1.rgb, stop2.rgb, smoothstep(0.0, 1.0, localT));
            }
            else {
                // Default to linear
                resultColor = linearGradient(stop1.rgb, stop2.rgb, localT);
            }
        }
    }
    
    return resultColor;
}

// Find minimum distance to any color stop
float findMinDistanceToColorStop(float t) {
    float minDist = 1.0;
    
    for (int i = 0; i < MAX_COLOR_STOPS; i++) {
        if (i >= uColorStopCount) break;
        
        vec4 stop = getColorStop(i);
        float dist = abs(t - stop.a);
        minDist = min(minDist, dist);
    }
    
    return minDist;
}

// Random function for grain effect
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Generate grain pattern
float generateGrain(vec2 uv, float time, vec2 gradientOffset, float t) {
    // Create a much finer grain effect
    float pixelSize = 500.0 * uGrainScale; // Higher scale = finer grain
    
    // Apply the gradient offset at half speed for the grain effect
    // This makes the grain move at half the speed of the gradient
    vec2 offsetUv = uv + gradientOffset * uGrainSpeed * 0.5;
    
    vec2 pixelatedUv = floor(offsetUv * pixelSize) / pixelSize;
    
    // Add some random offset to each pixel
    vec2 grainUv = pixelatedUv + random(pixelatedUv) * 0.002;
    
    // Generate random noise
    float noise = random(grainUv);
    
    // Apply density - higher density means more grains
    // We use a threshold based on the density parameter
    float densityThreshold = 1.0 - uGrainDensity;
    
    // Make the noise more pronounced near color transitions
    // Calculate how close we are to a transition point (0.25, 0.5, 0.75)
    float transitionFactor = 0.0;
    
    // Check distance to transition points (assuming 4 colors with transitions at 0.25, 0.5, 0.75)
    float d1 = abs(t - 0.25);
    float d2 = abs(t - 0.5);
    float d3 = abs(t - 0.75);
    
    // Find the closest transition point
    float minDist = min(min(d1, d2), d3);
    
    // Create a transition factor that's higher near transitions
    // 0.1 controls how wide the transition area is
    transitionFactor = 1.0 - smoothstep(0.0, 0.1, minDist);
    
    // Adjust noise based on transition factor and density
    // Higher density = more grains (lower threshold)
    float threshold = densityThreshold - transitionFactor * 0.3;
    noise = step(threshold, noise);
    
    return noise;
}

void main() {
    // Basic lighting
    vec3 light = normalize(uLightDir);
    float diffuse = max(0.0, dot(vNormal, light)) * uDiffuseIntensity + uAmbientIntensity;
    
    // Create a gradient shift offset
    vec2 gradientOffset = vec2(
        uTime * uGradientShiftX * uGradientShiftSpeed * 10.0,
        uTime * uGradientShiftY * uGradientShiftSpeed * 10.0
    );
    
    // Sample noise with the gradient shift applied DIRECTLY to the noise coordinate
    float noiseVal = cnoise(vec3(
        vUv.x * uColorNoiseScale + gradientOffset.x,
        vUv.y * uColorNoiseScale + gradientOffset.y,
        uTime * uColorNoiseSpeed
    ));
    
    // Map to [0,1] range
    float t = (noiseVal + 1.0) * 0.5;
    
    // Get color from our multi-stop gradient function
    vec3 chosenColor = multiStopGradient(t);

    // Apply diffuse lighting
    vec3 finalColor = chosenColor * diffuse;

    // Subtle rim light from Z+ direction
    float rim = 1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0)));
    rim = pow(rim, 2.0) * uRimLightIntensity;
    finalColor += vec3(1.0, 0.9, 0.8) * rim;
    
    // Apply grain effect if enabled
    if (uEnableGrain) {
        // Get the t value (position in gradient) for this pixel
        float t = (noiseVal + 1.0) * 0.5;
        
        // Use the same gradient offset for the grain effect
        float grain = generateGrain(vUv, uTime, gradientOffset, t);
        
        // Instead of just darkening/lightening, we'll create a color variation
        // by sampling nearby colors in the gradient
        
        // Sample colors slightly before and after current position
        float tOffset = uGrainThreshold * grain; // Offset based on grain and threshold parameter
        
        // Get colors before and after current position
        vec3 colorBefore = multiStopGradient(max(0.0, t - tOffset));
        vec3 colorAfter = multiStopGradient(min(1.0, t + tOffset));
        
        // Calculate transition factor (how close we are to a color stop transition)
        float minDist = findMinDistanceToColorStop(t);
        float transitionFactor = 1.0 - smoothstep(0.0, 0.1, minDist);
        
        // Mix between the colors based on grain value
        vec3 grainColor;
        if (grain > 0.5) {
            // Use color from slightly ahead in the gradient
            grainColor = colorAfter;
        } else {
            // Use color from slightly behind in the gradient
            grainColor = colorBefore;
        }
        
        // Apply more grain effect near transitions
        float grainStrength = uGrainIntensity * (transitionFactor * 0.7 + 0.3);
        
        // Mix the original color with the grain-affected color
        finalColor = mix(finalColor, grainColor, grainStrength);
    }

    gl_FragColor = vec4(finalColor, 1.0);
}`

// Initialize Three.js scene
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  41,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

// Set camera position
camera.position.set(-0.055, 0.1406, 0.651)

// Make camera look at the target point
camera.lookAt(0.0, 0.0, 0.0)

// Create renderer with modern options
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance',
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
// Modern color space setting (replaces deprecated outputEncoding)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.setClearColor(new THREE.Color('#000000'), 1.0) // Solid background
document.getElementById('bg_gradient').appendChild(renderer.domElement)

// Helper function to create a texture from color stops
function createColorStopsTexture() {
  // Create sorted copy of the stops
  const colorStops = [
    { position: 0, color: new THREE.Color('#444449') },
    { position: 0.3364485981308411, color: new THREE.Color('#353535') },
    { position: 0.6635514018691588, color: new THREE.Color('#555555') },
    { position: 1, color: new THREE.Color('#414141') },
  ]
  const sortedStops = [...colorStops].sort((a, b) => a.position - b.position)

  // Size of the texture - one pixel per color stop
  const width = sortedStops.length
  const height = 1

  // Create data array (RGBA format, 4 bytes per pixel)
  const data = new Uint8Array(width * height * 4)

  // Fill texture with color stop data
  // Each pixel has RGB from the color and A (alpha) from the position
  for (let i = 0; i < sortedStops.length; i++) {
    const baseIndex = i * 4
    const stop = sortedStops[i]

    // RGB from the color (0-255)
    data[baseIndex] = Math.floor(stop.color.r * 255)
    data[baseIndex + 1] = Math.floor(stop.color.g * 255)
    data[baseIndex + 2] = Math.floor(stop.color.b * 255)

    // Position (0-1) stored in alpha channel
    data[baseIndex + 3] = Math.floor(stop.position * 255)
  }

  // Create the texture with modern settings
  const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat)

  // Required for DataTexture to work properly
  texture.needsUpdate = true
  // Use LinearSRGBColorSpace for correct shader interpretation
  // The shader expects raw linear values, not sRGB-encoded ones
  texture.colorSpace = THREE.LinearSRGBColorSpace

  return texture
}

// Helper function to create a dummy texture
function createDummyTexture() {
  const data = new Uint8Array([255, 0, 255, 255]) // Simple 1x1 magenta texture
  const texture = new THREE.DataTexture(data, 1, 1, THREE.RGBAFormat)
  texture.needsUpdate = true // Required for DataTexture to work properly
  texture.colorSpace = THREE.LinearSRGBColorSpace
  return texture
}

// Create shader material with your custom parameters
const uniforms = {
  uTime: { value: 0.0 },
  uNoiseScaleX: { value: 1.7 },
  uNoiseScaleY: { value: 3.5 },
  uNoiseSpeed: { value: 0.08 },
  uNoiseStrength: { value: 0.15 },
  uNoiseShiftX: { value: 0.27 },
  uNoiseShiftY: { value: 0.03 },
  uNoiseShiftSpeed: { value: 0.27 },
  uColorNoiseScale: { value: 4.3 },
  uColorNoiseSpeed: { value: 0.06 },
  uGradientMode: { value: 0 },
  uGeometryType: { value: 0 },
  uGradientShiftX: { value: -0.05 },
  uGradientShiftY: { value: 0.05 },
  uGradientShiftSpeed: { value: 0.04 },
  uColors: {
    value: [
      new THREE.Vector3(
        0.057805430183792694,
        0.057805430183792694,
        0.06662593863608139
      ),
      new THREE.Vector3(
        0.035601314869097636,
        0.035601314869097636,
        0.035601314869097636
      ),
      new THREE.Vector3(
        0.09084171117479915,
        0.09084171117479915,
        0.09084171117479915
      ),
      new THREE.Vector3(
        0.05286064701616471,
        0.05286064701616471,
        0.05286064701616471
      ),
    ],
  },
  // For HTML export, we need to create a texture - this is complex in pure JS
  // We'll instead use a pre-computed data array based on our color stops
  uColorStops: {
    value: createColorStopsTexture(),
  },
  // Set the correct count to use the texture-based approach
  uColorStopCount: { value: 4 },
  uLightDir: {
    value: new THREE.Vector3(0.6000000000000001, 1, 1).normalize(),
  },
  uDiffuseIntensity: { value: 1 },
  uAmbientIntensity: { value: 0.55 },
  uRimLightIntensity: { value: 1 },
}

// Create shader material
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms,
  wireframe: false,
})

// Create geometry and mesh
const geometry = new THREE.PlaneGeometry(5, 5.4, 244, 244)

// Set material wireframe property
material.wireframe = false

const plane = new THREE.Mesh(geometry, material)
plane.rotation.x = -1.100768273857671
plane.rotation.y = 0
plane.rotation.z = 0
scene.add(plane)

// Animation loop
const clock = new THREE.Clock()

function animate() {
  requestAnimationFrame(animate)

  // Get delta time for frame-rate independent animation
  const delta = clock.getDelta()
  // Maximum delta to prevent huge jumps if the tab loses focus
  const maxDelta = 1 / 30
  const cappedDelta = Math.min(delta, maxDelta)

  // Update time uniform using delta time for frame-rate independence
  uniforms.uTime.value += 0.005 * cappedDelta * 60.0

  renderer.render(scene, camera)
}

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
})

// Add error handler for WebGL errors
renderer.domElement.addEventListener('webglcontextlost', (event) => {
  console.error('WebGL context lost:', event)
})
renderer.domElement.addEventListener('webglcontextrestored', () => {
  console.log('WebGL context restored')
  // Re-initialize any resources that need it
  if (uniforms.uColorStops && uniforms.uColorStops.value) {
    uniforms.uColorStops.value.needsUpdate = true
  }
})

// Debug info in console
console.log('Shader Uniforms:', uniforms)

// Start animation loop
animate()
