"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.cureEffect += 0.15;
}
function apply4(attribute, params) {
    if (typeof attribute.tag !== "undefined") {
        attribute.tag.push("未计入被怜爱的少女4件套");
    }
}
exports.default = [null, apply2, null, apply4, null];
