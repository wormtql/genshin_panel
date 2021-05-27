import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.physicalBonus += 0.25;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configBloodstainedChivalry) {
        let rate = params.configBloodstainedChivalry.rate;
        attribute.bBonus += rate * 0.5;
    }
}

export default [null, apply2, null, apply4, null];