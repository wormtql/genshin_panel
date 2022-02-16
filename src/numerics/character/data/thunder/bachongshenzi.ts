import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Thunder,
    alt: ["bachongshenzi", "八重神子"],
    life: [807, 2095, 2787, 4170, 4662, 5364, 6020, 6729, 7220, 7936, 8428, 9151, 9643, 10372],
    attack: [26, 69, 91, 137, 153, 176, 197, 220, 236, 260, 276, 300, 316, 340],
    defend: [44, 115, 153, 229, 256, 294, 330, 369, 396, 435, 462, 502, 529, 569],
    secondary: {
        name: "critical",
        family: "cr192"
    },
    weapon: WeaponType.Book,
} as CharacterDataType
