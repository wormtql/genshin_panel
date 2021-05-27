import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.fireRes += 0.4;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configLavaWalker) {
        let rate = params.configLavaWalker.rate;
        attribute.bonus += rate * 0.35;
    }
}

export default [null, apply2, null, apply4, null];