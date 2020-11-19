"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.attack3 += attribute.attack1 * 0.18;
}
function apply4(attribute, params) {
    if (params.countGladiatorFinale) {
        attribute.aBonus += 0.35;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入角斗士的终幕礼4件套效果");
        }
    }
}
exports.default = [null, apply2, null, apply4, null];
