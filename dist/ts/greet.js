"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    if (Array.isArray(name)) {
        return name.map((n) => `Welcome, ${n}!`);
    }
    return `Welcome, ${name}!`;
}
exports.default = greet;
//# sourceMappingURL=greet.js.map