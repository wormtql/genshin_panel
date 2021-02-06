import Attribute from "../../attribute/attribute"
import Param from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.fireRes += 0.4;
}

function apply4(attribute: Attribute, params: Param) {
    if (params.countLavaWalker) {
        attribute.bonus += 0.35;
    }
}

export default [null, apply2, null, apply4, null];