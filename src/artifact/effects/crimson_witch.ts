import Attribute from "../../attribute/attribute"
import Param from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.fireBonus += 0.15;
}

function apply4(attribute: Attribute, params: Param) {
    if (params.countCrimsonWitch1) {
        attribute.fireBonus += 1;
    }
}

export default [null, apply2, null, apply4, null];