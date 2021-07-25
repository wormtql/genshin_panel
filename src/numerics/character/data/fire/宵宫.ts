import Attribute from "../../../../attribute/attribute";
import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import Character from "../../character";
import CharacterDataType from "../../data_type";

export default <CharacterDataType> {
    element: Element.Fire,
    alt: ["xiaogong", "宵宫", "yoimiya"],
    life: [791, 2053, 2731, 4086, 4568, 5256, 5899, 6593, 7075, 7777, 8259, 8968, 9450, 10164],
    attack: [25, 65, 87, 130, 145, 167, 187, 209, 225, 247, 262, 285, 300, 323],
    defend: [48, 124, 165, 247, 276, 318, 357, 399, 428, 470, 500, 542, 572, 615],
    secondary: {
        name: "critical",
        family: "cr192",
    },
    applyTalent(attribute: Attribute) {
        let that = this as any as Character;
        if (that.args.talent1Level) {
            let level = Math.min(10, that.args.talent1Level);
            attribute.fireBonus += level * 0.02;
        }
    },
    weapon: WeaponType.Bow,
}