"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.thunderRes += 0.4;
}
function apply4(attribute, params) {
    if (params.countThunderSmoother) {
        attribute.bonus += 0.35;
    }
}
exports.default = [null, apply2, null, apply4, null];
