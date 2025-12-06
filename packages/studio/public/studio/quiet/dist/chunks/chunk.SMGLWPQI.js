/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/utilities/platform.ts
var IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
function detectPlatform() {
  if ("userAgentData" in navigator) {
    const uaData = navigator.userAgentData;
    const platform = uaData.platform.toLowerCase();
    if (platform.includes("mac")) return "mac";
    if (platform.includes("win")) return "windows";
    if (platform.includes("linux")) return "linux";
  }
  const userAgent = navigator.userAgent.toLowerCase();
  if (/macintosh|mac os x|mac|ipad|iphone|ipod/.test(userAgent)) return "mac";
  if (/win/.test(userAgent)) return "windows";
  if (/linux|android|unix|bsd/.test(userAgent)) return "linux";
  return "other";
}

export {
  IS_IOS,
  detectPlatform
};
