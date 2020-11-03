"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.attack2 += attribute.attack1 * 0.18;
}
function apply4(attribute, params) {
    if (params.countBraveHeart) {
        attribute.bonus += 0.3;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入勇士之心4件套效果");
        }
    }
}
exports.default = [null, apply2, null, apply4, null];
