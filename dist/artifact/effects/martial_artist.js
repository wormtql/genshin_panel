"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.aBonus += 0.15;
    attribute.bBonus += 0.15;
}
function apply4(attribute, params) {
    if (params.countMartialArtist) {
        attribute.aBonus += 0.25;
        attribute.bBonus += 0.25;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入武人4件套");
        }
    }
}
exports.default = [null, apply2, null, apply4, null];
