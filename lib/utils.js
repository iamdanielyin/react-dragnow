(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.utils = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getStyles = getStyles;
  exports.getSize = getSize;

  /**
   * 获取元素样式
   * @param {*} id
   */
  function getStyles(id) {
    var el = window.document.getElementById(id);
    var win = el.ownerDocument.defaultView;
    var styles = win.getComputedStyle(el, null);
    return styles;
  }

  /**
   * 获取元素尺寸
   * @param {*} id
   */
  function getSize(id) {
    var styles = getStyles(id) || {};
    var size = {
      width: window.parseFloat(styles.width),
      height: window.parseFloat(styles.height)
    };
    return size;
  }
});
//# sourceMappingURL=utils.js.map