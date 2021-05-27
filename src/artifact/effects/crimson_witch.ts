import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.fireBonus += 0.15;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.overloadEnhance += 0.4;
    attribute.burningEnhance += 0.4;
    attribute.vaporizeEnhance += 0.15;
    attribute.meltEnhance += 0.15;
    
    if (params.configCrimsonWitch) {
        let level = Math.min(3, params.configCrimsonWitch.level);
        attribute.fireBonus += 0.075 * level;
    }
}

export default [null, apply2, null, apply4, null];