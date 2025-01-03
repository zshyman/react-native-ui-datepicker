"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.daySize = exports.EmptyDay = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _enums = require("../enums");
var _utils = require("../utils");
var _lodash = require("lodash");
var _CircularProgressBar = _interopRequireDefault(require("./CircularProgressBar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const daySize = exports.daySize = 46;
function EmptyDayPure({
  height
}) {
  const style = styles(height || _enums.CALENDAR_HEIGHT);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.dayCell
  });
}
const EmptyDay = exports.EmptyDay = /*#__PURE__*/_react.default.memo(EmptyDayPure);
function Day({
  date,
  text,
  disabled,
  isCurrentMonth,
  isToday,
  isSelected,
  inRange,
  leftCrop,
  rightCrop,
  onSelectDate,
  theme,
  height,
  percentChecked = 75
}) {
  const onPress = _react.default.useCallback(() => {
    onSelectDate(date);
  }, [onSelectDate, date]);
  const {
    dayContainerStyle,
    selectedItemColor,
    todayContainerStyle,
    selectedRangeBackgroundColor
  } = theme;

  //const bothWays = inRange && leftCrop && rightCrop;
  const isCrop = inRange && (leftCrop || rightCrop) && !(leftCrop && rightCrop);
  const containerStyle = isCurrentMonth ? dayContainerStyle : {
    opacity: 0.3
  };
  const todayItemStyle = isToday ? {
    borderWidth: 2,
    borderColor: selectedItemColor || '#0047FF',
    ...todayContainerStyle
  } : null;
  const activeItemStyle = isSelected ? {
    borderColor: selectedItemColor || '#0047FF',
    backgroundColor: selectedItemColor || '#0047FF'
  } : null;
  const rangeRootBackground = selectedRangeBackgroundColor ?? (0, _utils.addColorAlpha)(selectedItemColor, 0.15);
  const style = styles(height || _enums.CALENDAR_HEIGHT);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.dayCell
  }, inRange && !isCrop ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.rangeRoot, {
      backgroundColor: rangeRootBackground
    }]
  }) : null, isCrop && leftCrop ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.rangeRoot, {
      left: '50%',
      backgroundColor: rangeRootBackground
    }]
  }) : null, isCrop && rightCrop ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.rangeRoot, {
      right: '50%',
      backgroundColor: rangeRootBackground
    }]
  }) : null, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    disabled: disabled,
    onPress: disabled ? undefined : onPress,
    style: [style.dayContainer, containerStyle, todayItemStyle, activeItemStyle, disabled && style.disabledDay],
    testID: date,
    accessibilityRole: "button",
    accessibilityLabel: text
  }, /*#__PURE__*/_react.default.createElement(_CircularProgressBar.default, {
    size: 37,
    strokeWidth: 3,
    progress: percentChecked,
    color: "tomato",
    text: text,
    textStyle: {
      color: isSelected ? 'white' : 'black'
    }
  })));
}
const styles = height => _reactNative.StyleSheet.create({
  dayCell: {
    position: 'relative',
    width: '14.2%',
    height: height / 7
  },
  dayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1.5,
    borderRadius: 100
  },
  dayTextContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabledDay: {
    opacity: 0.3
  },
  rangeRoot: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 2,
    bottom: 2
  }
});
const customComparator = (prevProps, nextProps) => {
  return prevProps.date === nextProps.date && prevProps.text === nextProps.text && prevProps.disabled === nextProps.disabled && prevProps.isCurrentMonth === nextProps.isCurrentMonth && prevProps.isToday === nextProps.isToday && prevProps.isSelected === nextProps.isSelected && prevProps.inRange === nextProps.inRange && prevProps.leftCrop === nextProps.leftCrop && prevProps.rightCrop === nextProps.rightCrop && prevProps.onSelectDate === nextProps.onSelectDate && prevProps.height === nextProps.height && (0, _lodash.isEqual)(prevProps.theme, nextProps.theme);
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(Day, customComparator);
//# sourceMappingURL=Day.js.map