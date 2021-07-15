import Attribute from "../../../../attribute/attribute"
import Character from "../../../character/character";
import WeaponDataType from "../../data_type"
import Weapon from "../../weapon"

export default {
    alt: ["雾切之回光", "wuqiezhihuiguang", "mistsplitterreforged"],
    baseAtkFamily: "atk48",
    secondary: {
        name: "criticalDamage",
        family: "cd96"
    },
    effect(attribute: Attribute, character: Character) {
        let that = this as any as Weapon;
        let value = 0.03 * that.refine + 0.09;
        attribute.elementalBonus(value);

        let element = character.element;
        if (that.args.level) {
            let value2;
            if (that.args.level === 1) {
                value2 = that.refine * 0.02 + 0.06;
            } else if (that.args.level === 2) {
                value2 = that.refine * 0.04 + 0.12;
            } else if (that.args.level === 3) {
                value2 = that.refine * 0.07 + 0.21;
            }
            attribute[element + "Bonus"] += value2;
        }
        
    }
} as WeaponDataType