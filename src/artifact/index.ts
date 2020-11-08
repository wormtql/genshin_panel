import { Attribute } from "../attribute/attribute";
import { apply as applyEffect } from "./effects/index";
import { Param } from "./param";
import { IArtifact } from "./artifact";
import { applySecondaryTag } from "../common/common";
import { SecondaryTagName } from "../common/type";

export { ArtifactSet, ArtifactType } from "./artifact_type";
export { IArtifact } from "./artifact";
export { Param } from "./param";
// export { TagType } from "./tag_type";


function applySingleArt(attribute: Attribute, art: IArtifact) {
    for (let key in art.primary) {
        applySecondaryTag(attribute, key as SecondaryTagName, art.primary[key]);
    }
    for (let key in art.secondary) {
        applySecondaryTag(attribute, key as SecondaryTagName, art.secondary[key]);
    }
}

// 计算圣遗物（包括套装）加成后的面板
export function apply(attribute: Attribute, artifacts: IArtifact[], param: Param) {
    for (let i = 0; i < artifacts.length; i++) {
        const art = artifacts[i];
        applySingleArt(attribute, art);
    }

    applyEffect(attribute, param, artifacts);
}

