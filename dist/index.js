"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = exports.newAttribute = exports.applyArtifacts = exports.Artifact = exports.getWeaponAttribute = exports.getCharacterAttribute = void 0;
const numeric_1 = require("./numeric");
const attribute_1 = require("./attribute");
// import { mixAttribute, capitalize } from "./util/util";
const artifact_1 = require("./artifact");
// 角色与武器数据
var numeric_2 = require("./numeric");
Object.defineProperty(exports, "getCharacterAttribute", { enumerable: true, get: function () { return numeric_2.getCharacterAttribute; } });
Object.defineProperty(exports, "getWeaponAttribute", { enumerable: true, get: function () { return numeric_2.getWeaponAttribute; } });
// 圣遗物
var artifact_2 = require("./artifact");
Object.defineProperty(exports, "Artifact", { enumerable: true, get: function () { return artifact_2.Artifact; } });
Object.defineProperty(exports, "applyArtifacts", { enumerable: true, get: function () { return artifact_2.apply; } });
// 属性
var attribute_2 = require("./attribute");
Object.defineProperty(exports, "newAttribute", { enumerable: true, get: function () { return attribute_2.newAttribute; } });
function createArtifact(obj) {
    try {
        let art = new artifact_1.Artifact(obj.position, obj.setName);
        art.setPrimaryTag(obj.primary.tag, obj.primary.value);
        for (let i = 0; i < obj.secondary.length; i++) {
            let temp = obj.secondary[i];
            art.addSecondaryTag(temp.tag, temp.value);
        }
        return art;
    }
    catch (err) {
        return null;
    }
}
function compose(character, weapon, artifacts, params) {
    let base = attribute_1.newAttribute();
    let a1 = numeric_1.getCharacterAttribute(character);
    if (a1 === null) {
        return null;
    }
    let a2 = numeric_1.getWeaponAttribute(weapon);
    if (a2 === null) {
        return null;
    }
    numeric_1.applyCharacterBase(base, a1);
    numeric_1.applyWeaponBase(base, a2);
    numeric_1.applyCharacterSecondary(base, a1);
    numeric_1.applyWeaponSecondary(base, a2);
    if (!artifacts || artifacts.length === 0) {
        return base;
    }
    params = params || {};
    if (artifacts[0] instanceof artifact_1.Artifact) {
        artifact_1.apply(base, artifacts, params);
    }
    else {
        let arts = [];
        for (let i = 0; i < artifacts.length; i++) {
            let art = createArtifact(artifacts[i]);
            if (art !== null) {
                arts.push(art);
            }
        }
        artifact_1.apply(base, arts, params);
    }
    return base;
}
exports.compose = compose;
// export function compose(character: string, weapon: string, artifacts: Artifact[], params?: Param): Attribute | null {
//     let base: Attribute | null = composeBasic(character, weapon);
//     if (base === null) {
//         return null;
//     }
//     params = params || {};
//     applyArtifacts(base, artifacts, params);
//     return base;
// }
