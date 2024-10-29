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
var fi_1 = require("react-icons/fi");
var react_slider_1 = require("react-slider");
;
function MapConfig(config) {
    return (React.createElement("div", null,
        React.createElement("h2", { className: "sub-header" },
            "Map: ",
            config.map,
            "   |   Spin: ",
            config.speed.toString())));
}
;
function Main() {
    var _a = (0, react_1.useState)(0.1), speed = _a[0], setSpeed = _a[1];
    var _b = (0, react_1.useState)({ map: "geoOrthographic" }), selectedMap = _b[0], setSelectedMap = _b[1];
    var mapTypeArray = ["geoOrthographic", "geoAlbers", "geoAzimuthalEqualArea",
        "geoAzimuthalEquidistant", "geoEqualEarth", "geoConicConformal", "geoConicEqualArea",
        "geoConicEquidistant", "geoStereographic", "geoMercator", "geoTransverseMercator"
    ];
    return (React.createElement("div", null,
        React.createElement("h1", { className: "header" }, "Typescript Demonstration with React Simple Maps"),
        React.createElement("label", { className: "eclipse-label", style: { "marginLeft": "5px" } }, " Map Type: "),
        React.createElement("select", { className: "eclipse-dropdown", onChange: function (event) { return setSelectedMap({ map: event.currentTarget.value }); } },
            mapTypeArray.map(function (type) {
                return (React.createElement("option", { className: "eclipse-element", value: type, key: type }, type));
            }),
            ";"),
        React.createElement("br", null),
        React.createElement(fi_1.FiChevronsLeft, { className: "slider-arrow" }),
        React.createElement(react_slider_1["default"], { ariaLabel: "globe-speed-slider", min: -2, max: 2, defaultValue: 0.1, step: 0.1, renderThumb: function (props, state) { return React.createElement("div", __assign({}, props),
                " ",
                speed,
                " "); }, onChange: function (state) { return setSpeed(state); }, thumbClassName: "slider-thumb", withTracks: true }),
        React.createElement(fi_1.FiChevronsRight, { className: "slider-arrow" }),
        React.createElement(Map_1.Map, { map: selectedMap.map, speed: speed }),
        React.createElement(MapConfig, { map: selectedMap.map, speed: speed })));
}
exports["default"] = Main;
;
