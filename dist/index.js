"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = exports.composeBasic = exports.newAttribute = exports.getAttribute = exports.getWeaponAttribute = exports.getCharacterAttribute = void 0;
const numeric_1 = require("./numeric");
const attribute_1 = require("./attribute");
const util_1 = require("./util/util");
const artifact_1 = require("./artifact");
// 角色与武器数据
var numeric_2 = require("./numeric");
Object.defineProperty(exports, "getCharacterAttribute", { enumerable: true, get: function () { return numeric_2.getCharacterAttribute; } });
Object.defineProperty(exports, "getWeaponAttribute", { enumerable: true, get: function () { return numeric_2.getWeaponAttribute; } });
Object.defineProperty(exports, "getAttribute", { enumerable: true, get: function () { return numeric_2.getAttribute; } });
// 圣遗物
__exportStar(require("./artifact"), exports);
// 属性
var attribute_2 = require("./attribute");
Object.defineProperty(exports, "newAttribute", { enumerable: true, get: function () { return attribute_2.newAttribute; } });
function composeBasic(character, weapon) {
    let a1 = numeric_1.getCharacterAttribute(character);
    let a2 = numeric_1.getWeaponAttribute(weapon);
    if (a1 === null || a2 === null) {
        return null;
    }
    let base = attribute_1.newAttribute();
    let temp = util_1.mixAttribute(base, a1);
    numeric_1.addWeaponAttribute(temp, a2);
    return temp;
}
exports.composeBasic = composeBasic;
function compose(character, weapon, artifacts, params) {
    let base = composeBasic(character, weapon);
    if (base === null) {
        return null;
    }
    params = params || {};
    artifact_1.apply(base, params, artifacts);
    return base;
}
exports.compose = compose;
