"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.defend2 += attribute.defend1 * 0.3;
}
function apply4(attribute, params) {
    if (typeof attribute.tag !== "undefined") {
        attribute.tag.push("未计入守护之心4件套效果");
    }
}
exports.default = [null, apply2, null, apply4, null];
