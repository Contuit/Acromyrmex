"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Loading = _interopRequireDefault(require("../Loading"));
var _HoverHelp = _interopRequireDefault(require("../HoverHelp"));
var _UiComponents = require("../../utility/UiComponents");
require("./style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } // from: https://gist.github.com/insin/bbf116e8ea10ef38447b
var FIELD_EVENT_HANDLER = /^(?:on|handle)[A-Z]/;

/**
 * Perform shallow equals comparison of two redux-form field objects to
 * determine if the field has changed.
 */
function fieldShallowEquals(field, nextField) {
  field.foreach(function (prop) {
    // Ignore event handlers, as they continually get recreated by redux-form
    if (!FIELD_EVENT_HANDLER.test(prop) && field[prop] !== nextField[prop]) {
      return false;
    }
  });
  return true;
}
var FormField = /*#__PURE__*/function (_React$Component) {
  _inherits(FormField, _React$Component);
  var _super = _createSuper(FormField);
  function FormField() {
    _classCallCheck(this, FormField);
    return _super.apply(this, arguments);
  }
  _createClass(FormField, [{
    key: "calculateWidth",
    value: function calculateWidth() {
      var _this$props = this.props,
        noLabel = _this$props.noLabel,
        vertical = _this$props.vertical,
        maxCols = _this$props.maxCols;
      if (vertical) {
        return maxCols;
      }
      return noLabel ? maxCols : 8;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        help = _this$props2.help,
        label = _this$props2.label,
        prefix = _this$props2.prefix,
        error = _this$props2.meta.error,
        loading = _this$props2.loading,
        noLabel = _this$props2.noLabel,
        stripped = _this$props2.stripped,
        maxCols = _this$props2.maxCols,
        addonBefore = _this$props2.addonBefore,
        addonAfter = _this$props2.addonAfter,
        addonCustomBefore = _this$props2.addonCustomBefore,
        addonCustomAfter = _this$props2.addonCustomAfter,
        children = _this$props2.children;
      if (loading) {
        return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_Loading["default"], null), " Field Loading...");
      }
      var validation = error ? 'error' : null;
      var width = this.calculateWidth();
      var offset = maxCols - width;
      var input = children;
      if (addonBefore || addonAfter) {
        input = /*#__PURE__*/_react["default"].createElement(_UiComponents.InputGroup, {
          style: {
            width: '100%'
          }
        }, addonBefore && /*#__PURE__*/_react["default"].createElement(_UiComponents.InputGroup.Text, null, addonBefore), input, addonAfter && /*#__PURE__*/_react["default"].createElement(_UiComponents.InputGroup.Text, null, addonAfter));
      }
      if (addonCustomBefore || addonCustomAfter) {
        input = /*#__PURE__*/_react["default"].createElement(_UiComponents.InputGroup, {
          style: {
            display: 'table'
          }
        }, addonCustomBefore, /*#__PURE__*/_react["default"].createElement("div", null, input), addonCustomAfter);
      }
      var controlLabel = /*#__PURE__*/_react["default"].createElement(_UiComponents.ControlLabel, {
        className: "control-label label"
      }, prefix, " ", label, '  ', help && /*#__PURE__*/_react["default"].createElement(_HoverHelp["default"], {
        help: help
      }));
      if (stripped) {
        return /*#__PURE__*/_react["default"].createElement(_UiComponents.FormGroup, {
          className: "clearfix form-group",
          validationState: validation
        }, !noLabel && controlLabel, " ", input, error && /*#__PURE__*/_react["default"].createElement(_UiComponents.HelpBlock, null, error));
      }
      return /*#__PURE__*/_react["default"].createElement(_UiComponents.FormGroup, {
        className: "clearfix form-group",
        validationState: validation
      }, /*#__PURE__*/_react["default"].createElement(_UiComponents.Row, null, !noLabel && /*#__PURE__*/_react["default"].createElement(_UiComponents.Col, {
        xs: maxCols,
        sm: offset
      }, controlLabel), /*#__PURE__*/_react["default"].createElement(_UiComponents.Col, {
        xs: maxCols,
        sm: width
      }, input), /*#__PURE__*/_react["default"].createElement(_UiComponents.Col, {
        xs: maxCols,
        sm: width,
        smOffset: offset
      }, error && /*#__PURE__*/_react["default"].createElement(_UiComponents.HelpBlock, null, error))));
    }
  }], [{
    key: "shouldFormFieldUpdate",
    value:
    /**
     * Perform shallow equals comparison to determine if the props of the context
     * form field component have changed, with special-case handling for the "field"
     * prop, provided by redux-form.
     * Use this as shouldComponentUpdate() on components which compose a
     * FormField in their render() method and they will only re-render when
     * necessary.
     */
    function shouldFormFieldUpdate(nextProps) {
      var keys = Object.keys(this.props);
      var nextKeys = Object.keys(nextProps);
      if (keys.length !== nextKeys.length) return true;
      var nextHasOwnProperty = Object.prototype.hasOwnProperty.bind(nextProps);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var thisProp = this.props[key];
        if (!nextHasOwnProperty(key) || key === 'field' ? !fieldShallowEquals(thisProp, nextProps[key]) : thisProp !== nextProps[key]) {
          return true;
        }
      }
      return false;
    }
  }]);
  return FormField;
}(_react["default"].Component);
FormField.propTypes = {
  meta: _propTypes["default"].shape(),
  // Help text to be displayed next to the label
  help: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  // Label text
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  prefix: _propTypes["default"].node,
  noLabel: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool,
  maxCols: _propTypes["default"].number,
  // removes Row/Col layout.. just the raw input and label
  stripped: _propTypes["default"].bool,
  // Loading state
  loading: _propTypes["default"].bool,
  children: _propTypes["default"].node.isRequired,
  // addons for inputs
  addonAfter: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  addonBefore: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  addonCustomAfter: _propTypes["default"].node,
  addonCustomBefore: _propTypes["default"].node
};
FormField.defaultProps = {
  help: '',
  label: '',
  prefix: null,
  vertical: false,
  maxCols: 12,
  meta: {
    error: ''
  },
  loading: false,
  noLabel: false,
  stripped: false,
  // addons for inputs
  addonAfter: null,
  addonBefore: null,
  addonCustomAfter: null,
  addonCustomBefore: null
};
var _default = exports["default"] = FormField;