import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Thunder,
    alt: ["leize", "雷泽", "razor"],
    life: [1003, 2577, 3326, 4982, 5514, 6343, 7052, 7881, 8413, 9241, 9773, 10602, 11134, 11962],
    attack: [20, 50, 65, 97, 108, 124, 138, 154, 164, 180, 191, 207, 217, 234],
    defend: [63, 162, 209, 313, 346, 398, 443, 495, 528, 580, 613, 665, 699, 751],
    secondary: {
        name: "physicalBonus",
        family: "bonus300"
    },
    weapon: WeaponType.Sword2,
} as CharacterDataType