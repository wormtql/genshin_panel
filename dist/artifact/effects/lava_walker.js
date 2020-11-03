"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apply2(attribute, params) {
    attribute.fireRes += 0.4;
}
function apply4(attribute, params) {
    if (params.countLavaWalker) {
        attribute.bonus += 0.35;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入渡过烈火的贤人4件套");
        }
    }
}
exports.default = [null, apply2, null, apply4, null];
