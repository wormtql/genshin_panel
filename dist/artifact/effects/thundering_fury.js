"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.thunderBonus += 0.15;
}
function apply4(attribute, params) {
    // if (params.countThunderingFury) {
    //     attribute.bonus += 0.4;
    //     if (typeof attribute.tag !== "undefined") {
    //         attribute.tag.push("计入如雷的盛怒4件套");
    //     }
    // }
}
exports.default = [null, apply2, null, apply4, null];
