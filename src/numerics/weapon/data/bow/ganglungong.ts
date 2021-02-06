import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["ganglungong", "钢轮弓", "compoundbow"],
    baseAtkFamily: "atk41",
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let percentage = that.refine * 0.01 + 0.03;
        attribute.attackPercentage += attribute.attackBasic * percentage;
    },
    secondary: {
        name: "physicalBonus",
        family: "physical150"
    }
} as WeaponDataType