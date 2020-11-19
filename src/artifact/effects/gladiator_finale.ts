import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.attack3 += attribute.attack1 * 0.18;
}

function apply4(attribute: Attribute, params: Param) {
    if (params.countGladiatorFinale) {
        attribute.aBonus += 0.35;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入角斗士的终幕礼4件套效果");
        }
    }
}

export default [null, apply2, null, apply4, null];