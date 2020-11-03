import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.thunderRes += 0.2;
    attribute.iceRes += 0.2;
    attribute.rockRes += 0.2;
    attribute.fireRes += 0.2;
    attribute.windRes += 0.2;
    attribute.waterRes += 0.2;
}

function apply4(attribute: Attribute, params: Param) {
    if (typeof attribute.tag !== "undefined") {
        attribute.tag.push("未计入奇迹4件套效果");
    }
}

export default [null, apply2, null, apply4, null];