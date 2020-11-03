import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply1(attribute: Attribute, params: Param) {
    attribute.fireTime += 0.4;
}

export default [apply1, null, null, null, null];