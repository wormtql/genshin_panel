import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.lifePercentage += attribute.lifeBasic * 0.2;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configTenacityOfTheMillelith) {
        let rate = params.configTenacityOfTheMillelith.rate;
        attribute.atkLift(rate * 0.2);
        attribute.shield += rate * 0.3;
    }
}

export default [null, apply2, null, apply4, null];