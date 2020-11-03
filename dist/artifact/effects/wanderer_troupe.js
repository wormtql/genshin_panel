"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.elementalMastery += 80;
}
function apply4(attribute, params) {
    if (params.countWandererTroupe) {
        attribute.bBonus += 0.35;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入流浪大地的乐团4件套");
        }
    }
}
exports.default = [null, apply2, null, apply4, null];
