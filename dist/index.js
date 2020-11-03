"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = exports.composeBasic = exports.newAttribute = exports.applyArtifacts = exports.Artifact = exports.getAttribute = exports.getWeaponAttribute = exports.getCharacterAttribute = void 0;
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
var artifact_2 = require("./artifact");
Object.defineProperty(exports, "Artifact", { enumerable: true, get: function () { return artifact_2.Artifact; } });
Object.defineProperty(exports, "applyArtifacts", { enumerable: true, get: function () { return artifact_2.apply; } });
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
    artifact_1.apply(base, artifacts, params);
    return base;
}
exports.compose = compose;
