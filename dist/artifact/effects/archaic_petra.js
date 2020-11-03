"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.rockBonus += 0.15;
}
function apply4(attribute, params) {
    if (typeof attribute.tag !== "undefined") {
        attribute.tag.push("未计入悠古的磐岩4件套加成");
    }
}
exports.default = [null, apply2, null, apply4, null];
