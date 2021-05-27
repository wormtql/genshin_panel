import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.cureEffect += 0.15;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configMaidenBeloved) {
        let rate = params.configMaidenBeloved.rate;
        attribute.curedEffect += rate * 0.2;
    }
}

export default [null, apply2, null, apply4, null];