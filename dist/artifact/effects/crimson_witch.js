"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.fireBonus += 0.15;
}
function apply4(attribute, params) {
    if (params.countCrimsonWitch1) {
        // attribute.bonus += 0.4;
        attribute.fireBonus += 1;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("炽烈的炎之魔女4件套叠加效果记为叠加2次，即100%");
        }
    }
}
exports.default = [null, apply2, null, apply4, null];
