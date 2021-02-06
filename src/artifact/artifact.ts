import Attribute from "../attribute/attribute";
import { ArtifactSetName, ArtifactTypeName } from "./artifact_type";
import { SecondaryTagName } from "../common/type";

import { applySecondaryTag } from "../common/common"


export default class Artifact {
    level: number;
    star: number;
    position: ArtifactTypeName;
    setName: ArtifactSetName;

    // 主词条
    tag1: {
        [key in SecondaryTagName]?: number
    };
    // 副词条
    tag2: {
        [key in SecondaryTagName]?: number
    }

    constructor(level: number, star: number, position: ArtifactTypeName, setName: ArtifactSetName) {
        this.level = level;
        this.star = star;
        this.position = position;
        this.setName = setName;

        this.tag1 = {};
        this.tag2 = {};
    }

    addTag1(name: SecondaryTagName, value: number) {
        this.tag1[name] = value;
    }

    addTag2(name: SecondaryTagName, value: number) {
        this.tag2[name] = value;
    }

    apply(attr: Attribute) {
        for (let key in this.tag1) {
            applySecondaryTag(attr, key as SecondaryTagName, this.tag1[key]);
        }
        for (let key in this.tag2) {
            applySecondaryTag(attr, key as SecondaryTagName, this.tag2[key]);
        }
    }
}