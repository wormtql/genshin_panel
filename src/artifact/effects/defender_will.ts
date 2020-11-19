import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.defend3 += attribute.defend1 * 0.3;
}

function apply4(attribute: Attribute, params: Param) {
    if (typeof attribute.tag !== "undefined") {
        attribute.tag.push("未计入守护之心4件套效果");
    }
}

export default [null, apply2, null, apply4, null];