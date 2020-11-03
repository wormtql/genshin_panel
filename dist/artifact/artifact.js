"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artifact = void 0;
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
        switch (name) {
            case "attack1":
                attribute.attack2 += value;
                break;
            case "attack2":
                attribute.attack2 += value * attribute.attack1;
                break;
            case "cureEffect":
                attribute.cureEffect += value;
                break;
            case "life1":
                attribute.life2 += value;
                break;
            case "life2":
                attribute.life2 += value * attribute.life1;
                break;
            case "defend1":
                attribute.defend2 += value;
                break;
            case "defend2":
                attribute.defend2 += value * attribute.defend1;
                break;
            case "critical":
                attribute.critical += value;
                attribute.bCritical += value;
                break;
            case "criticalDamage":
                attribute.criticalDamage += value;
                break;
            case "elementalMastery":
                attribute.elementalMastery += value;
                break;
            case "recharge":
                attribute.recharge += value;
                break;
            case "thunderBonus":
                attribute.thunderBonus += value;
                break;
            case "fireBonus":
                attribute.fireBonus += value;
                break;
            case "waterBonus":
                attribute.waterBonus += value;
                break;
            case "iceBonus":
                attribute.iceBonus += value;
                break;
            case "windBonus":
                attribute.windBonus += value;
                break;
            case "rockBonus":
                attribute.rockBonus += value;
                break;
            case "physicalBonus":
                attribute.physicalBonus += value;
                break;
        }
    }
    apply(attribute) {
        this.applySingle(attribute, this.mainTag);
        for (let i = 0; i < this.secondaryTags.length; i++) {
            this.applySingle(attribute, this.secondaryTags[i]);
        }
    }
}
exports.Artifact = Artifact;
