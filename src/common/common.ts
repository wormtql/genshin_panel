import { PrimaryTagName, SecondaryTagName } from "./type";
import Attribute from "../attribute/attribute";

export function applySecondaryTag(attribute: Attribute, name: SecondaryTagName, value: number) {
    switch(name) {
        case "attackStatic":
            attribute.attackStatic += value;
            break;
        case "attackPercentage":
            attribute.attackPercentage += value * attribute.attackBasic;
            break;
        case "cureEffect":
            attribute.cureEffect += value;
            break;
        case "lifeStatic":
            attribute.lifeStatic += value;
            break;
        case "lifePercentage":
            attribute.lifePercentage += value * attribute.lifeBasic;
            break;
        case "defendStatic":
            attribute.defendStatic += value;
            break;
        case "defendPercentage":
            attribute.defendPercentage += value * attribute.defendBasic;
            break;
        case "critical":
            attribute.critical += value;
            attribute.bCritical += value;
            attribute.eCritical += value;
            attribute.qCritical += value;
            attribute.airCritical += value;
            break;
        case "eCritical":
            attribute.eCritical += value;
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
        case "aBonus":
            attribute.aBonus += value;
            break;
        case "bBonus":
            attribute.bBonus += value;
            break;
        case "bonus":
            attribute.bonus += value;
            break;
        case "eBonus":
            attribute.eBonus += value;
            break;
        case "qBonus":
            attribute.qBonus += value;
            break;
    }
}

export function applyPrimaryTag(attribute: Attribute, name: PrimaryTagName, value: number) {
    switch(name) {
        case "attack":
            attribute.attackBasic += value;
            break;
        case "defend":
            attribute.defendBasic += value;
            break;
        case "life":
            attribute.lifeBasic += value;
            break;
    }
}