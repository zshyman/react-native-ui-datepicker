"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, {
      width: size,
      height: size
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: size,
    height: size
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Circle, {
    stroke: "lightgray",
    fill: "none",
    cx: size / 2,
    cy: size / 2,
    r: radius,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Circle, {
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
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.textContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.text, textStyle]
  }, text)));
};
const styles = _reactNative.StyleSheet.create({
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
var _default = exports.default = CircularProgressBar;
//# sourceMappingURL=CircularProgressBar.js.map