import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.shield += 0.35;
}

function apply4(attribute: Attribute, params: Param) {
    if (params.countRetracingBolide) {
        attribute.aBonus += 0.4;
        attribute.bBonus += 0.4;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入逆飞的流星4件套效果");
        }
    }
}

export default [null, apply2, null, apply4, null];