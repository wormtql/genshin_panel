import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.physicalBonus += 0.25;
}

function apply4(attribute: Attribute, params: Param) {
    if (params.countBloodstainedChinalry) {
        attribute.bBonus += 0.5;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入染血的骑士道4件套");
        }
    }
}

export default [null, apply2, null, apply4, null];