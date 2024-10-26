"use strict";
exports.__esModule = true;
var React = require("react");
var Map_1 = require("./Map");
function HelloWorld(_a) {
    var message = _a.message;
    return (React.createElement("h2", { className: "sub-header" }, message));
}
function Main() {
    return (React.createElement("div", null,
        React.createElement("h1", { className: "header" }, "Typescript Demo"),
        React.createElement(HelloWorld, { message: "hello world" }),
        React.createElement(Map_1.Map, null)));
}
exports["default"] = Main;
