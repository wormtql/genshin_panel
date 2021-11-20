import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.defendPercentage += attribute.defendBasic * 0.3;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configHuskOfOpulentDreams) {
        const level = params.configHuskOfOpulentDreams.level;
        const value = level * 0.06;
        attribute.defendPercentage += attribute.defendBasic * value;
        attribute.rockBonus += value;
    }
}

export default [null, apply2, null, apply4, null];