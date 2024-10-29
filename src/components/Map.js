"use strict";
exports.__esModule = true;
exports.Map = void 0;
var React = require("react");
var react_simple_maps_1 = require("react-simple-maps");
var react_1 = require("react");
function Globe(config) {
    var _a = (0, react_1.useState)(0.1), longitude = _a[0], setLongitudeSpeed = _a[1];
    var _b = (0, react_1.useState)(30), mapHeight = _b[0], setMapHeight = _b[1];
    var _c = (0, react_1.useState)(50), mapWidth = _c[0], setMapWidth = _c[1];
    var _d = (0, react_1.useState)(360), mapScale = _d[0], setMapScale = _d[1];
    (0, react_1.useEffect)(function () {
        var tick = setInterval(function () {
            if (config.map === "geoOrthographic") {
                setMapHeight(30);
                setMapWidth(50);
                setMapScale(300);
            }
            ;
            if (config.map !== "geoOrthographic") {
                setMapHeight(23);
                setMapWidth(45);
                setMapScale(180);
            }
            ;
            if (config.speed === -2)
                setLongitudeSpeed(Number(longitude) - 2);
            else if (config.speed === -1.9)
                setLongitudeSpeed(Number(longitude) - 1.9);
            else if (config.speed === -1.8)
                setLongitudeSpeed(Number(longitude) - 1.8);
            else if (config.speed === -1.7)
                setLongitudeSpeed(Number(longitude) - 1.7);
            else if (config.speed === -1.6)
                setLongitudeSpeed(Number(longitude) - 1.6);
            else if (config.speed === -1.5)
                setLongitudeSpeed(Number(longitude) - 1.5);
            else if (config.speed === -1.4)
                setLongitudeSpeed(Number(longitude) - 1.4);
            else if (config.speed === -1.3)
                setLongitudeSpeed(Number(longitude) - 1.3);
            else if (config.speed === -1.2)
                setLongitudeSpeed(Number(longitude) - 1.2);
            else if (config.speed === -1.1)
                setLongitudeSpeed(Number(longitude) - 1.1);
            else if (config.speed === -1)
                setLongitudeSpeed(Number(longitude) - 1);
            else if (config.speed === -0.9)
                setLongitudeSpeed(Number(longitude) - 0.9);
            else if (config.speed === -0.8)
                setLongitudeSpeed(Number(longitude) - 0.8);
            else if (config.speed === -0.7)
                setLongitudeSpeed(Number(longitude) - 0.7);
            else if (config.speed === -0.6)
                setLongitudeSpeed(Number(longitude) - 0.6);
            else if (config.speed === -0.5)
                setLongitudeSpeed(Number(longitude) - 0.5);
            else if (config.speed === -0.4)
                setLongitudeSpeed(Number(longitude) - 0.4);
            else if (config.speed === -0.3)
                setLongitudeSpeed(Number(longitude) - 0.3);
            else if (config.speed === -0.2)
                setLongitudeSpeed(Number(longitude) - 0.2);
            else if (config.speed === -0.1)
                setLongitudeSpeed(Number(longitude) - 0.1);
            else if (config.speed === 0)
                setLongitudeSpeed(Number(longitude) + 0.00001);
            else if (config.speed === 0.1)
                setLongitudeSpeed(Number(longitude) + 0.1);
            else if (config.speed === 0.2)
                setLongitudeSpeed(Number(longitude) + 0.2);
            else if (config.speed === 0.3)
                setLongitudeSpeed(Number(longitude) + 0.3);
            else if (config.speed === 0.4)
                setLongitudeSpeed(Number(longitude) + 0.4);
            else if (config.speed === 0.5)
                setLongitudeSpeed(Number(longitude) + 0.5);
            else if (config.speed === 0.6)
                setLongitudeSpeed(Number(longitude) + 0.6);
            else if (config.speed === 0.7)
                setLongitudeSpeed(Number(longitude) + 0.7);
            else if (config.speed === 0.8)
                setLongitudeSpeed(Number(longitude) + 0.8);
            else if (config.speed === 0.9)
                setLongitudeSpeed(Number(longitude) + 0.9);
            else if (config.speed === 1)
                setLongitudeSpeed(Number(longitude) + 1);
            else if (config.speed === 1.1)
                setLongitudeSpeed(Number(longitude) + 1.1);
            else if (config.speed === 1.2)
                setLongitudeSpeed(Number(longitude) + 1.2);
            else if (config.speed === 1.3)
                setLongitudeSpeed(Number(longitude) + 1.3);
            else if (config.speed === 1.4)
                setLongitudeSpeed(Number(longitude) + 1.4);
            else if (config.speed === 1.5)
                setLongitudeSpeed(Number(longitude) + 1.5);
            else if (config.speed === 1.6)
                setLongitudeSpeed(Number(longitude) + 1.6);
            else if (config.speed === 1.7)
                setLongitudeSpeed(Number(longitude) + 1.7);
            else if (config.speed === 1.8)
                setLongitudeSpeed(Number(longitude) + 1.8);
            else if (config.speed === 1.9)
                setLongitudeSpeed(Number(longitude) + 1.9);
            else if (config.speed === 2)
                setLongitudeSpeed(Number(longitude) + 2);
        }, 10);
        return function () { return clearInterval(tick); };
    }, [longitude]);
    return (React.createElement("div", null,
        React.createElement("div", { className: "map-div", style: { "height": "".concat(mapHeight, "%"), "width": "".concat(mapWidth, "%") } },
            React.createElement(react_simple_maps_1.ComposableMap, { className: "map", projection: config.map.toString(), projectionConfig: {
                    rotate: [Number(longitude), -15, 5],
                    center: [0, 0],
                    scale: Number(mapScale)
                }, style: {
                    "backgroundColor": "".concat("#ffffffd2")
                } },
                React.createElement(react_simple_maps_1.Graticule, { stroke: "#3d3d3d" }),
                React.createElement(react_simple_maps_1.Geographies, { geography: "./countries-110m.json" }, function (_a) {
                    var geographies = _a.geographies;
                    return geographies.map(function (geo) { return (React.createElement(react_simple_maps_1.Geography, { key: geo.rsmKey, geography: geo })); });
                })))));
}
function Map(configuration) {
    return (React.createElement("div", null,
        React.createElement(Globe, { map: configuration.map, speed: configuration.speed })));
}
exports.Map = Map;
