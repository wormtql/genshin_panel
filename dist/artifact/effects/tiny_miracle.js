"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.thunderRes += 0.2;
    attribute.iceRes += 0.2;
    attribute.rockRes += 0.2;
    attribute.fireRes += 0.2;
    attribute.windRes += 0.2;
    attribute.waterRes += 0.2;
}
function apply4(attribute, params) {
    if (typeof attribute.tag !== "undefined") {
        attribute.tag.push("未计入奇迹4件套效果");
    }
}
exports.default = [null, apply2, null, apply4, null];
