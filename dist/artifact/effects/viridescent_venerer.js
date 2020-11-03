"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.windBonus += 0.15;
}
function apply4(attribute, params) {
    if (params.countViridescentVenerer) {
        attribute.bonus += 0.6;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入翠绿之影4件套");
        }
    }
}
exports.default = [null, apply2, null, apply4, null];
