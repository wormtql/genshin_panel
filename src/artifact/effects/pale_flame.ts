import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.physicalBonus += 0.25;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    let level = params.paleFlameCount ?? 0;
    attribute.attackPercentage += attribute.attackBasic * (0.09 * level);
    if (level >= 2) {
        attribute.physicalBonus += 0.25;
    }
}

export default [null, apply2, null, apply4, null];