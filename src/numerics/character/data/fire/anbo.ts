import Attribute from "../../../../attribute/attribute";
import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import Character from "../../character";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Fire,
    alt: ["anbo", "amber", "安柏"],
    life: [793, 2038, 2630, 3940, 4361, 5016, 5578, 6233, 6654, 7309, 7730, 8358, 8806, 9461],
    attack: [19, 48, 62, 93, 103, 118, 131, 147, 157, 172, 182, 198, 208, 223],
    defend: [50, 129, 167, 250, 277, 318, 354, 396, 422, 464, 491, 532, 559, 601],
    secondary: {
        name: "attackPercentage",
        family: "atk240",
    },
    applyTalent(attribute: Attribute) {
        let that = this as any as Character;
        if (that.hasTalent1) {
            attribute.qCritical += 0.1;
        }
    },
    weapon: WeaponType.Bow,
} as CharacterDataType