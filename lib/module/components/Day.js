import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { CALENDAR_HEIGHT } from '../enums';
import { addColorAlpha } from '../utils';
import { isEqual } from 'lodash';
import CircularProgressBar from './CircularProgressBar';
export const daySize = 46;
function EmptyDayPure({
  height
}) {
  const style = styles(height || CALENDAR_HEIGHT);
  return /*#__PURE__*/React.createElement(View, {
    style: style.dayCell
  });
}
export const EmptyDay = /*#__PURE__*/React.memo(EmptyDayPure);
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
  const onPress = React.useCallback(() => {
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
  const rangeRootBackground = selectedRangeBackgroundColor ?? addColorAlpha(selectedItemColor, 0.15);
  const style = styles(height || CALENDAR_HEIGHT);
  return /*#__PURE__*/React.createElement(View, {
    style: style.dayCell
  }, inRange && !isCrop ? /*#__PURE__*/React.createElement(View, {
    style: [style.rangeRoot, {
      backgroundColor: rangeRootBackground
    }]
  }) : null, isCrop && leftCrop ? /*#__PURE__*/React.createElement(View, {
    style: [style.rangeRoot, {
      left: '50%',
      backgroundColor: rangeRootBackground
    }]
  }) : null, isCrop && rightCrop ? /*#__PURE__*/React.createElement(View, {
    style: [style.rangeRoot, {
      right: '50%',
      backgroundColor: rangeRootBackground
    }]
  }) : null, /*#__PURE__*/React.createElement(Pressable, {
    disabled: disabled,
    onPress: disabled ? undefined : onPress,
    style: [style.dayContainer, containerStyle, todayItemStyle, activeItemStyle, disabled && style.disabledDay],
    testID: date,
    accessibilityRole: "button",
    accessibilityLabel: text
  }, /*#__PURE__*/React.createElement(CircularProgressBar, {
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
const styles = height => StyleSheet.create({
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
  return prevProps.date === nextProps.date && prevProps.text === nextProps.text && prevProps.disabled === nextProps.disabled && prevProps.isCurrentMonth === nextProps.isCurrentMonth && prevProps.isToday === nextProps.isToday && prevProps.isSelected === nextProps.isSelected && prevProps.inRange === nextProps.inRange && prevProps.leftCrop === nextProps.leftCrop && prevProps.rightCrop === nextProps.rightCrop && prevProps.onSelectDate === nextProps.onSelectDate && prevProps.height === nextProps.height && isEqual(prevProps.theme, nextProps.theme);
};
export default /*#__PURE__*/React.memo(Day, customComparator);
//# sourceMappingURL=Day.js.map