import { Weapon } from "../../../..";
import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type";

export default {
    alt: ["fenghuazhisong", "风花之颂", "windblumeode"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "elementalMastery",
        family: "em36"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon

        if (that.args.rate) {
            let p = 0.04 * that.refine + 0.12;
            attribute.atkLift(p * that.args.rate);
        }
    },
} as WeaponDataType