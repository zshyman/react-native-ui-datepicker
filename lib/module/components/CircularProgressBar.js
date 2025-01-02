import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
const CircularProgressBar = ({
  size = 100,
  strokeWidth = 10,
  progress = 50,
  color = 'blue',
  text = '50',
  textStyle = {}
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress / 100 * circumference;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, {
      width: size,
      height: size
    }]
  }, /*#__PURE__*/React.createElement(Svg, {
    width: size,
    height: size
  }, /*#__PURE__*/React.createElement(Circle, {
    stroke: "lightgray",
    fill: "none",
    cx: size / 2,
    cy: size / 2,
    r: radius,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/React.createElement(Circle, {
    stroke: color,
    fill: "none",
    cx: size / 2,
    cy: size / 2,
    r: radius,
    strokeWidth: strokeWidth,
    strokeDasharray: circumference,
    strokeDashoffset: strokeDashoffset,
    strokeLinecap: "round",
    transform: `rotate(-90 ${size / 2} ${size / 2})`
  })), /*#__PURE__*/React.createElement(View, {
    style: styles.textContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.text, textStyle]
  }, text)));
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  }
});
export default CircularProgressBar;
//# sourceMappingURL=CircularProgressBar.js.map