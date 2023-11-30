"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _underscore = _interopRequireDefault(require("underscore"));
var _moment = _interopRequireDefault(require("moment"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Pagination = _interopRequireDefault(require("react-bootstrap/Pagination"));
var _AutoSizer = _interopRequireDefault(require("react-virtualized/dist/commonjs/AutoSizer"));
var _MultiGrid = _interopRequireDefault(require("react-virtualized/dist/commonjs/MultiGrid"));
var _CellMeasurer = _interopRequireDefault(require("react-virtualized/dist/commonjs/CellMeasurer"));
var _SortDirection = _interopRequireDefault(require("react-virtualized/dist/commonjs/Table/SortDirection"));
var _CellMeasurerCache = _interopRequireDefault(require("react-virtualized/dist/commonjs/CellMeasurer/CellMeasurerCache"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } /* eslint-disable operator-linebreak */ /* eslint-disable no-restricted-globals */ /* eslint-disable react/require-default-props */ /* eslint-disable react/default-props-match-prop-types */ /* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/mouse-events-have-key-events */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable react/no-will-update-set-state */ /* eslint-disable react/no-deprecated */ /* eslint-disable max-len */ /* eslint-disable react/no-access-state-in-setstate */ /* eslint-disable react/sort-comp */
var DataGrid = /*#__PURE__*/function (_Component) {
  _inherits(DataGrid, _Component);
  var _super = _createSuper(DataGrid);
  function DataGrid(props) {
    var _this;
    _classCallCheck(this, DataGrid);
    _this = _super.call(this, props);
    var measureOptions = props.measureAll ? {
      defaultHeight: 45,
      defaultWidth: 300
    } : {
      fixedWidth: true,
      defaultHeight: 45
      // minHeight: browser.lessThan.small ? 40 : 50,
    };
    _this.cellSizeCache = new _CellMeasurerCache["default"](measureOptions);
    _this.state = {
      focusCol: null,
      hoveredColumnIndex: null,
      hoveredRowIndex: null,
      sortBy: 'name',
      sortDirection: _SortDirection["default"].ASC,
      filters: {},
      filterOpened: false,
      scrolledAllLeft: true,
      needsRefresh: false
    };

    // stores the inputs
    _this.filters = {};
    _this.renderMultiGrid = _this.renderMultiGrid.bind(_assertThisInitialized(_this));
    _this.onGridScroll = _this.onGridScroll.bind(_assertThisInitialized(_this));
    _this.renderCell = _this.renderCell.bind(_assertThisInitialized(_this));
    _this.getColumnWidth = _this.getColumnWidth.bind(_assertThisInitialized(_this));
    _this.getRowHeight = _this.getRowHeight.bind(_assertThisInitialized(_this));
    _this.onFilterChanged = _this.onFilterChanged.bind(_assertThisInitialized(_this));

    // throttle filter changing
    _this.callDataUpdate = _underscore["default"].throttle(_this.callDataUpdate.bind(_assertThisInitialized(_this)), 750, {
      leading: true
    });
    return _this;
  }
  _createClass(DataGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var defaultSort = this.props.defaultSort;
      this.componentDidUpdate();
      if (!this.mainGrid) {
        return;
      }
      if (defaultSort) {
        if (_underscore["default"].isString(defaultSort.sortDirection) && defaultSort.sortDirection.toLowerCase() === 'asc') {
          defaultSort.sortDirection = _SortDirection["default"].ASC;
        } else if (_underscore["default"].isString(defaultSort.sortDirection) && defaultSort.sortDirection.toLowerCase() === 'desc') {
          defaultSort.sortDirection = _SortDirection["default"].DESC;
        }
        this.setTableSort(defaultSort);
      }
      setTimeout(function () {
        _this2.setState({
          needsRefresh: true
        });
      }, 1);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!this.mainGrid || !this.mainGrid._bottomRightGrid) {
        return;
      }
      var containerWidth = this.mainGrid._containerBottomStyle.width;
      var contentWidth = this.mainGrid._leftGridWidth + this.mainGrid._bottomRightGrid._scrollingContainer.scrollWidth;
      var newState = {};
      if (containerWidth === contentWidth) {
        newState = {
          scrolledAllLeft: true,
          scrolledAllRight: true
        };
      }
      if (this.mainGrid && (!_underscore["default"].isEqual(nextProps.items, this.props.items) || !_underscore["default"].isEqual(_underscore["default"].map(nextProps.columns, function (c) {
        return {
          name: c.name,
          key: c.key
        };
      }), _underscore["default"].map(this.props.columns, function (c) {
        return {
          name: c.name,
          key: c.key
        };
      })))) {
        this.cellSizeCache._rowCount = 0;
        this.cellSizeCache._columnCount = 0;
        this._refreshGridSize();
        this.mainGrid.invalidateCellSizeAfterRender();
      }
      this.setState(newState);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.state.focusCol && this.state.focusCol === nextState.focusCol) {
        this.setState({
          focusCol: null
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;
      if (!this.mainGrid) {
        return;
      }
      if (this.state.focusCol !== null) {
        setTimeout(function () {
          if (!_this3.filters[_this3.state.focusCol]) {
            return;
          }
          _this3.filters[_this3.state.focusCol].focus();
        }, 200);
      }
      if (this.state.needsRefresh) {
        console.log('clearing refresh');
        this._refreshGridSize();
        this.setState({
          needsRefresh: false
        });
      }
    }
  }, {
    key: "_refreshGridSize",
    value: function _refreshGridSize() {
      if (!this.mainGrid) {
        return;
      }
      this.cellSizeCache.clearAll();
      this.mainGrid.measureAllCells();
      // this.mainGrid.invalidateCellSizeAfterRender();
      this.mainGrid.forceUpdateGrids();
    }
  }, {
    key: "onFilterClicked",
    value: function onFilterClicked(colKey) {
      var _this4 = this;
      this.setState({
        filterOpened: !this.state.filterOpened,
        focusCol: this.state.filterOpened ? null : colKey
      }, function () {
        if (!_this4.mainGrid) return;
        _this4.mainGrid.forceUpdateGrids();
      });
      // prevent bubbling to the header
      return false;
    }
  }, {
    key: "callDataUpdate",
    value: function callDataUpdate(options) {
      this.props.onUpdateDataNeeded(options);
    }
  }, {
    key: "onFilterChanged",
    value: function onFilterChanged(filterObj) {
      var _this5 = this;
      var newFilters = _objectSpread(_objectSpread({}, this.state.filters), {}, _defineProperty({}, filterObj.key, filterObj));
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        filters: newFilters
      }), function () {
        // if this is a paged table, we need to notify that the filter has changed so the data can be
        // refreshed
        if (_this5.props.paged) {
          _this5.callDataUpdate({
            filter: newFilters
          });
        }
        if (!_this5.props.paged) {
          _this5._refreshGridSize();
        }
      });
    }
  }, {
    key: "getColumnCount",
    value: function getColumnCount() {
      return this.getColumns().length;
    }
  }, {
    key: "getRowCount",
    value: function getRowCount() {
      var _this$getRows = this.getRows(),
        length = _this$getRows.length;
      return this.props.paged ? Math.min(length, this.props.pageSize + 1) : length;
    }

    /**
     * Gets the columns to render in our table
     * @return {[Object]} array of column objects
     */
  }, {
    key: "getColumns",
    value: function getColumns() {
      return this.props.columns;
    }
  }, {
    key: "getColumn",
    value: function getColumn(index) {
      // adds defaults to the column
      return _underscore["default"].defaults(this.getColumns()[index], {
        sortable: true,
        filterable: true
      });
    }

    /**
     * Gets the rows of data to render in our table
     * @param  {Number} [index=-1] passing an index >= 0 will return a single object rather than the entire array
     * @return {[Object]} Array of objects with unknown shapes
     * @return {Object} Single object when index >=0
     */
  }, {
    key: "getRows",
    value: function getRows() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      var _this$props = this.props,
        items = _this$props.items,
        paged = _this$props.paged;

      // get the name of each column into an array
      var colNames = {};
      this.getColumns().forEach(function (col) {
        colNames[col.key] = col.name;
      });
      if (!items || !items.length) {
        var emptyRow = {};
        _underscore["default"].each(colNames, function (value, key) {
          emptyRow[key] = ' ';
        });
        var tempDataSet = [colNames, emptyRow];
        return index < 0 ? tempDataSet : tempDataSet[index];
      }

      // if we have a paged table, we don't need to do the filtering or sorting internally
      var filtered = paged ? items : this._filterRows(items);
      var sorted = paged ? filtered : this._sortRows(filtered);

      // put the header as column one, and the rest after
      var dataSet = [colNames].concat(_toConsumableArray(sorted));
      return index < 0 ? dataSet : dataSet[index];
    }

    // For now, sizing columns based on the type
  }, {
    key: "getColumnWidth",
    value: function getColumnWidth(index) {
      var _this$props2 = this.props,
        columns = _this$props2.columns,
        columnWidthMultiplier = _this$props2.columnWidthMultiplier,
        measureAll = _this$props2.measureAll;
      var _columns$index$index = columns[index.index],
        type = _columns$index$index.type,
        width = _columns$index$index.width;
      if (measureAll) {
        return this.cellSizeCache.columnWidth(index) + 20;
      }
      var newWidth = columnWidthMultiplier * 200;
      if (typeof width === 'number') {
        newWidth = width;
      } else {
        switch (type) {
          case 'text':
          case 'list':
            newWidth = columnWidthMultiplier * 300;
            break;
          case 'date':
            newWidth = columnWidthMultiplier * 150;
            break;
          case 'checkbox':
            newWidth = columnWidthMultiplier * 150;
            break;
          default:
            newWidth = columnWidthMultiplier * 200;
            break;
        }
      }

      // if its the last column, and the table doesn't take up all the space, the last column should fill
      // if (index.index === columns.length - 1) {
      //   let sum = newWidth;
      //   for (let i = 0; i < index; i++) {
      //     sum += this.getColumnWidth(i);
      //   }
      //
      //   if (this.container && sum < this.container.offsetWidth) {
      //     newWidth = this.container.offsetWidth - sum;
      //   }
      // }

      return newWidth;
    }
  }, {
    key: "getRowHeight",
    value: function getRowHeight(index) {
      return this.cellSizeCache.rowHeight(index);
    }
  }, {
    key: "_filterRows",
    value: function _filterRows(items) {
      var _this6 = this;
      var filters = this.state.filters;
      if (Object.keys(filters).length === 0) {
        return items;
      }
      var filterItem = function filterItem(result, item, filterKey) {
        var filterObj = filters[filterKey];
        var filterCol = _underscore["default"].findWhere(_this6.getColumns(), {
          key: filterKey
        });
        var filterVal = filterObj.value.toLowerCase();
        if (!filterVal) {
          return;
        }
        var checkAgainst = DataGrid.formatData(filterCol, item);
        if (!checkAgainst) {
          result.keep = false;
          return;
        }
        var depth = 0;
        while (!_underscore["default"].isFunction(checkAgainst.toLowerCase) && checkAgainst.props && checkAgainst.props.children && depth < 5) {
          checkAgainst = checkAgainst.props.children;
          depth++;
        }
        if (!_underscore["default"].isFunction(checkAgainst.toLowerCase)) {
          result.keep = false;
          return;
        }
        var itemVal = checkAgainst.toLowerCase();
        if (itemVal && itemVal.indexOf(filterVal) < 0) {
          result.keep = false;
        }
      };
      return items.filter(function (item) {
        var result = {
          keep: true
        };
        Object.keys(filters).forEach(filterItem.bind(null, result, item));
        return result.keep;
      });
    }
  }, {
    key: "_sortRows",
    value: function _sortRows(items) {
      var _this$state = this.state,
        sortBy = _this$state.sortBy,
        sortDirection = _this$state.sortDirection;
      return DataGrid.sortRows(items, this.getColumns(), {
        sortBy: sortBy,
        sortDirection: sortDirection
      });
    }
  }, {
    key: "setTableSort",
    value: function setTableSort(_ref, callback) {
      var _this7 = this;
      var sortBy = _ref.sortBy,
        sortDirection = _ref.sortDirection;
      if (!sortBy) {
        throw new Error('setTableSort requires sortBy option');
      }
      if (!sortDirection) {
        throw new Error('setTableSort requires sortDirection option');
      }
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        sortBy: sortBy,
        sortDirection: sortDirection
      }), function () {
        if (_underscore["default"].isFunction(callback)) {
          callback();
        }
        _this7._refreshGridSize();
      });
    }
  }, {
    key: "onGridScroll",
    value: function onGridScroll(scrollInfo) {
      var _this8 = this;
      var scrollLeft = scrollInfo.scrollLeft,
        clientWidth = scrollInfo.clientWidth,
        scrollWidth = scrollInfo.scrollWidth;
      var scrolledAllRight = scrollLeft + clientWidth >= scrollWidth;
      var scrolledAllLeft = scrollLeft === 0;
      var updateObj = {};
      if (scrolledAllRight !== this.state.scrolledAllRight) {
        updateObj.scrolledAllRight = scrolledAllRight;
      }
      if (scrolledAllLeft !== this.state.scrolledAllLeft) {
        updateObj.scrolledAllLeft = scrolledAllLeft;
      }
      if (!_underscore["default"].isEqual(updateObj, {})) {
        this.setState(updateObj, function () {
          if (!_this8.mainGrid) return;
          _this8.mainGrid.forceUpdateGrids();
        });
      }
      this.props.onScroll(scrollInfo);
    }
  }, {
    key: "renderMultiGrid",
    value: function renderMultiGrid(_ref2) {
      var _this9 = this;
      var width = _ref2.width,
        height = _ref2.height;
      var fixedColumns = this.props.fixedColumns;
      var boxShadow = this.state.scrolledAllLeft ? false : '1px 3px 3px #a2a2a2';
      var colCount = this.getColumnCount();
      var rowCount = this.getRowCount();
      return /*#__PURE__*/_react["default"].createElement(_MultiGrid["default"], {
        cellRenderer: this.renderCell,
        columnCount: colCount,
        columnWidth: this.getColumnWidth,
        fixedColumnCount: colCount < 2 ? 0 : Math.min(fixedColumns, colCount),
        height: height,
        rowHeight: this.getRowHeight,
        rowCount: rowCount,
        fixedRowCount: 1,
        deferredMeasurementCache: this.cellSizeCache,
        noRowsRenderer: DataGrid.emptyRenderer,
        width: width,
        onScroll: this.onGridScroll,
        enableFixedColumnScroll: true,
        className: (0, _classnames["default"])('data-grid', {
          'scrolled-left': this.state.scrolledAllLeft
        }),
        styleBottomLeftGrid: {
          boxShadow: boxShadow
        },
        ref: function ref(grid) {
          _this9.mainGrid = grid;
        }
      });
    }
  }, {
    key: "_onSortChanged",
    value: function _onSortChanged(column) {
      var _this$props3 = this.props,
        paged = _this$props3.paged,
        onUpdateDataNeeded = _this$props3.onUpdateDataNeeded;
      var _this$state2 = this.state,
        sortBy = _this$state2.sortBy,
        sortDirection = _this$state2.sortDirection;
      // discard non-sortable columns
      if (!column.sortable) {
        return;
      }
      var newSortObj = {};
      if (sortBy === column.key && column.sortable) {
        // clicking the header that is currently sorted invokes sorting in the opposite direction
        newSortObj.sortBy = column.key;
        newSortObj.sortDirection = sortDirection === _SortDirection["default"].ASC ? _SortDirection["default"].DESC : _SortDirection["default"].ASC;
      } else if (column.sortable) {
        // clicking other headers that are sortable will switch sorting to them, and default to ascending order
        newSortObj.sortBy = column.key;
        newSortObj.sortDirection = _SortDirection["default"].ASC;
      }
      this.setTableSort(newSortObj, function () {
        if (paged) {
          onUpdateDataNeeded({
            sort: newSortObj
          });
        }
      });
    }
  }, {
    key: "renderCell",
    value: function renderCell(_ref3) {
      var _this10 = this;
      var columnIndex = _ref3.columnIndex,
        rowIndex = _ref3.rowIndex,
        style = _ref3.style,
        parent = _ref3.parent;
      var onRowClicked = this.props.onRowClicked;
      var data = this.getRows(rowIndex);
      if (!data) {
        return null;
      }
      var column = this.getColumn(columnIndex);
      if (!column) return '';
      var _this$state3 = this.state,
        sortBy = _this$state3.sortBy,
        sortDirection = _this$state3.sortDirection;
      var filter = this.state.filters[column.key];
      var rowIsHeader = rowIndex === 0;
      var cellStyles = _objectSpread(_objectSpread({}, style), {}, {
        width: this.getColumnWidth({
          index: columnIndex
        })
      });
      if (rowIsHeader) {
        cellStyles.minHeight = 45;
      }
      return /*#__PURE__*/_react["default"].createElement(_CellMeasurer["default"], {
        cache: this.cellSizeCache,
        columnIndex: columnIndex,
        key: "".concat(columnIndex, ",").concat(rowIndex),
        parent: parent,
        rowIndex: rowIndex,
        ref: function ref(cellMeasurer) {
          _this10.cellMeasurer = cellMeasurer;
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: cellStyles,
        className: (0, _classnames["default"])({
          'grid-cell': !rowIsHeader,
          'grid-header-cell': rowIsHeader,
          'grid-header-filterable': column.filterable,
          'grid-row-even': rowIndex % 2 === 0,
          'first-col': columnIndex === 0,
          'last-col': columnIndex === this.getColumnCount(),
          'grid-cell-filter': rowIsHeader && this.state.filterOpened,
          'grid-cell-sort': rowIsHeader && sortBy === column.key,
          'grid-row-hovered': rowIndex === this.state.hoveredRowIndex,
          'grid-column-hovered': columnIndex === this.state.hoveredColumnIndex
        }),
        onMouseOver: function onMouseOver() {
          _this10.setState({
            hoveredColumnIndex: columnIndex,
            hoveredRowIndex: rowIndex
          }, function () {
            if (!_this10.mainGrid) return;
            _this10.mainGrid.forceUpdateGrids();
          });
        },
        onClick: function onClick() {
          if (rowIsHeader) {
            _this10._onSortChanged(column);
          } else {
            // delegate to onRowClicked prop
            onRowClicked(data);
          }
        }
      }, rowIsHeader && sortBy === column.key && /*#__PURE__*/_react["default"].createElement("span", {
        className: "grid-sort-indicator"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: (0, _classnames["default"])('fa', {
          'fa-sort-asc': sortDirection === _SortDirection["default"].ASC,
          'fa-sort-desc': sortDirection === _SortDirection["default"].DESC
        })
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "grid-cell-data"
      }, rowIsHeader ? data[column.key] : DataGrid.formatData(column, data)), rowIsHeader && column.filterable && /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "filter-input",
        onClick: function onClick(e) {
          // when we click on the input we need to prevent sorting
          e.stopPropagation();
        },
        ref: function ref(input) {
          _this10.filters[column.key] = input;
        },
        value: filter && filter.value ? filter.value : '',
        onChange: function onChange(e) {
          var filterObj = {
            key: column.key,
            value: e.target.value
          };
          _this10.onFilterChanged(filterObj);
        }
      }), rowIsHeader && column.filterable && /*#__PURE__*/_react["default"].createElement("a", {
        className: (0, _classnames["default"])('grid-filter-indicator', {
          active: filter && filter.value
        }),
        tabIndex: columnIndex,
        onClick: function onClick(e) {
          e.stopPropagation();
          _this10.onFilterClicked(column.key);
        }
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-filter fa-fw"
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this11 = this;
      var _this$props4 = this.props,
        paged = _this$props4.paged,
        currentPage = _this$props4.currentPage;
      var filter = this.state.filters;
      var rowCount = this.getRowCount();
      var colCount = this.getColumnCount();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "grid-container",
        ref: function ref(container) {
          _this11.container = container;
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "grid-content"
      }, /*#__PURE__*/_react["default"].createElement(_AutoSizer["default"], _extends({}, this.props.gridProps, {
        needsRefresh: this.state.needsRefresh,
        rowCount: rowCount,
        colCount: colCount,
        currentPage: currentPage,
        filter: filter
      }), this.renderMultiGrid)), paged && this._renderFooter(), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('scroll-x-indicator', {
          faded: this.state.scrolledAllRight
        })
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-fw fa-angle-double-right"
      })));
    }
  }, {
    key: "_renderFooter",
    value: function _renderFooter() {
      var _this$props5 = this.props,
        pageSize = _this$props5.pageSize,
        totalItemCount = _this$props5.totalItemCount,
        currentPage = _this$props5.currentPage,
        onUpdateDataNeeded = _this$props5.onUpdateDataNeeded;
      var showing = Math.min(totalItemCount, (currentPage - 1) * pageSize + pageSize);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "grid-footer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "paginator"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "paginator-label"
      }, /*#__PURE__*/_react["default"].createElement("em", null, "Showing ", (currentPage - 1) * pageSize + 1, " - ", showing, " of ", totalItemCount)), /*#__PURE__*/_react["default"].createElement(_Pagination["default"], {
        size: "small",
        items: Math.ceil(1.0 * totalItemCount / pageSize),
        activePage: currentPage,
        maxButtons: 4,
        ellipsis: true,
        onSelect: function onSelect(eventKey) {
          onUpdateDataNeeded({
            page: eventKey
          });
        },
        prev: true,
        next: true
      })));
    }
  }], [{
    key: "emptyRenderer",
    value: function emptyRenderer() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "no-rows"
      }, "No rows");
    }
  }, {
    key: "sortRows",
    value: function sortRows(items, columns, _ref4) {
      var sortBy = _ref4.sortBy,
        sortDirection = _ref4.sortDirection;
      var sortCol = _underscore["default"].findWhere(columns, {
        key: sortBy
      });

      // trying to sort by a column that is not part of this table
      if (!sortCol) {
        return items;
      }
      return items.sort(function (a, b) {
        var aVal = DataGrid.formatData(sortCol, a);
        var bVal = DataGrid.formatData(sortCol, b);
        if (typeof aVal === 'undefined') {
          return 1;
        }
        if (typeof bVal === 'undefined') {
          return -1;
        }
        if (aVal < bVal) {
          return sortDirection === _SortDirection["default"].ASC ? -1 : 1;
        }
        if (aVal > bVal) {
          return sortDirection === _SortDirection["default"].ASC ? 1 : -1;
        }
        return 0;
      });
    }
  }, {
    key: "_formatDateWithString",
    value: function _formatDateWithString(date, string) {
      var toParse = isNaN(date) ? date : Number(date);
      var tryFormat;
      if (typeof toParse === 'number') {
        tryFormat =
        // hacky way to check if millisecond timestamp or seconds
        toParse > 99999999999 ? (0, _moment["default"])(toParse).format(string) : _moment["default"].unix(toParse).format(string);
      } else {
        tryFormat = (0, _moment["default"])(toParse).format(string);
      }
      if (tryFormat === 'Invalid date') {
        return date;
      }
      return tryFormat;
    }
  }, {
    key: "formatData",
    value: function formatData(column, data) {
      if (_underscore["default"].isFunction(column.formatter)) {
        return column.formatter(data);
      }
      var myData = null;
      if (column.key.indexOf('.') > -1) {
        var split = column.key.split('.');
        if (split.length < 2) {
          return;
        }
        myData = data[split[0]] ? data[split[0]][split[1]] : '';
      } else {
        myData = data[column.key];
      }
      return DataGrid.formatValue(myData, column.type);
    }
  }, {
    key: "formatValue",
    value: function formatValue(value, type) {
      switch (type) {
        case 'date':
          return DataGrid._formatDateWithString(value, 'M/D/YYYY');
        case 'dateTime':
          return DataGrid._formatDateWithString(value, 'M/D/YYYY HH:mm');
        case 'array':
          return /*#__PURE__*/_react["default"].createElement("ul", null, value.map(function (item) {
            return /*#__PURE__*/_react["default"].createElement("li", {
              key: item
            }, item);
          }));
        default:
          return value;
      }
    }
  }]);
  return DataGrid;
}(_react.Component);
DataGrid.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape()).isRequired,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].shape()).isRequired,
  onRowClicked: _propTypes["default"].func,
  onScroll: _propTypes["default"].func,
  gridProps: _propTypes["default"].shape(),
  defaultSort: _propTypes["default"].shape({
    sortBy: _propTypes["default"].string,
    sortDirection: _propTypes["default"].string
  }),
  columnWidthMultiplier: _propTypes["default"].number,
  fixedColumns: _propTypes["default"].number,
  measureAll: _propTypes["default"].bool,
  // paging props follow
  paged: _propTypes["default"].bool,
  pageSize: _propTypes["default"].number,
  currentPage: _propTypes["default"].number,
  totalItemCount: _propTypes["default"].number,
  onUpdateDataNeeded: _propTypes["default"].func
};
DataGrid.defaultProps = {
  title: '',
  fixedColumns: 1,
  defaultSort: null,
  columnWidthMultiplier: 1,
  onPageChange: function onPageChange() {},
  onScroll: function onScroll() {},
  onRowClicked: function onRowClicked() {},
  measureAll: false,
  // paging props follow
  paged: false,
  pageSize: 50,
  currentPage: 1,
  totalItemCount: 0,
  onUpdateDataNeeded: function onUpdateDataNeeded() {}
};
var _default = exports["default"] = DataGrid;