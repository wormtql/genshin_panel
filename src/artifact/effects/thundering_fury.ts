import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.thunderBonus += 0.15;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.overloadEnhance += 0.4;
    attribute.electroEnhance += 0.4;
    attribute.superconductEnhance += 0.4;
    // if (params.countThunderingFury) {
    //     attribute.bonus += 0.4;
    //     if (typeof attribute.tag !== "undefined") {
    //         attribute.tag.push("计入如雷的盛怒4件套");
    //     }
    // }
}

export default [null, apply2, null, apply4, null];