/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/utilities/animate.ts
function animateWithClass(el, className) {
  return new Promise((resolve) => {
    const handleFinish = () => {
      el.removeEventListener("animationend", handleFinish);
      el.removeEventListener("animationcancel", handleFinish);
      el.classList.remove(className);
      resolve();
    };
    el.classList.add(className);
    queueMicrotask(() => {
      if (el.getAnimations().length === 0) {
        el.classList.remove(className);
        resolve();
        return;
      }
      el.addEventListener("animationend", handleFinish);
      el.addEventListener("animationcancel", handleFinish);
    });
  });
}
function hasDomRectMoved(oldPosition, newPosition) {
  if (!oldPosition) return true;
  return oldPosition.top !== newPosition.top || oldPosition.left !== newPosition.left || oldPosition.width !== newPosition.width || oldPosition.height !== newPosition.height;
}
function parseCssDuration(duration) {
  if (!duration || typeof duration !== "string") {
    return 0;
  }
  const match = duration.match(/^([0-9]*\.?[0-9]+)(ms|s)$/);
  if (!match) {
    return 0;
  }
  const value = parseFloat(match[1]);
  const unit = match[2];
  switch (unit) {
    case "ms":
      return value;
    case "s":
      return value * 1e3;
    default:
      return 0;
  }
}

export {
  animateWithClass,
  hasDomRectMoved,
  parseCssDuration
};
