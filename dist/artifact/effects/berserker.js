"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.critical += 0.12;
    attribute.bCritical += 0.12;
    attribute.qCritical += 0.12;
    attribute.eCritical += 0.12;
}
function apply4(attribute, paarms) {
    if (paarms.countBerserker) {
        attribute.critical += 0.24;
        attribute.bCritical += 0.24;
        attribute.eCritical += 0.24;
        attribute.qCritical += 0.24;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入战狂4件套效果");
        }
    }
}
exports.default = [null, apply2, null, apply4, null];
