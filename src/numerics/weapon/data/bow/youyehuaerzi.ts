import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["youyehuaerzi", "幽夜华尔兹", "mitternachtswaltz"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        if (that.args.rate1) {
            let percentage = that.refine * 0.05 + 0.15;
            attribute.eBonus += percentage * that.args.rate1;
        }
        if (that.args.rate2) {
            let percentage = that.refine * 0.05 + 0.15;
            attribute.aBonus += percentage * that.args.rate2;
        }
    },
    baseAtkFamily: "atk42",
    secondary: {
        name: "physicalBonus",
        family: "physical113"
    }
} as WeaponDataType