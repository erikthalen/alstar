/**
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {Object} Camera
 * @property {number} x
 * @property {number} y
 * @property {number} z
 */

/**
 * @typedef {Object} Box
 * @property {number} minX
 * @property {number} minY
 * @property {number} maxX
 * @property {number} maxY
 * @property {number} width
 * @property {number} height
 */

/**
 *
 * @param {Point} point
 * @param {Camera} camera
 * @returns {Point}
 */
function screenToCanvas(point, camera) {
  return {
    x: point.x / camera.z - camera.x,
    y: point.y / camera.z - camera.y,
  }
}

/**
 *
 * @param {Point} point
 * @param {Camera} camera
 * @returns {Point}
 */
function canvasToScreen(point, camera) {
  return {
    x: (point.x - camera.x) * camera.z,
    y: (point.y - camera.y) * camera.z,
  }
}

function getViewport(camera, box) {
  const topLeft = screenToCanvas({ x: box.minX, y: box.minY }, camera)
  const bottomRight = screenToCanvas({ x: box.maxX, y: box.maxY }, camera)

  return {
    minX: topLeft.x,
    minY: topLeft.y,
    maxX: bottomRight.x,
    maxY: bottomRight.y,
    width: bottomRight.x - topLeft.x,
    height: bottomRight.y - topLeft.y,
  }
}

/**
 *
 * @param {Camera} camera
 * @param {number} dx
 * @param {number} dy
 * @returns {Camera}
 */
function panCamera(camera, dx, dy) {
  return {
    x: camera.x - dx / camera.z,
    y: camera.y - dy / camera.z,
    z: camera.z,
  }
}

/**
 *
 * @param {Camera} camera
 * @param {Point} point
 * @param {number} dz
 * @returns {Camera}
 */
function zoomCamera(camera, point, dz) {
  const zoom = camera.z - dz * camera.z

  const p1 = screenToCanvas(point, camera)
  const p2 = screenToCanvas(point, { ...camera, z: zoom })

  return {
    x: camera.x + (p2.x - p1.x),
    y: camera.y + (p2.y - p1.y),
    z: zoom,
  }
}

/**
 *
 * @param {Camera} camera
 * @param {Point} point
 * @param {number} zoom
 * @returns {Camera}
 */
function zoomCameraTo(camera, point, zoom) {
  const p1 = screenToCanvas(point, camera)
  const p2 = screenToCanvas(point, { ...camera, z: zoom })

  return {
    x: camera.x + (p2.x - p1.x),
    y: camera.y + (p2.y - p1.y),
    z: zoom,
  }
}

/**
 *
 * @param {Camera} camera
 * @returns {Camera}
 */
function zoomIn(camera) {
  const i = Math.round(camera.z * 100) / 25

  const nextZoom = (i + 1) * 0.25

  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

  return zoomCameraTo(camera, center, camera.z - nextZoom)
}

/**
 *
 * @param {Camera} camera
 * @returns {Camera}
 */
function zoomOut(camera) {
  const i = Math.round(camera.z * 100) / 25

  const nextZoom = (i - 1) * 0.25

  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

  return zoomCameraTo(camera, center, camera.z - nextZoom)
}

/**
 *
 * @param {Camera} camera
 * @returns {Camera}
 */
function resetZoom(camera) {
  return zoomCamera(camera, { x: 0, y: 0 }, camera.z - 1)
}

class PanningWorkspace extends HTMLElement {
  abortController = new AbortController()

  camera = { x: 0, y: 0, z: 1 }

  static get observedAttributes() {
    return ['zoom', 'x', 'y']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, newValue)

    // const value = [...newValue].toReversed().join('')
    // this.dispatchEvent(new CustomEvent('reverse', { detail: { value } }))
  }

  printUI() {
    this.ui.zoom.textContent = `zoom: ${Math.round(this.camera.z * 100)}%`
    this.ui.x.textContent = `x: ${Math.round(this.viewport.minX)}`
    this.ui.y.textContent = `y: ${Math.round(this.viewport.minY)}`
    this.ui.width.textContent = `width: ${Math.round(this.viewport.width)}`
    this.ui.height.textContent = `height: ${Math.round(this.viewport.height)}`
  }

  /**
   *
   * @param {WheelEvent} event
   */
  handleWheel(event) {
    event.preventDefault()

    const { clientX, clientY, deltaX, deltaY, ctrlKey } = event

    if (ctrlKey) {
      this.camera = zoomCamera(
        this.camera,
        { x: clientX - window.innerWidth / 2, y: clientY - window.innerHeight / 2 },
        deltaY / 100,
      )
    } else {
      this.camera = panCamera(this.camera, deltaX, deltaY)
    }

    this.viewport = getViewport(this.camera, {
      minX: 0,
      minY: 0,
      maxX: window.innerWidth,
      maxY: window.innerHeight,
      width: window.innerWidth,
      height: window.innerHeight,
    })

    this.update()

    this.printUI()
  }

  update() {
    this.style.setProperty('--scale', this.camera.z)
    this.style.setProperty('--x', this.camera.x)
    this.style.setProperty('--y', this.camera.y)

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { zoom: this.camera.z, x: this.camera.x, y: this.camera.y },
      }),
    )
  }

  connectedCallback() {
    this.viewport = getViewport(this.camera, {
      minX: 0,
      minY: 0,
      maxX: window.innerWidth,
      maxY: window.innerHeight,
      width: window.innerWidth,
      height: window.innerHeight,
    })

    this.ui = {
      zoom: this.querySelector('#current_zoom'),
      x: this.querySelector('#current_x'),
      y: this.querySelector('#current_y'),
      width: this.querySelector('#current_width'),
      height: this.querySelector('#current_height'),
    }

    this.addEventListener('wheel', this.handleWheel.bind(this), {
      passive: false,
      signal: this.abortController.signal,
    })

    this.printUI()
  }

  disconnectedCallback() {
    this.abortController.abort()
  }
}

customElements.define('panning-workspace', PanningWorkspace)
