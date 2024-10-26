"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var Map_1 = require("./Map");
var react_slider_1 = require("react-slider");
function Speed(_a) {
    var num = _a.num;
    return (React.createElement("h2", { className: "sub-header" }, num.toString()));
}
function Main() {
    var _a = (0, react_1.useState)(0.1), speed = _a[0], setSpeed = _a[1];
    return (React.createElement("div", null,
        React.createElement("h1", { className: "header" }, "Typescript Demo"),
        React.createElement(react_slider_1["default"], { ariaLabel: "globe-speed-slider", min: -2, max: 2, defaultValue: 0.1, step: 0.1, renderThumb: function (props, state) { return React.createElement("div", __assign({}, props), " | "); }, onChange: function (state) { return setSpeed(state); }, thumbClassName: "speed-slider-thumb", trackClassName: "speed-slider-track", withTracks: true }),
        React.createElement(Speed, { num: speed }),
        React.createElement(Map_1.Map, { speed: speed })));
}
exports["default"] = Main;
