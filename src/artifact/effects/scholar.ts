import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.recharge += 0.2;
}

function apply4(attribute: Attribute, params: Param) {
    if (typeof attribute.tag !== "undefined") {
        attribute.tag.push("未计入学士4件套效果");
    }
}

export default [null, apply2, null, apply4, null];