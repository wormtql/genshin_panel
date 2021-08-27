import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["ticaozhidaoguang", "薙草之稻光", "engulfinglightning"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "recharge",
        family: "recharge120",
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value;

        if (that.args.rate) {
            let rate: number = that.args.rate;
            value = that.refine * 0.05 + 0.25;
            attribute.recharge += value * rate;
        }

        attribute.addLazy((a: Attribute) => {
            let v = that.refine * 0.07 + 0.21;
            a.atkLift(Math.min(v * (a.recharge - 1), 0.1 * that.refine + 0.7));
        })
    }
} as WeaponDataType