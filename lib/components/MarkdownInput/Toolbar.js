"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _UiComponents = require("../../utility/UiComponents");
var _excluded = ["onClick", "children"];
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
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ToolbarButton = function ToolbarButton(props) {
  var onClick = props.onClick,
    children = props.children,
    otherProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_UiComponents.Button, _extends({
    bsStyle: "primary",
    bsSize: "xsmall"
  }, otherProps, {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      onClick(e);
    }
  }), children);
};
ToolbarButton.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node.isRequired
};
var Toolbar = /*#__PURE__*/function (_React$Component) {
  _inherits(Toolbar, _React$Component);
  var _super = _createSuper(Toolbar);
  function Toolbar() {
    var _this;
    _classCallCheck(this, Toolbar);
    _this = _super.call(this);
    _this.state = {
      popoverTarget: null,
      showLinkOverlay: false,
      linkText: ''
    };
    return _this;
  }
  _createClass(Toolbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        onInlineClicked = _this$props.onInlineClicked,
        onBlockClicked = _this$props.onBlockClicked,
        onUndoClicked = _this$props.onUndoClicked,
        onRedoClicked = _this$props.onRedoClicked,
        onLinkClicked = _this$props.onLinkClicked,
        onUnlinkClicked = _this$props.onUnlinkClicked,
        undoSize = _this$props.undoSize,
        redoSize = _this$props.redoSize,
        blockType = _this$props.blockType,
        selection = _this$props.selection,
        getEntityAtCursor = _this$props.getEntityAtCursor;
      var _this$state = this.state,
        linkText = _this$state.linkText,
        showLinkOverlay = _this$state.showLinkOverlay,
        popoverTarget = _this$state.popoverTarget;
      var entity = getEntityAtCursor();
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_UiComponents.ButtonGroup, null, /*#__PURE__*/_react["default"].createElement(ToolbarButton, {
        onClick: function onClick() {
          onInlineClicked('BOLD');
        }
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-bold"
      })), /*#__PURE__*/_react["default"].createElement(ToolbarButton, {
        onClick: function onClick() {
          onInlineClicked('ITALIC');
        }
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-italic"
      }))), ' ', /*#__PURE__*/_react["default"].createElement(_UiComponents.SplitButton, {
        title: "Normal",
        bsSize: "xsmall",
        bsStyle: "primary",
        id: "formatting-split",
        active: blockType === 'unstyled',
        onClick: function onClick() {
          onBlockClicked('normal');
        }
      }, /*#__PURE__*/_react["default"].createElement(_UiComponents.MenuItem, {
        active: blockType === 'unordered-list-item',
        onClick: function onClick() {
          onBlockClicked('unordered-list-item');
        }
      }, "Bullet List"), /*#__PURE__*/_react["default"].createElement(_UiComponents.MenuItem, {
        active: blockType === 'ordered-list-item',
        onClick: function onClick() {
          onBlockClicked('ordered-list-item');
        }
      }, "Ordered List"), /*#__PURE__*/_react["default"].createElement(_UiComponents.MenuItem, {
        active: blockType === 'blockquote',
        onClick: function onClick() {
          onBlockClicked('blockquote');
        }
      }, "Block Quote"), /*#__PURE__*/_react["default"].createElement(_UiComponents.MenuItem, {
        active: blockType === 'header-one',
        onClick: function onClick() {
          onBlockClicked('header-one');
        }
      }, "Heading Large"), /*#__PURE__*/_react["default"].createElement(_UiComponents.MenuItem, {
        active: blockType === 'header-two',
        onClick: function onClick() {
          onBlockClicked('header-two');
        }
      }, "Heading Medium"), /*#__PURE__*/_react["default"].createElement(_UiComponents.MenuItem, {
        active: blockType === 'header-three',
        onClick: function onClick() {
          onBlockClicked('header-three');
        }
      }, "Heading Small"), /*#__PURE__*/_react["default"].createElement(_UiComponents.MenuItem, {
        active: blockType === 'code-block',
        onClick: function onClick() {
          onBlockClicked('code-block');
        }
      }, "Code Block")), ' ', /*#__PURE__*/_react["default"].createElement(_UiComponents.ButtonGroup, null, /*#__PURE__*/_react["default"].createElement(ToolbarButton, {
        onClick: function onClick(e) {
          _this2.setState({
            showLinkOverlay: !showLinkOverlay,
            popoverTarget: e.currentTarget
          });
          // onLinkClicked();
        },

        disabled: selection.isCollapsed()
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-link"
      })), /*#__PURE__*/_react["default"].createElement(_UiComponents.Overlay, {
        placement: "bottom",
        target: popoverTarget,
        show: showLinkOverlay,
        container: this
      }, /*#__PURE__*/_react["default"].createElement(_UiComponents.Popover, {
        style: {
          marginLeft: 22,
          marginTop: 15
        },
        id: "link-popover"
      }, /*#__PURE__*/_react["default"].createElement(_UiComponents.FormGroup, {
        bsSize: "small",
        className: "clearfix",
        style: {
          padding: 0,
          margin: 0
        }
      }, /*#__PURE__*/_react["default"].createElement(_UiComponents.Col, {
        xs: 8,
        style: {
          padding: 0,
          margin: 0
        }
      }, /*#__PURE__*/_react["default"].createElement(_UiComponents.FormControl, {
        type: "text",
        placeholder: "http://",
        value: linkText,
        onChange: function onChange(e) {
          _this2.setState({
            linkText: e.target.value
          });
        }
      })), /*#__PURE__*/_react["default"].createElement(_UiComponents.Col, {
        xs: 4,
        style: {
          padding: 0,
          paddingLeft: 3
        }
      }, /*#__PURE__*/_react["default"].createElement(_UiComponents.ButtonGroup, null, /*#__PURE__*/_react["default"].createElement(ToolbarButton, {
        onClick: function onClick() {
          onLinkClicked(linkText);
          _this2.setState({
            showLinkOverlay: false
          });
        },
        disabled: linkText.length < 1,
        bsSize: "small",
        bsStyle: "success"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-check"
      })), /*#__PURE__*/_react["default"].createElement(ToolbarButton, {
        onClick: function onClick() {
          _this2.setState({
            showLinkOverlay: false
          });
        },
        disabled: linkText.length < 1,
        bsSize: "small",
        bsStyle: "danger"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-times"
      }))))))), /*#__PURE__*/_react["default"].createElement(ToolbarButton, {
        onClick: onUnlinkClicked,
        disabled: entity == null || entity.type !== 'LINK'
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-unlink"
      }))), ' ', /*#__PURE__*/_react["default"].createElement(_UiComponents.ButtonGroup, null, /*#__PURE__*/_react["default"].createElement(ToolbarButton, {
        onClick: onUndoClicked,
        disabled: undoSize === 0
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-undo"
      })), /*#__PURE__*/_react["default"].createElement(ToolbarButton, {
        onClick: onRedoClicked,
        disabled: redoSize === 0
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-repeat"
      }))));
    }
  }]);
  return Toolbar;
}(_react["default"].Component);
Toolbar.propTypes = {
  onInlineClicked: _propTypes["default"].func.isRequired,
  onBlockClicked: _propTypes["default"].func.isRequired,
  onUndoClicked: _propTypes["default"].func.isRequired,
  onRedoClicked: _propTypes["default"].func.isRequired,
  onLinkClicked: _propTypes["default"].func.isRequired,
  onUnlinkClicked: _propTypes["default"].func.isRequired,
  undoSize: _propTypes["default"].number.isRequired,
  redoSize: _propTypes["default"].number.isRequired,
  blockType: _propTypes["default"].string.isRequired,
  selection: _propTypes["default"].shape().isRequired,
  getEntityAtCursor: _propTypes["default"].func.isRequired
};
var _default = Toolbar;
exports["default"] = _default;