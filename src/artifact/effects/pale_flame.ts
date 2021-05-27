import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.physicalBonus += 0.25;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configPaleFlame) {
        let level = Math.min(params.configPaleFlame.level, 2);
        let rate = params.configPaleFlame.rate;
        attribute.atkLift(0.09 * level);
        attribute.physicalBonus += 0.25 * rate;
    }
}

export default [null, apply2, null, apply4, null];