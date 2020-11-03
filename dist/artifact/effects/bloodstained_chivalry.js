"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.physicalBonus += 0.25;
}
function apply4(attribute, params) {
    if (params.countBloodstainedChinalry) {
        attribute.bBonus += 0.5;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入染血的骑士道4件套");
        }
    }
}
exports.default = [null, apply2, null, apply4, null];
