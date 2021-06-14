import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";
import { applySecondaryTag } from "../../../../common/common";

export default {
    alt: ["custom"],
    baseAtkFamily: "",
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        for (let item of that.args.secondary) {
            let name = item.name;
            let value = item.value;
            applySecondaryTag(attribute, name, value);
        }
    },
} as WeaponDataType