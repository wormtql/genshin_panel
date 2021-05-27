import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.iceBonus += 0.15;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configBlizzardStrayer) {
        let value = params.configBlizzardStrayer.criticalBonus;
        attribute.crit(value);
    }
}

export default [null, apply2, null, apply4, null];