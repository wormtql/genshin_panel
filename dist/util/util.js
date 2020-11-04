"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.mixAttribute = void 0;
function mixAttribute(base, mix) {
    // let temp = Object.assign({}, base);
    for (let key in mix) {
        if (typeof base[key] === "number") {
            base[key] += mix[key];
        }
    }
    return base;
}
exports.mixAttribute = mixAttribute;
function capitalize(s) {
    if (s.length === 0) {
        return s;
    }
    return s[0].toUpperCase() + s.slice(1);
}
exports.capitalize = capitalize;
