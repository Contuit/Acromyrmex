"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _underscore = _interopRequireDefault(require("underscore"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("react-select/dist/react-select.css");
require("./style.css");
var _Loading = _interopRequireDefault(require("../Loading"));
var _TetheredSelectWrapper = _interopRequireDefault(require("../TetheredSelectWrapper"));
var _ConfirmModal = _interopRequireDefault(require("../ConfirmModal"));
var _FormField = _interopRequireDefault(require("../FormField"));
var _Mention = _interopRequireDefault(require("../MarkdownInput/Mention"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } /* eslint-disable react/sort-comp */ // from: https://gist.github.com/insin/bbf116e8ea10ef38447b
var SelectInput = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectInput, _React$Component);
  var _super = _createSuper(SelectInput);
  function SelectInput(props) {
    var _this;
    _classCallCheck(this, SelectInput);
    _this = _super.call(this, props);
    _this.state = {
      // value: '',
      showModal: false,
      pendingVal: null
    };
    _this.templateOptionRenderer = _this.templateOptionRenderer.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(SelectInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var myOptions = this.getOptions();
      var _this$props = this.props,
        enableEmpty = _this$props.enableEmpty,
        multi = _this$props.multi;
      if (!this.valueInOptions() && !enableEmpty && myOptions[0] && !multi) {
        var firstOption = myOptions.find(function (o) {
          return !o.disabled;
        }) || myOptions[0];
        if (firstOption) {
          this.sendChange(firstOption.value);
        }
      }
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _this$props2 = this.props,
        options = _this$props2.options,
        enableAll = _this$props2.enableAll,
        templateOptions = _this$props2.templateOptions;
      var myOptions = options.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          value: item.id,
          label: item.name
        });
      });
      if (enableAll) {
        myOptions.unshift({
          value: 'all',
          label: 'All'
        });
      }
      if (templateOptions.length) {
        myOptions.push.apply(myOptions, _toConsumableArray(templateOptions.map(function (o) {
          return _objectSpread(_objectSpread({}, o), {}, {
            label: o.name,
            value: o.textValue
          });
        })));
      }
      return myOptions;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this$props3 = this.props,
        input = _this$props3.input,
        jsonParse = _this$props3.jsonParse,
        multi = _this$props3.multi;
      var val = input.value;
      if (jsonParse) {
        val = JSON.stringify(input.value);
      }
      if (multi && val && _underscore["default"].isArray(val)) {
        val = val.join(',');
      }
      return val;
    }
  }, {
    key: "valueInOptions",
    value: function valueInOptions() {
      var myOptions = this.getOptions();
      var value = this.getValue();
      var valFound = false;
      _underscore["default"].each(myOptions, function (option) {
        valFound = valFound || option.value === value || JSON.stringify(option.value) === value;
      });
      return valFound;
    }

    // this is confusing.. needs to be cleared up
  }, {
    key: "handleChange",
    value: function handleChange(val) {
      var _this$props4 = this.props,
        jsonParse = _this$props4.jsonParse,
        multi = _this$props4.multi;
      var update = val;

      // for single select, comes back as val.value
      if (val && val.value) {
        update = val.value;
      }

      // for multi select, comes back as list of val.value
      if (multi) {
        update = update.map(function (value) {
          return value.value;
        });
      }
      if (jsonParse) {
        try {
          update = JSON.parse(update);
        } catch (e) {
          // empty
        }
      }
      this.sendChange(update);
    }
  }, {
    key: "sendChange",
    value: function sendChange(value) {
      var _this$props5 = this.props,
        onChangeAction = _this$props5.onChangeAction,
        input = _this$props5.input;
      input.onChange(value);
      // this.setState({ value });
      onChangeAction(value, input.name);
    }
  }, {
    key: "templateOptionRenderer",
    value: function templateOptionRenderer(option) {
      var inputProps = _extends({}, (_objectDestructuringEmpty(this.props.input), this.props.input));
      if (option.textValue) {
        return /*#__PURE__*/_react["default"].createElement(_Mention["default"], {
          key: option.textValue,
          mention: option,
          onClick: function onClick() {
            inputProps.onChange(option.textValue);
            // this.setState({ optionSelected: true, open: false });
          }
        });
      }
      return /*#__PURE__*/_react["default"].createElement("span", null, option.name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props6 = this.props,
        label = _this$props6.label,
        help = _this$props6.help,
        loading = _this$props6.loading,
        enableEmpty = _this$props6.enableEmpty,
        addon = _this$props6.addon,
        multi = _this$props6.multi,
        meta = _this$props6.meta,
        noLabel = _this$props6.noLabel,
        disabled = _this$props6.disabled,
        vertical = _this$props6.vertical,
        optionRenderer = _this$props6.optionRenderer,
        valueRenderer = _this$props6.valueRenderer,
        input = _this$props6.input,
        inputProps = _extends({}, (_objectDestructuringEmpty(_this$props6.input), _this$props6.input)),
        confirm = _this$props6.confirm,
        confirmMessage = _this$props6.confirmMessage,
        maxCols = _this$props6.maxCols,
        addonAfter = _this$props6.addonAfter,
        addonBefore = _this$props6.addonBefore,
        addonCustomBefore = _this$props6.addonCustomBefore,
        addonCustomAfter = _this$props6.addonCustomAfter;
      var _this$state = this.state,
        showModal = _this$state.showModal,
        pendingVal = _this$state.pendingVal;
      var myOptions = this.getOptions();
      var value = this.getValue();
      var valFound = this.valueInOptions();
      if (!multi && !valFound && !loading) {
        value = enableEmpty || !myOptions[0] ? null : myOptions[0].value;
      }
      var selectInput = loading ? /*#__PURE__*/_react["default"].createElement(_Loading["default"], null) : /*#__PURE__*/_react["default"].createElement(_TetheredSelectWrapper["default"], _extends({}, inputProps, {
        name: input.name,
        title: myOptions.length === 0 ? 'no available options' : '',
        disabled: myOptions.length === 0 || disabled,
        value: value,
        onBlur: function onBlur() {
          return input.onBlur(input.value);
        },
        options: myOptions,
        clearable: !multi && enableEmpty,
        optionRenderer: optionRenderer || this.templateOptionRenderer,
        valueRenderer: valueRenderer || SelectInput.templateValueRenderer,
        joinValues: true,
        multi: multi,
        onChange: function onChange(val) {
          if (confirm) {
            _this2.setState({
              showModal: true,
              pendingVal: val
            });
          } else {
            _this2.handleChange(val);
          }
        },
        ref: function ref(select) {
          _this2.select = select;
        }
      }));
      if (addon) {
        return selectInput;
      }
      return /*#__PURE__*/_react["default"].createElement(_FormField["default"], {
        label: label,
        vertical: vertical,
        meta: meta,
        help: help,
        noLabel: noLabel,
        loading: loading,
        maxCols: maxCols,
        addonAfter: addonAfter,
        addonBefore: addonBefore,
        addonCustomAfter: addonCustomAfter,
        addonCustomBefore: addonCustomBefore
      }, selectInput, /*#__PURE__*/_react["default"].createElement(_ConfirmModal["default"], {
        show: showModal,
        title: "Confirm change",
        message: confirmMessage || 'Are you sure you want to delete this process?',
        onConfirm: function onConfirm() {
          _this2.handleChange(pendingVal);
          _this2.setState({
            showModal: false,
            pendingVal: null
          });
        },
        onCancel: function onCancel() {
          _this2.setState({
            showModal: false,
            pendingVal: null
          });
        }
      }));
    }
  }], [{
    key: "templateValueRenderer",
    value: function templateValueRenderer(option) {
      if (option.textValue) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: "form-control-template-value"
        }, option.stepName, " ", '->', " ", option.name);
      }
      return /*#__PURE__*/_react["default"].createElement("span", null, option.name);
    }
  }]);
  return SelectInput;
}(_react["default"].Component);
SelectInput.propTypes = {
  meta: _propTypes["default"].shape().isRequired,
  help: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  multi: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  addon: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape()),
  templateOptions: _propTypes["default"].arrayOf(_propTypes["default"].shape()),
  enableAll: _propTypes["default"].bool,
  enableEmpty: _propTypes["default"].bool,
  onChangeAction: _propTypes["default"].func,
  input: _propTypes["default"].shape().isRequired,
  confirmMessage: _propTypes["default"].string,
  confirm: _propTypes["default"].bool,
  noLabel: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool,
  jsonParse: _propTypes["default"].bool,
  optionRenderer: _propTypes["default"].func,
  valueRenderer: _propTypes["default"].func,
  maxCols: _propTypes["default"].number,
  addonAfter: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  addonBefore: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  addonCustomAfter: _propTypes["default"].node,
  addonCustomBefore: _propTypes["default"].node
};
SelectInput.defaultProps = {
  help: '',
  label: '',
  confirmMessage: 'Are you sure you want to make this change?',
  confirm: false,
  noLabel: false,
  multi: false,
  loading: false,
  disabled: false,
  enableAll: false,
  enableEmpty: false,
  vertical: false,
  jsonParse: false,
  addon: false,
  options: [],
  optionRenderer: undefined,
  valueRenderer: undefined,
  templateOptions: [],
  maxCols: 12,
  onChangeAction: function onChangeAction() {},
  addonAfter: null,
  addonBefore: null,
  addonCustomAfter: null,
  addonCustomBefore: null
};
var _default = exports["default"] = SelectInput;