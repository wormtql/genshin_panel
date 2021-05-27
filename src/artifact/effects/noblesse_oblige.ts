import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.qBonus += 0.2;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configNoblesseOblige) {
        let rate = params.configNoblesseOblige.rate;
        attribute.atkLift(rate * 0.2);
    }
}

export default [null, apply2, null, apply4, null];