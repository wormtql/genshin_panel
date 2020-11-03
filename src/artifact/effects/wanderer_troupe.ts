import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.elementalMastery += 80;
}

function apply4(attribute: Attribute, params: Param) {
    if (params.countWandererTroupe) {
        attribute.bBonus += 0.35;
        if (typeof attribute.tag !== "undefined") {
            attribute.tag.push("计入流浪大地的乐团4件套");
        }
    }
}

export default [null, apply2, null, apply4, null];