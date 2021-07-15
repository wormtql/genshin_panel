import Attribute from "../../../../attribute/attribute";
import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import Character from "../../character";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Fire,
    alt: ["hutao", "胡桃"],
    life: [1211, 3141, 4179, 6253, 6990, 8042, 9026, 10089, 10826, 11899, 12637, 13721, 14459, 15552],
    attack: [8, 21, 29, 43, 48, 55, 62, 69, 74, 81, 86, 94, 99, 106],
    defend: [68, 177, 235, 352, 394, 453, 508, 568, 610, 670, 712, 773, 815, 876],
    secondary: {
        name: "criticalDamage",
        family: "cd384",
    },
    weapon: WeaponType.Stick,
    applyTalent(attribute: Attribute) {
        let that = this as any as Character;

        if (that.args.hpBelow50 && that.hasTalent2) {
            attribute.fireBonus += 0.33;
        }
    }
} as CharacterDataType