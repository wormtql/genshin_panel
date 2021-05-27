import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.crit(0.12);
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configBerserker) {
        let rate = params.configBerserker.rate;
        attribute.crit(rate * 0.24);
    }
}

export default [null, apply2, null, apply4, null];