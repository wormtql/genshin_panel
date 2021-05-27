import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.rockBonus += 0.15;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configArchaicPatra) {
        let element = params.configArchaicPatra.element;
        let rate = params.configArchaicPatra.rate;

        let bonusName = element + "Bonus";
        attribute[bonusName] += rate * 0.35;
    }
}

export default [null, apply2, null, apply4, null];