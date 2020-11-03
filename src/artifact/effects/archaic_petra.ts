import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.rockBonus += 0.15;
}

function apply4(attribute: Attribute, params: Param) {
    if (typeof attribute.tag !== "undefined") {
        attribute.tag.push("未计入悠古的磐岩4件套加成");
    }
}

export default [null, apply2, null, apply4, null];