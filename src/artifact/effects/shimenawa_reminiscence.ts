import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.attackPercentage += attribute.attackBasic * 0.18;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configShimenawaReminiscence) {
        let rate = params.configShimenawaReminiscence.rate;
        let value = rate * 0.5;
        attribute.aBonus += value;
        attribute.bBonus += value;
        attribute.airBonus += value;
    }
}

export default [null, apply2, null, apply4, null];