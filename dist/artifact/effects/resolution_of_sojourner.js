"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.attack2 += attribute.attack1 * 0.18;
}
function apply4(attribute, params) {
    attribute.bCritical += 0.3;
}
exports.default = [null, apply2, null, apply4, null];
