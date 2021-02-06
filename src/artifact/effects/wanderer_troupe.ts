import Attribute from "../../attribute/attribute"
import Param from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.elementalMastery += 80;
}

function apply4(attribute: Attribute, params: Param) {
    if (params.countWandererTroupe) {
        attribute.bBonus += 0.35;
    }
}

export default [null, apply2, null, apply4, null];