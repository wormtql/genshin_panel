import Attribute from "../../attribute/attribute"
import Param from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.physicalBonus += 0.25;
}

function apply4(attribute: Attribute, params: Param) {
    if (params.countBloodstainedChinalry) {
        attribute.bBonus += 0.5;
    }
}

export default [null, apply2, null, apply4, null];