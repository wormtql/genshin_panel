import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.defendPercentage += attribute.defendBasic * 0.3;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configDefenderWill) {
        for (let element of params.configDefenderWill.elements) {
            let resName = element + "Res";
            attribute[resName] += 0.3;
        }
    }
}

export default [null, apply2, null, apply4, null];