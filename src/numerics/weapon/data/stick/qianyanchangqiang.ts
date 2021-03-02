import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["qianyanchangqiang", "千岩长枪", "lithicspear"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let liyueCount = that.args.liyueCount || 0;
        let percentage = that.refine * 0.01 + 0.06;
        attribute.attackPercentage += attribute.attackBasic * percentage * liyueCount;

        percentage = that.refine * 0.01 + 0.02;
        attribute.crit(percentage * liyueCount);
    },
    baseAtkFamily: "atk44",
    secondary: {
        name: "attackPercentage",
        family: "atk60"
    }
} as WeaponDataType