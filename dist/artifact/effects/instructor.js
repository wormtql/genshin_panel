"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.elementalMastery += 80;
}
function apply4(attribute, params) {
    if (params.countInstructor) {
        attribute.elementalMastery += 120;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入教官4件套效果");
        }
    }
}
exports.default = [null, apply2, null, apply4, null];
