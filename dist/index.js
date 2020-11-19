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
exports.compose2 = exports.compose = exports.newAttribute = exports.applyArtifacts = exports.supportedWeapons = exports.supportedCharacters = exports.getWeaponAttribute = exports.getCharacterAttribute = void 0;
const numeric_1 = require("./numeric");
const attribute_1 = require("./attribute");
const artifact_1 = require("./artifact");
// import { CharacterInterface, WeaponInterface, BonusItemInterface } from "./common/type";
const common_1 = require("./common");
// 角色与武器数据
var numeric_2 = require("./numeric");
Object.defineProperty(exports, "getCharacterAttribute", { enumerable: true, get: function () { return numeric_2.getCharacterAttribute; } });
Object.defineProperty(exports, "getWeaponAttribute", { enumerable: true, get: function () { return numeric_2.getWeaponAttribute; } });
// applyCharacterBase, applyWeaponBase,
// applyCharacterSecondary, applyWeaponSecondary
Object.defineProperty(exports, "supportedCharacters", { enumerable: true, get: function () { return numeric_2.supportedCharacters; } });
Object.defineProperty(exports, "supportedWeapons", { enumerable: true, get: function () { return numeric_2.supportedWeapons; } });
// 圣遗物
var artifact_2 = require("./artifact");
Object.defineProperty(exports, "applyArtifacts", { enumerable: true, get: function () { return artifact_2.apply; } });
// 属性
var attribute_2 = require("./attribute");
Object.defineProperty(exports, "newAttribute", { enumerable: true, get: function () { return attribute_2.newAttribute; } });
// 信息
__exportStar(require("./info"), exports);
function compose(character, weapon, artifacts, params) {
    let base = attribute_1.newAttribute();
    let a1;
    if (typeof character === "object") {
        a1 = character;
    }
    else {
        let temp = numeric_1.getCharacterAttribute(character);
        if (temp === null) {
            return null;
        }
        a1 = temp;
    }
    let a2;
    if (typeof weapon === "object") {
        a2 = weapon;
    }
    else {
        let temp = numeric_1.getWeaponAttribute(weapon);
        if (temp === null) {
            return null;
        }
        a2 = temp;
    }
    numeric_1.applyCharacterPrimary(base, a1);
    numeric_1.applyWeaponPrimary(base, a2);
    numeric_1.applyCharacterSecondary(base, a1);
    numeric_1.applyWeaponSecondary(base, a2);
    if (!artifacts || artifacts.length === 0) {
        return base;
    }
    params = params || {};
    artifact_1.apply(base, artifacts, params);
    return base;
}
exports.compose = compose;
function compose2(bonus, arts, params) {
    let ret = attribute_1.newAttribute();
    for (let i = 0; i < bonus.length; i++) {
        let item = bonus[i];
        for (let key in item.primary) {
            common_1.applyPrimaryTag(ret, key, item.primary[key]);
        }
    }
    for (let i = 0; i < bonus.length; i++) {
        let item = bonus[i];
        for (let key in item.secondary) {
            common_1.applySecondaryTag(ret, key, item.secondary[key]);
        }
    }
    if (!arts || arts.length === 0) {
        return ret;
    }
    params = params || {};
    artifact_1.apply(ret, arts, params);
    return ret;
}
exports.compose2 = compose2;
// export function compose(character: string, weapon: string, artifacts: Artifact[], params?: Param): Attribute | null {
//     let base: Attribute | null = composeBasic(character, weapon);
//     if (base === null) {
//         return null;
//     }
//     params = params || {};
//     applyArtifacts(base, artifacts, params);
//     return base;
// }
