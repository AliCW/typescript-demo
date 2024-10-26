"use strict";
exports.__esModule = true;
exports.Map = void 0;
var React = require("react");
var react_simple_maps_1 = require("react-simple-maps");
function Globe(_a) {
    var speed = _a.speed;
    return (React.createElement("div", null,
        React.createElement("div", { className: "map", style: { height: "50%", width: "80%" } },
            React.createElement(react_simple_maps_1.ComposableMap, { projection: "geoOrthographic", projectionConfig: {
                    rotate: [0, -15, 5],
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
function Map() {
    return (React.createElement("div", null,
        React.createElement(Globe, { speed: 1 })));
}
exports.Map = Map;
