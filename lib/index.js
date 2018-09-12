(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/object/get-prototype-of', 'babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass', 'babel-runtime/helpers/possibleConstructorReturn', 'babel-runtime/helpers/inherits', 'react', './source', './target'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/object/get-prototype-of'), require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/helpers/createClass'), require('babel-runtime/helpers/possibleConstructorReturn'), require('babel-runtime/helpers/inherits'), require('react'), require('./source'), require('./target'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.getPrototypeOf, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.inherits, global.react, global.source, global.target);
    global.index = mod.exports;
  }
})(this, function (exports, _getPrototypeOf, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _inherits2, _react, _source, _target) {
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

  var _source2 = _interopRequireDefault(_source);

  var _target2 = _interopRequireDefault(_target);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);

    function App(props) {
      (0, _classCallCheck3.default)(this, App);

      var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

      var type = '' + Date.now();
      var source = (0, _source2.default)(type);
      var el = props.children;
      var target = (0, _target2.default)(type, el, source, props);
      _this.state = {
        children: target
      };
      return _this;
    }

    (0, _createClass3.default)(App, [{
      key: 'render',
      value: function render() {
        var Children = this.state.children;
        return _react2.default.createElement(Children, null);
      }
    }]);
    return App;
  }(_react2.default.Component);

  exports.default = App;
});
//# sourceMappingURL=index.js.map