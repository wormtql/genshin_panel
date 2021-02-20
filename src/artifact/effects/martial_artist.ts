import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.aBonus += 0.15;
    attribute.bBonus += 0.15;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.countMartialArtist) {
        attribute.aBonus += 0.25;
        attribute.bBonus += 0.25;
    }
}

export default [null, apply2, null, apply4, null];