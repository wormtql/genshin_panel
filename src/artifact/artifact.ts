import { Attribute } from "../attribute/attribute";
import { ArtifactSet, ArtifactType, SET_COUNT } from "./artifact_type"
import { TagType, TagName } from "./tag_type"

export class Artifact {
    position: ArtifactType;
    setName: ArtifactSet;

    mainTag: TagType = {
        tag: "attack1",
        value: 0,
    };
    secondaryTags: TagType[] = [];

    constructor(position: ArtifactType, setName: ArtifactSet) {
        this.position = position;
        this.setName = setName;
    }

    setPrimaryTag(tag: TagName, value: number): void {
        this.mainTag = {
            tag, value
        };
    }

    addSecondaryTag(tag: TagName, value: number): void {
        this.secondaryTags.push({
            tag, value
        });
    }


    private applySingle(attribute: Attribute, tag: TagType) {
        const name = tag.tag;
        const value = tag.value;

        switch(name) {
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

    apply(attribute: Attribute): void {
        this.applySingle(attribute, this.mainTag);

        for (let i = 0; i < this.secondaryTags.length; i++) {
            this.applySingle(attribute, this.secondaryTags[i]);
        }
    }
}