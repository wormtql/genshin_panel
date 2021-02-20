import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

// 祭水之人
function apply1(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.waterTime += 0.4;
}

export default [apply1, null, null, null, null];