import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.critical += 0.12;
    attribute.bCritical += 0.12;
}

function apply4(attribute: Attribute, paarms: Param) {
    if (paarms.countBerserker) {
        attribute.critical += 0.24;
        attribute.bCritical += 0.24;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入战狂4件套效果");
        }
    }
}

export default [null, apply2, null, apply4, null];