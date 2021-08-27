import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.recharge += 0.2;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.addLazy((a: Attribute) => {
        let recharge = a.recharge;
        let value = Math.min(recharge * 0.25, 0.75);
        attribute.qBonus += value;
    })
}

export default [null, apply2, null, apply4, null];