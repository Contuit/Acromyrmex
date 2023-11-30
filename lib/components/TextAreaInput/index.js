"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _UiComponents = require("../../utility/UiComponents");
var _FormField = _interopRequireDefault(require("../FormField"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // from: https://gist.github.com/insin/bbf116e8ea10ef38447b
function TextAreaInput(props) {
  var help = props.help,
    label = props.label,
    prefix = props.prefix,
    noLabel = props.noLabel,
    disabled = props.disabled,
    vertical = props.vertical,
    inputProps = _extends({}, (_objectDestructuringEmpty(props.input), props.input)),
    meta = props.meta;
  return /*#__PURE__*/_react["default"].createElement(_FormField["default"], {
    label: label,
    prefix: prefix,
    meta: meta,
    help: help,
    noLabel: noLabel,
    vertical: vertical
  }, /*#__PURE__*/_react["default"].createElement(_UiComponents.FormControl, _extends({
    componentClass: "textarea",
    disabled: disabled
  }, inputProps)));
}
TextAreaInput.shouldComponentUpdate = _FormField["default"].shouldFormFieldUpdate;
TextAreaInput.propTypes = {
  meta: _propTypes["default"].shape().isRequired,
  help: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  label: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  prefix: _propTypes["default"].node,
  input: _propTypes["default"].shape().isRequired,
  disabled: _propTypes["default"].bool,
  noLabel: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool
};
TextAreaInput.defaultProps = {
  help: '',
  label: '',
  prefix: null,
  noLabel: false,
  disabled: false,
  vertical: false
};
var _default = exports["default"] = TextAreaInput;