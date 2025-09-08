"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    if (Array.isArray(name)) {
        return name.map(function (n) { return "Welcome, ".concat(n, "!"); });
    }
    return "Welcome, ".concat(name, "!");
}
exports.default = greet;
