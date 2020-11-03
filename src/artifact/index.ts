import { Attribute } from "../attribute/attribute";
import { apply as applyEffect } from "./effects/index";
import { Param } from "./param";
import { Artifact } from "./artifact";

export { ArtifactSet, ArtifactType } from "./artifact_type";
export { Artifact } from "./artifact";
export { Param } from "./param";
export { TagType } from "./tag_type";


// 计算圣遗物（包括套装）加成后的面板
export function apply(attribute: Attribute, param: Param, artifacts: Artifact[]) {
    for (let i = 0; i < artifacts.length; i++) {
        artifacts[i].apply(attribute);
    }

    applyEffect(attribute, param, artifacts);
}