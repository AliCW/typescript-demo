"use strict";
exports.__esModule = true;
exports.Map = void 0;
var React = require("react");
var react_simple_maps_1 = require("react-simple-maps");
var react_1 = require("react");
function Globe(_a) {
    var speed = _a.speed;
    var _b = (0, react_1.useState)(0.1), longitude = _b[0], setLongitudeSpeed = _b[1];
    (0, react_1.useEffect)(function () {
        var tick = setInterval(function () {
            if (speed === -2)
                setLongitudeSpeed(longitude - 2);
            if (speed === -1.9)
                setLongitudeSpeed(longitude - 1.9);
            if (speed === -1.8)
                setLongitudeSpeed(longitude - 1.8);
            if (speed === -1.7)
                setLongitudeSpeed(longitude - 1.7);
            if (speed === -1.6)
                setLongitudeSpeed(longitude - 1.6);
            if (speed === -1.5)
                setLongitudeSpeed(longitude - 1.5);
            if (speed === -1.4)
                setLongitudeSpeed(longitude - 1.4);
            if (speed === -1.3)
                setLongitudeSpeed(longitude - 1.3);
            if (speed === -1.2)
                setLongitudeSpeed(longitude - 1.2);
            if (speed === -1.1)
                setLongitudeSpeed(longitude - 1.1);
            if (speed === -1)
                setLongitudeSpeed(longitude - 1);
            if (speed === -0.9)
                setLongitudeSpeed(longitude - 0.9);
            if (speed === -0.8)
                setLongitudeSpeed(longitude - 0.8);
            if (speed === -0.7)
                setLongitudeSpeed(longitude - 0.7);
            if (speed === -0.6)
                setLongitudeSpeed(longitude - 0.6);
            if (speed === -0.5)
                setLongitudeSpeed(longitude - 0.5);
            if (speed === -0.4)
                setLongitudeSpeed(longitude - 0.4);
            if (speed === -0.3)
                setLongitudeSpeed(longitude - 0.3);
            if (speed === -0.2)
                setLongitudeSpeed(longitude - 0.2);
            if (speed === -0.1)
                setLongitudeSpeed(longitude - 0.1);
            if (speed === 0)
                setLongitudeSpeed(longitude + 0.00001);
            if (speed === 0.1)
                setLongitudeSpeed(longitude + 0.1);
            if (speed === 0.2)
                setLongitudeSpeed(longitude + 0.2);
            if (speed === 0.3)
                setLongitudeSpeed(longitude + 0.3);
            if (speed === 0.4)
                setLongitudeSpeed(longitude + 0.4);
            if (speed === 0.5)
                setLongitudeSpeed(longitude + 0.5);
            if (speed === 0.6)
                setLongitudeSpeed(longitude + 0.6);
            if (speed === 0.7)
                setLongitudeSpeed(longitude + 0.7);
            if (speed === 0.8)
                setLongitudeSpeed(longitude + 0.8);
            if (speed === 0.9)
                setLongitudeSpeed(longitude + 0.9);
            if (speed === 1)
                setLongitudeSpeed(longitude + 1);
            if (speed === 1.1)
                setLongitudeSpeed(longitude + 1.1);
            if (speed === 1.2)
                setLongitudeSpeed(longitude + 1.2);
            if (speed === 1.3)
                setLongitudeSpeed(longitude + 1.3);
            if (speed === 1.4)
                setLongitudeSpeed(longitude + 1.4);
            if (speed === 1.5)
                setLongitudeSpeed(longitude + 1.5);
            if (speed === 1.6)
                setLongitudeSpeed(longitude + 1.6);
            if (speed === 1.7)
                setLongitudeSpeed(longitude + 1.7);
            if (speed === 1.8)
                setLongitudeSpeed(longitude + 1.8);
            if (speed === 1.9)
                setLongitudeSpeed(longitude + 1.9);
            if (speed === 2)
                setLongitudeSpeed(longitude + 2);
        }, 10);
        return function () { return clearInterval(tick); };
    }, [longitude]);
    return (React.createElement("div", null,
        React.createElement("div", { className: "map", style: { height: "50%", width: "80%" } },
            React.createElement(react_simple_maps_1.ComposableMap, { projection: "geoOrthographic", projectionConfig: {
                    rotate: [longitude, -15, 5],
                    center: [0, -40],
                    scale: 180
                }, style: {
                    "backgroundColor": "".concat("#ffffffd2")
                } },
                React.createElement(react_simple_maps_1.Graticule, { stroke: "#3d3d3d" }),
                React.createElement(react_simple_maps_1.Geographies, { geography: "./countries-110m.json" }, function (_a) {
                    var geographies = _a.geographies;
                    return geographies.map(function (geo) { return (React.createElement(react_simple_maps_1.Geography, { key: geo.rsmKey, geography: geo })); });
                })))));
}
function Map(_a) {
    var speed = _a.speed;
    return (React.createElement("div", null,
        React.createElement(Globe, { speed: speed })));
}
exports.Map = Map;
