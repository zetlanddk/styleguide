"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Items = exports.ItemsContainer = exports.Inner = exports.default = exports.VirtualDropdown = exports.itemToString = exports.styles = void 0;

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _downshift = _interopRequireDefault(require("downshift"));

var _zIndex = _interopRequireDefault(require("../../theme/zIndex"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styles = require("../Typography/styles");

var _Label = require("./Label");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: (0, _glamor.css)({
    position: 'relative',
    height: _Label.labelHeight + _Label.fieldHeight,
    marginBottom: 12
  }),
  inner: (0, _glamor.css)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    margin: '0 -12px',
    padding: '0 12px',
    background: 'transparent',
    transition: 'box-shadow .12s, background .12s'
  }),
  innerFocus: (0, _glamor.css)({
    zIndex: _zIndex.default.dropdown,
    background: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,.2)'
  }),
  items: (0, _glamor.css)({
    overflow: 'hidden',
    margin: '0 -12px',
    transition: 'opacity .2s, height .12s'
  }),
  item: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular21, {
    color: _colors.default.text,
    lineHeight: 1,
    padding: '17px 12px',
    cursor: 'pointer',
    transition: 'background .12s'
  })),
  selectedItem: (0, _glamor.css)({
    color: _colors.default.primary
  }),
  highlightedItem: (0, _glamor.css)({
    background: _colors.default.secondaryBg
  }),
  itemSeparator: (0, _glamor.css)({
    margin: '-1px 12px 0',
    borderTop: "1px solid ".concat(_colors.default.divider),
    transition: 'border-color .12s'
  }),
  hiddenItemSeparator: (0, _glamor.css)({
    borderColor: 'transparent'
  }),
  arrowDown: (0, _glamor.css)({
    position: 'absolute',
    right: 0,
    top: 28,
    pointerEvents: 'none'
  })
};
exports.styles = styles;

var itemToString = function itemToString(item) {
  return item ? item.text : null;
};

exports.itemToString = itemToString;

var VirtualDropdown =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(VirtualDropdown, _PureComponent);

  function VirtualDropdown(props) {
    var _this;

    _classCallCheck(this, VirtualDropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VirtualDropdown).call(this, props));
    _this.state = {
      focus: false
    };

    _this.onFocus = function () {
      _this.setState({
        focus: true
      });
    };

    _this.onBlur = function () {
      _this.setState({
        focus: false
      });
    };

    return _this;
  }

  _createClass(VirtualDropdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          items = _this$props.items,
          onChange = _this$props.onChange,
          white = _this$props.white,
          black = _this$props.black,
          value = _this$props.value;
      var focus = this.state.focus;
      var selectedItem = items.find(function (item) {
        return item.value === value;
      });
      return _react.default.createElement(_downshift.default, {
        onChange: onChange,
        itemToString: itemToString,
        selectedItem: selectedItem
      }, renderDropdown({
        label: label,
        items: items,
        focus: focus,
        white: white,
        black: black,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }));
    }
  }]);

  return VirtualDropdown;
}(_react.PureComponent);

exports.VirtualDropdown = VirtualDropdown;
var _default = VirtualDropdown;
exports.default = _default;

var renderDropdown = function renderDropdown(_ref) {
  var label = _ref.label,
      focus = _ref.focus,
      white = _ref.white,
      black = _ref.black,
      items = _ref.items,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur;
  return function (_ref2) {
    var getToggleButtonProps = _ref2.getToggleButtonProps,
        getItemProps = _ref2.getItemProps,
        isOpen = _ref2.isOpen,
        inputValue = _ref2.inputValue,
        selectedItem = _ref2.selectedItem,
        highlightedIndex = _ref2.highlightedIndex;
    return _react.default.createElement("div", styles.root, _react.default.createElement(Inner, {
      isOpen: isOpen
    }, _react.default.createElement(_Label.Label, {
      top: !!selectedItem,
      focus: isOpen || focus,
      text: label,
      white: white && !isOpen,
      black: black || white && isOpen
    }, _react.default.createElement(_Label.LButton, _extends({}, getToggleButtonProps(), {
      onFocus: onFocus,
      onBlur: onBlur,
      white: white && !isOpen,
      black: black || white && isOpen
    }), selectedItem ? selectedItem.text : ''), _react.default.createElement(ArrowDown, {
      fill: black && '#000' || white && (isOpen ? '#000' : '#fff') || (isOpen || focus ? _colors.default.primary : _colors.default.disabled),
      size: 30
    })), _react.default.createElement(ItemsContainer, {
      isOpen: isOpen
    }, _react.default.createElement(Items, {
      items: items,
      selectedItem: selectedItem,
      highlightedIndex: highlightedIndex,
      getItemProps: getItemProps
    }))));
  };
};

var Inner = function Inner(_ref3) {
  var isOpen = _ref3.isOpen,
      children = _ref3.children;
  return _react.default.createElement("div", (0, _glamor.merge)(styles.inner, isOpen && styles.innerFocus), children);
}; // This (stateful) component wraps a list of items and adds a fade in/out animation.


exports.Inner = Inner;

var ItemsContainer =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(ItemsContainer, _PureComponent2);

  function ItemsContainer(props) {
    var _this2;

    _classCallCheck(this, ItemsContainer);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ItemsContainer).call(this, props));
    _this2.state = {
      height: 0,
      opacity: 0
    };

    _this2.refFn = function (ref) {
      _this2.ref = ref;
    };

    return _this2;
  }

  _createClass(ItemsContainer, [{
    key: "updateHeight",
    value: function updateHeight() {
      if (this.ref) {
        var _this$ref$getBounding = this.ref.getBoundingClientRect(),
            height = _this$ref$getBounding.height;

        this.setState({
          height: height,
          opacity: 1
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateHeight();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateHeight();
    }
  }, {
    key: "render",
    value: function render() {
      var style = this.props.isOpen ? this.state : {
        height: 0,
        opacity: 0
      };
      return _react.default.createElement("div", _extends({}, styles.items, {
        style: style
      }), _react.default.createElement("div", {
        ref: this.refFn
      }, this.props.children));
    }
  }]);

  return ItemsContainer;
}(_react.PureComponent);

exports.ItemsContainer = ItemsContainer;

var isSameItem = function isSameItem(itemA, itemB) {
  return itemA === itemB || itemA && itemB && Object.keys(itemA).every(function (key) {
    return itemA[key] === itemB[key];
  });
};

var Items = function Items(_ref4) {
  var items = _ref4.items,
      selectedItem = _ref4.selectedItem,
      highlightedIndex = _ref4.highlightedIndex,
      getItemProps = _ref4.getItemProps;
  return items.map(function (item, index) {
    var i = _react.default.createElement(Item, _extends({
      key: "item-".concat(index),
      selected: isSameItem(item, selectedItem),
      highlighted: index === highlightedIndex
    }, getItemProps({
      item: item,
      index: index
    })), item.text);

    if (index === 0) {
      return i;
    }

    return [_react.default.createElement(ItemSeparator, {
      key: "item-separator-".concat(index),
      hidden: highlightedIndex !== null && (highlightedIndex === index || highlightedIndex + 1 === index)
    }), i];
  });
};

exports.Items = Items;

var Item = function Item(_ref5) {
  var selected = _ref5.selected,
      highlighted = _ref5.highlighted,
      props = _objectWithoutProperties(_ref5, ["selected", "highlighted"]);

  return _react.default.createElement("div", _extends({}, (0, _glamor.merge)(styles.item, selected && styles.selectedItem, highlighted && styles.highlightedItem), props, {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
    }
  }));
};

var ItemSeparator = function ItemSeparator(_ref6) {
  var hidden = _ref6.hidden;
  return _react.default.createElement("div", (0, _glamor.merge)(styles.itemSeparator, hidden && styles.hiddenItemSeparator));
};

var ArrowDown = function ArrowDown(_ref7) {
  var size = _ref7.size,
      fill = _ref7.fill,
      props = _objectWithoutProperties(_ref7, ["size", "fill"]);

  return _react.default.createElement("svg", _extends({}, props, {
    fill: fill
  }, styles.arrowDown, {
    width: size,
    height: size,
    viewBox: "0 0 24 24"
  }), _react.default.createElement("path", {
    d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
  }));
};