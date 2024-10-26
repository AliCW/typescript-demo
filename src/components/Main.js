"use strict";
exports.__esModule = true;
var React = require("react");
function HelloWorld(_a) {
    var message = _a.message;
    return (React.createElement("h2", null, message));
}
function Main() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Typescript Demo"),
        React.createElement(HelloWorld, { message: "hello world" })));
}
exports["default"] = Main;
