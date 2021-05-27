import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param"

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.elementalMastery += 80;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configInstructor) {
        let rate = params.configInstructor.rate;
        attribute.elementalMastery += 120 * rate;
    }
}

export default [null, apply2, null, apply4, null];