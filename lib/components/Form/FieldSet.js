"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Field = _interopRequireDefault(require("./Field"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var getErrors = function getErrors(fields, values) {
  return fields.reduce(function (acumulator, _ref) {
    var name = _ref.name,
        validator = _ref.validator;

    if (validator) {
      acumulator[name] = validator(values[name]);
    }

    return acumulator;
  }, {});
};

var fieldsState = function fieldsState(_ref2) {
  var field = _ref2.field,
      value = _ref2.value,
      error = _ref2.error,
      dirty = _ref2.dirty;
  return {
    values: _defineProperty({}, field, value),
    errors: _defineProperty({}, field, error),
    dirty: _defineProperty({}, field, dirty)
  };
};

var mergeFields = function mergeFields(_ref3) {
  var values = _ref3.values,
      errors = _ref3.errors,
      dirty = _ref3.dirty;
  return function (state) {
    return {
      values: _objectSpread({}, state.values, values),
      errors: _objectSpread({}, state.errors, errors),
      dirty: _objectSpread({}, state.dirty, dirty)
    };
  };
};

var mergeField = function mergeField(field) {
  return function (state) {
    return mergeFields(fieldsState(field))(state);
  };
};

var FieldSet =
/*#__PURE__*/
function (_Component) {
  _inherits(FieldSet, _Component);

  function FieldSet() {
    _classCallCheck(this, FieldSet);

    return _possibleConstructorReturn(this, _getPrototypeOf(FieldSet).apply(this, arguments));
  }

  _createClass(FieldSet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          fields = _this$props.fields,
          initialValues = _this$props.values,
          onChange = _this$props.onChange;
      var values = fields.reduce(function (acumulator, _ref4) {
        var name = _ref4.name;
        acumulator[name] = initialValues[name] || '';
        return acumulator;
      }, {});
      var errors = getErrors(fields, values);
      onChange({
        values: values,
        errors: errors
      }, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          fields = _this$props2.fields,
          values = _this$props2.values,
          errors = _this$props2.errors,
          dirty = _this$props2.dirty,
          _onChange = _this$props2.onChange,
          additionalFieldProps = _this$props2.additionalFieldProps;
      return _react.default.createElement(_react.Fragment, null, fields.map(function (field) {
        var label = field.label,
            type = field.type,
            autoComplete = field.autoComplete,
            name = field.name,
            validator = field.validator,
            explanation = field.explanation;
        return _react.default.createElement(_react.Fragment, {
          key: name
        }, _react.default.createElement(_Field.default, _extends({
          label: label,
          type: type,
          name: autoComplete || name,
          autoComplete: autoComplete
        }, additionalFieldProps(field), {
          value: values[name],
          error: dirty[name] && errors[name],
          onChange: function onChange(_, value, shouldValidate) {
            _onChange({
              values: _defineProperty({}, name, value),
              errors: validator ? _defineProperty({}, name, validator(value)) : {},
              dirty: _defineProperty({}, name, shouldValidate)
            });
          }
        })), explanation);
      }));
    }
  }]);

  return FieldSet;
}(_react.Component);

FieldSet.propTypes = {
  additionalFieldProps: _propTypes.default.func.isRequired,
  fields: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired,
    type: _propTypes.default.string,
    validator: _propTypes.default.func,
    autoComplete: _propTypes.default.string,
    explanation: _propTypes.default.node
  })).isRequired,
  onFieldChange: _propTypes.default.func
};
FieldSet.defaultProps = {
  additionalFieldProps: function additionalFieldProps() {}
};
FieldSet.utils = {
  fieldsState: fieldsState,
  getErrors: getErrors,
  mergeFields: mergeFields,
  mergeField: mergeField
};
var _default = FieldSet;
exports.default = _default;