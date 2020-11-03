import { Attribute } from "../../attribute/attribute"
import { Param } from "../param"

function apply2(attribute: Attribute, params: Param) {
    attribute.elementalMastery += 80;
}

function apply4(attribute: Attribute, params: Param) {
    if (params.countInstructor) {
        attribute.elementalMastery += 120;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入教官4件套效果");
        }
    }
}

export default [null, apply2, null, apply4, null];