"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = stateToMarkdown;
var _draftJsUtils = require("draft-js-utils");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable max-len */ // From https://github.com/sstur/draft-js-utils/blob/master/packages/draft-js-export-markdown/src/stateToMarkdown.js
// adapted to support mentions as well
var BOLD = _draftJsUtils.INLINE_STYLE.BOLD,
  CODE = _draftJsUtils.INLINE_STYLE.CODE,
  ITALIC = _draftJsUtils.INLINE_STYLE.ITALIC,
  STRIKETHROUGH = _draftJsUtils.INLINE_STYLE.STRIKETHROUGH,
  UNDERLINE = _draftJsUtils.INLINE_STYLE.UNDERLINE;
var CODE_INDENT = '    ';
function canHaveDepth(blockType) {
  switch (blockType) {
    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
      return true;
    default:
      return false;
  }
}
function encodeContent(text) {
  return text.replace(/[*_`]/g, '\\$&');
}

// Encode chars that would normally be allowed in a URL but would conflict with
// our markdown syntax: `[foo](http://foo/)`
function encodeURL(url) {
  return url.replace(/\)/g, '%29');
}

// Escape quotes using backslash.
function escapeTitle(text) {
  return text.replace(/"/g, '\\"');
}
var MarkupGenerator = /*#__PURE__*/function () {
  // blocks: Array<ContentBlock>;
  // contentState: ContentState;
  // currentBlock: number;
  // output: Array<string>;
  // totalBlocks: number;
  // listItemCounts: Object;

  function MarkupGenerator(contentState, mentionStateToMarkdownFunctions) {
    _classCallCheck(this, MarkupGenerator);
    this.contentState = contentState;
    this.mentionStateToMarkdownFunctions = mentionStateToMarkdownFunctions;
  }
  _createClass(MarkupGenerator, [{
    key: "generate",
    value: function generate() {
      this.output = [];
      this.blocks = this.contentState.getBlockMap().toArray();
      this.totalBlocks = this.blocks.length;
      this.currentBlock = 0;
      this.listItemCounts = {};
      while (this.currentBlock < this.totalBlocks) {
        this.processBlock();
      }
      var joined = this.output.join('');
      return joined.substring(0, joined.length - 1);
    }
  }, {
    key: "processBlock",
    value: function processBlock() {
      var block = this.blocks[this.currentBlock];
      var blockType = block.getType();
      switch (blockType) {
        case _draftJsUtils.BLOCK_TYPE.HEADER_ONE:
          {
            this.insertLineBreaks(1);
            this.output.push("# ".concat(this.renderBlockContent(block), "\n"));
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.HEADER_TWO:
          {
            this.insertLineBreaks(1);
            this.output.push("## ".concat(this.renderBlockContent(block), "\n"));
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.HEADER_THREE:
          {
            this.insertLineBreaks(1);
            this.output.push("### ".concat(this.renderBlockContent(block), "\n"));
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.HEADER_FOUR:
          {
            this.insertLineBreaks(1);
            this.output.push("#### ".concat(this.renderBlockContent(block), "\n"));
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.HEADER_FIVE:
          {
            this.insertLineBreaks(1);
            this.output.push("##### ".concat(this.renderBlockContent(block), "\n"));
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.HEADER_SIX:
          {
            this.insertLineBreaks(1);
            this.output.push("###### ".concat(this.renderBlockContent(block), "\n"));
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
          {
            var blockDepth = block.getDepth();
            var lastBlock = this.getLastBlock();
            var lastBlockType = lastBlock ? lastBlock.getType() : null;
            var lastBlockDepth = lastBlock && canHaveDepth(lastBlockType) ? lastBlock.getDepth() : null;
            if (lastBlockType !== blockType && lastBlockDepth !== blockDepth - 1) {
              this.insertLineBreaks(1);
              // Insert an additional line break if following opposite list type.
              if (lastBlockType === _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM) {
                this.insertLineBreaks(1);
              }
            }
            var indent = ' '.repeat(block.depth * 4);
            this.output.push("".concat(indent, "- ").concat(this.renderBlockContent(block), "\n"));
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
          {
            var _blockDepth = block.getDepth();
            var _lastBlock = this.getLastBlock();
            var _lastBlockType = _lastBlock ? _lastBlock.getType() : null;
            var _lastBlockDepth = _lastBlock && canHaveDepth(_lastBlockType) ? _lastBlock.getDepth() : null;
            if (_lastBlockType !== blockType && _lastBlockDepth !== _blockDepth - 1) {
              this.insertLineBreaks(1);
              // Insert an additional line break if following opposite list type.
              if (_lastBlockType === _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM) {
                this.insertLineBreaks(1);
              }
            }
            var _indent = ' '.repeat(_blockDepth * 4);
            // TODO: figure out what to do with two-digit numbers
            var count = this.getListItemCount(block) % 10;
            this.output.push("".concat(_indent).concat(count, ". ").concat(this.renderBlockContent(block), "\n"));
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE:
          {
            this.insertLineBreaks(1);
            this.output.push(" > ".concat(this.renderBlockContent(block), "\n"));
            break;
          }
        case _draftJsUtils.BLOCK_TYPE.CODE:
          {
            this.insertLineBreaks(1);
            this.output.push("".concat(CODE_INDENT + this.renderBlockContent(block), "\n"));
            break;
          }
        default:
          {
            this.insertLineBreaks(1);
            this.output.push("".concat(this.renderBlockContent(block), "\n"));
            break;
          }
      }
      this.currentBlock += 1;
    }
  }, {
    key: "getLastBlock",
    value: function getLastBlock() {
      return this.blocks[this.currentBlock - 1];
    }
  }, {
    key: "getNextBlock",
    value: function getNextBlock() {
      return this.blocks[this.currentBlock + 1];
    }
  }, {
    key: "getListItemCount",
    value: function getListItemCount(block) {
      var blockType = block.getType();
      var blockDepth = block.getDepth();
      // To decide if we need to start over we need to backtrack (skipping list
      // items that are of greater depth)
      var index = this.currentBlock - 1;
      var prevBlock = this.blocks[index];
      while (prevBlock && canHaveDepth(prevBlock.getType()) && prevBlock.getDepth() > blockDepth) {
        index -= 1;
        prevBlock = this.blocks[index];
      }
      if (!prevBlock || prevBlock.getType() !== blockType || prevBlock.getDepth() !== blockDepth) {
        this.listItemCounts[blockDepth] = 0;
      }
      // eslint-disable-next-line
      return this.listItemCounts[blockDepth] = this.listItemCounts[blockDepth] + 1;
    }
  }, {
    key: "insertLineBreaks",
    value: function insertLineBreaks() {
      if (this.currentBlock > 0) {
        this.output.push('\n');
      }
    }
  }, {
    key: "renderBlockContent",
    value: function renderBlockContent(block) {
      var _this = this;
      var contentState = this.contentState;
      var blockType = block.getType();
      var blockText = block.getText();
      if (blockText === '') {
        // Prevent element collapse if completely empty.
        // TODO: Replace with constant.
        // return '\u200B';
        return '';
      }
      var charMetaList = block.getCharacterList();
      var entityPieces = (0, _draftJsUtils.getEntityRanges)(blockText, charMetaList);
      return entityPieces.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          entityKey = _ref2[0],
          stylePieces = _ref2[1];
        var finalContent = stylePieces.map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            text = _ref4[0],
            style = _ref4[1];
          // Don't allow empty inline elements.
          if (!text) {
            return '';
          }
          var content = encodeContent(text);
          if (style.has(BOLD)) {
            content = "**".concat(content, "**");
          }
          if (style.has(UNDERLINE)) {
            // TODO: encode `+`?
            content = "++".concat(content, "++");
          }
          if (style.has(ITALIC)) {
            content = "_".concat(content, "_");
          }
          if (style.has(STRIKETHROUGH)) {
            // TODO: encode `~`?
            content = "~~".concat(content, "~~");
          }
          if (style.has(CODE)) {
            content = blockType === _draftJsUtils.BLOCK_TYPE.CODE ? content : "`".concat(content, "`");
          }
          return content;
        }).join('');
        var entity = entityKey ? contentState.getEntity(entityKey) : null;
        if (entity != null && entity.getType() === _draftJsUtils.ENTITY_TYPE.LINK) {
          var data = entity.getData();
          var url = data.url || '';
          var title = data.title ? " \"".concat(escapeTitle(data.title), "\"") : '';
          return "[".concat(finalContent, "](").concat(encodeURL(url)).concat(title, ")");
        }
        if (entity != null && entity.getType() === _draftJsUtils.ENTITY_TYPE.IMAGE) {
          var _data = entity.getData();
          var src = _data.src || '';
          var alt = _data.alt ? "".concat(escapeTitle(_data.alt)) : '';
          return "![".concat(alt, "](").concat(encodeURL(src), ")");
        }
        if (entity != null) {
          // mentions
          var returnVal = false;
          _this.mentionStateToMarkdownFunctions.forEach(function (func) {
            var result = func(entity);
            if (result) {
              returnVal = result;
            }
          });
          if (returnVal) {
            return returnVal;
          }
        }
        return finalContent;
      }).join('');
    }
  }]);
  return MarkupGenerator;
}();
function stateToMarkdown(content, mentionStateToMarkdownFunctions) {
  return new MarkupGenerator(content, mentionStateToMarkdownFunctions).generate();
}