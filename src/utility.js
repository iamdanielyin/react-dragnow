
/**
 * 获取元素样式
 * @param {*} id
 */
export function getStyles (id) {
  const el = window.document.getElementById(id)
  const win = el.ownerDocument.defaultView
  const styles = win.getComputedStyle(el, null)
  return styles
}

/**
 * 获取元素尺寸
 * @param {*} id
 */
export function getSize (id) {
  const styles = getStyles(id) || {}
  const size = {
    width: window.parseFloat(styles.width),
    height: window.parseFloat(styles.height)
  }
  return size
}
