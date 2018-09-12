(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/object/assign', 'babel-runtime/core-js/object/get-prototype-of', 'babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass', 'babel-runtime/helpers/possibleConstructorReturn', 'babel-runtime/helpers/inherits', 'react', 'prop-types', 'react-dnd'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/object/assign'), require('babel-runtime/core-js/object/get-prototype-of'), require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/helpers/createClass'), require('babel-runtime/helpers/possibleConstructorReturn'), require('babel-runtime/helpers/inherits'), require('react'), require('prop-types'), require('react-dnd'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.assign, global.getPrototypeOf, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.inherits, global.react, global.propTypes, global.reactDnd);
    global.source = mod.exports;
  }
})(this, function (exports, _assign, _getPrototypeOf, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _inherits2, _react, _propTypes, _reactDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (type) {
    var style = {
      position: 'absolute',
      cursor: 'move',
      pointerEvents: 'auto'
    };

    var spec = {
      beginDrag: function beginDrag(props) {
        var el = props.el,
            left = props.left,
            top = props.top;

        return { el: el, left: left, top: top };
      }
    };

    function collect(connect, monitor) {
      return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
      };
    }

    var propTypes = {
      el: _propTypes2.default.element.isRequired,
      isDragging: _propTypes2.default.bool.isRequired,
      connectDragSource: _propTypes2.default.func.isRequired
    };

    var Source = function (_Component) {
      (0, _inherits3.default)(Source, _Component);

      function Source() {
        (0, _classCallCheck3.default)(this, Source);
        return (0, _possibleConstructorReturn3.default)(this, (Source.__proto__ || (0, _getPrototypeOf2.default)(Source)).apply(this, arguments));
      }

      (0, _createClass3.default)(Source, [{
        key: 'render',
        value: function render() {
          var _props = this.props,
              isDragging = _props.isDragging,
              connectDragSource = _props.connectDragSource,
              el = _props.el,
              left = _props.left,
              top = _props.top;

          var t = window.document.getElementById(type + '-t');
          var win = t.ownerDocument.defaultView;
          var POINTER_EVENTS = 'pointer-events';
          var pe = win.getComputedStyle(t, null)[POINTER_EVENTS];
          if (isDragging) {
            if (pe !== 'auto') {
              t.style[POINTER_EVENTS] = 'auto';
            }
            return null;
          } else {
            if (pe !== 'none') {
              t.style[POINTER_EVENTS] = 'none';
            }
          }
          return connectDragSource(_react2.default.createElement(
            'div',
            {
              id: type + '-s',
              style: (0, _assign2.default)({ left: left, top: top, opacity: isDragging ? 0.5 : 1 }, style)
            },
            el
          ));
        }
      }]);
      return Source;
    }(_react.Component);

    Source.propTypes = propTypes;
    return (0, _reactDnd.DragSource)(type, spec, collect)(Source);
  };
});
//# sourceMappingURL=source.js.map