"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _downshift = _interopRequireDefault(require("downshift"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _VirtualDropdown = require("./VirtualDropdown");

var _Field = _interopRequireDefault(require("./Field"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Autocomplete = function Autocomplete(_ref) {
  var items = _ref.items,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      filter = _ref.filter,
      onFilterChange = _ref.onFilterChange,
      icon = _ref.icon,
      autoComplete = _ref.autoComplete;
  return _react.default.createElement(_downshift.default, {
    onChange: onChange,
    selectedItem: value,
    onInputValueChange: function onInputValueChange(nextFilter) {
      return onFilterChange(nextFilter || '');
    },
    itemToString: _VirtualDropdown.itemToString,
    inputValue: filter
  }, function (_ref2) {
    var getInputProps = _ref2.getInputProps,
        getItemProps = _ref2.getItemProps,
        getLabelProps = _ref2.getLabelProps,
        selectedItem = _ref2.selectedItem,
        highlightedIndex = _ref2.highlightedIndex,
        isOpen = _ref2.isOpen;
    return _react.default.createElement("div", _VirtualDropdown.styles.root, _react.default.createElement(_VirtualDropdown.Inner, {
      isOpen: isOpen
    }, _react.default.createElement(_Field.default, {
      label: label,
      value: isOpen ? filter : value && value.text || '',
      icon: icon,
      renderInput: function renderInput(fieldProps) {
        return _react.default.createElement("input", getInputProps(_objectSpread({}, fieldProps, {
          autoComplete: autoComplete,
          placeholder: selectedItem ? (0, _VirtualDropdown.itemToString)(selectedItem) : ''
        })));
      }
    }), isOpen && items.length > 0 ? _react.default.createElement(_VirtualDropdown.ItemsContainer, {
      isOpen: isOpen
    }, _react.default.createElement(_VirtualDropdown.Items, {
      items: items,
      selectedItem: selectedItem,
      highlightedIndex: highlightedIndex,
      getItemProps: getItemProps
    })) : null));
  });
};

Autocomplete.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string,
    value: _propTypes.default.any
  })).isRequired,
  value: _propTypes.default.shape({
    text: _propTypes.default.string,
    value: _propTypes.default.any
  }),
  filter: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  onFilterChange: _propTypes.default.func.isRequired,
  icon: _propTypes.default.object,
  autoComplete: _propTypes.default.string
};
Autocomplete.defaultProps = {
  autoComplete: 'off'
};
var _default = Autocomplete;
exports.default = _default;