import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.thunderRes += 0.2;
    attribute.iceRes += 0.2;
    attribute.rockRes += 0.2;
    attribute.fireRes += 0.2;
    attribute.windRes += 0.2;
    attribute.waterRes += 0.2;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    if (params.configTinyMiracle) {
        let element = params.configTinyMiracle.element;
        let rate = params.configTinyMiracle.rate;
        let resName = element + "res";
        attribute[resName] += 0.3 * rate;
    }
}

export default [null, apply2, null, apply4, null];