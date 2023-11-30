"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _UiComponents = require("../../utility/UiComponents");
var _Icon = _interopRequireDefault(require("../Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function HoverHelp(_ref) {
  var help = _ref.help,
    position = _ref.position,
    name = _ref.name;
  var helpPopover = /*#__PURE__*/_react["default"].createElement(_UiComponents.Popover, {
    id: "field-".concat(name, "-help"),
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement(_UiComponents.Popover.Body, null, help));
  return /*#__PURE__*/_react["default"].createElement(_UiComponents.OverlayTrigger, {
    trigger: ['hover', 'focus'],
    placement: position,
    overlay: helpPopover,
    rootClose: true
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    help: true
  })));
}

// Define property types
HoverHelp.propTypes = {
  help: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  name: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  position: _propTypes["default"].string
};
HoverHelp.defaultProps = {
  position: 'right',
  name: 'na',
  help: ''
};
var _default = exports["default"] = HoverHelp;