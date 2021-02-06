import Attribute from "../../attribute/attribute"
import Param from "../param";

// 祭冰之人
function apply1(attribute: Attribute, params: Param) {
    attribute.iceTime += 0.4;
}

export default [apply1, null, null, null, null];