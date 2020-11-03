"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.shield += 0.35;
}
function apply4(attribute, params) {
    if (params.countRetracingBolide) {
        attribute.aBonus += 0.4;
        attribute.bBonus += 0.4;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入逆飞的流星4件套效果");
        }
    }
}
exports.default = [null, apply2, null, apply4, null];
