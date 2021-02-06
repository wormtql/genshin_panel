import Attribute from "../../attribute/attribute"
import Param from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.critical += 0.12;
    attribute.bCritical += 0.12;
    attribute.qCritical += 0.12;
    attribute.eCritical += 0.12;
    attribute.airCritical += 0.12;
}

function apply4(attribute: Attribute, params: Param) {
    if (params.countBerserker) {
        attribute.critical += 0.24;
        attribute.bCritical += 0.24;
        attribute.eCritical += 0.24;
        attribute.qCritical += 0.24;
        attribute.airCritical += 0.24;
    }
}

export default [null, apply2, null, apply4, null];