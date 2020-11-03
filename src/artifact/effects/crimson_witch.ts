import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.fireBonus += 0.15;
}

function apply4(attribute: Attribute, params: Param) {
    if (params.countCrimsonWitch1) {
        attribute.bonus += 0.4;
        attribute.fireBonus += 1;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("炽烈的炎之魔女4件套叠加效果记为叠加2次，即100%");
        }  
    }
}

export default [null, apply2, null, apply4, null];