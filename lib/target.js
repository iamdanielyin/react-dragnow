(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/object/get-prototype-of', 'babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass', 'babel-runtime/helpers/possibleConstructorReturn', 'babel-runtime/helpers/inherits', 'react', 'react-dnd-html5-backend', 'react-dnd'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/object/get-prototype-of'), require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/helpers/createClass'), require('babel-runtime/helpers/possibleConstructorReturn'), require('babel-runtime/helpers/inherits'), require('react'), require('react-dnd-html5-backend'), require('react-dnd'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.getPrototypeOf, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.inherits, global.react, global.reactDndHtml5Backend, global.reactDnd);
    global.target = mod.exports;
  }
})(this, function (exports, _getPrototypeOf, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _inherits2, _react, _reactDndHtml5Backend, _reactDnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _react2 = _interopRequireDefault(_react);

  var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (type, el, Source) {
    var initialProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var style = {
      width: '100%',
      height: document.body.clientHeight || document.documentElement.clientHeight,
      position: 'absolute',
      left: 0,
      top: 0
    };

    var spec = {
      drop: function drop(props, monitor, component) {
        if (!component) {
          return;
        }
        var item = monitor.getItem();
        var delta = monitor.getDifferenceFromInitialOffset();
        var left = Math.round(item.left + delta.x);
        var top = Math.round(item.top + delta.y);
        component.move(left, top);
      }
    };

    function collect(connect, monitor) {
      return {
        connectDropTarget: connect.dropTarget()
      };
    }

    var Target = function (_Component) {
      (0, _inherits3.default)(Target, _Component);

      function Target() {
        (0, _classCallCheck3.default)(this, Target);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Target.__proto__ || (0, _getPrototypeOf2.default)(Target)).call(this));

        _this.state = {
          left: initialProps.initialLeft || 0,
          top: initialProps.initialTop || 0
        };
        return _this;
      }

      (0, _createClass3.default)(Target, [{
        key: 'move',
        value: function move(left, top) {
          this.setState({ left: left, top: top });
        }
      }, {
        key: 'render',
        value: function render() {
          var connectDropTarget = this.props.connectDropTarget;
          var _state = this.state,
              left = _state.left,
              top = _state.top;

          return connectDropTarget && connectDropTarget(_react2.default.createElement(
            'div',
            { id: type + '-t', style: style },
            _react2.default.createElement(Source, { el: el, left: left, top: top })
          ));
        }
      }]);
      return Target;
    }(_react.Component);

    var Context = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)((0, _reactDnd.DropTarget)(type, spec, collect)(Target));

    return Context;
  };
});
//# sourceMappingURL=target.js.map