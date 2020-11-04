"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artifact = void 0;
const common_1 = require("../common/common");
class Artifact {
    constructor(position, setName) {
        this.mainTag = {
            tag: "attack1",
            value: 0,
        };
        this.secondaryTags = [];
        this.position = position;
        this.setName = setName;
    }
    setPrimaryTag(tag, value) {
        this.mainTag = {
            tag, value
        };
    }
    addSecondaryTag(tag, value) {
        this.secondaryTags.push({
            tag, value
        });
    }
    applySingle(attribute, tag) {
        const name = tag.tag;
        const value = tag.value;
        common_1.applySingle(attribute, name, value);
    }
    apply(attribute) {
        this.applySingle(attribute, this.mainTag);
        for (let i = 0; i < this.secondaryTags.length; i++) {
            this.applySingle(attribute, this.secondaryTags[i]);
        }
    }
}
exports.Artifact = Artifact;
