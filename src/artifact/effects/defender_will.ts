import Attribute from "../../attribute/attribute"
import Param from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.defendPercentage += attribute.defendBasic * 0.3;
}

function apply4(attribute: Attribute, params: Param) {

}

export default [null, apply2, null, apply4, null];