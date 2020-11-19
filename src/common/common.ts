import { PrimaryTagName, SecondaryTagName } from "./type";
import { Attribute } from "../attribute";

export function applySecondaryTag(attribute: Attribute, name: SecondaryTagName, value: number) {
    switch(name) {
        case "attack1":
            attribute.attack2 += value;
            break;
        case "attack2":
            attribute.attack3 += value * attribute.attack1;
            break;
        case "cureEffect":
            attribute.cureEffect += value;
            break;
        case "life1":
            attribute.life2 += value;
            break;
        case "life2":
            attribute.life3 += value * attribute.life1;
            break;
        case "defend1":
            attribute.defend2 += value;
            break;
        case "defend2":
            attribute.defend3 += value * attribute.defend1;
            break;
        case "critical":
            attribute.critical += value;
            attribute.bCritical += value;
            attribute.eCritical += value;
            attribute.qCritical += value;
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

export function applyPrimaryTag(attribute: Attribute, name: PrimaryTagName, value: number) {
    switch(name) {
        case "attack":
            attribute.attack1 += value;
            break;
        case "defend":
            attribute.defend1 += value;
            break;
        case "life":
            attribute.life1 += value;
            break;
    }
}