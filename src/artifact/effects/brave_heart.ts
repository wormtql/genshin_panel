import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.attackPercentage += attribute.attackBasic * 0.18;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configBraveHeart) {
        let rate = params.configBraveHeart.rate;
        attribute.bonus += rate * 0.3;
    }
}

export default [null, apply2, null, apply4, null];