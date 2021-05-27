import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.waterBonus += 0.15;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configHeartOfDepth) {
        let rate = params.configHeartOfDepth.rate;
        attribute.aBonus += rate * 0.3;
        attribute.bBonus += rate * 0.3;
    }
}

export default [null, apply2, null, apply4, null];