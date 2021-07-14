import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Wind,
    alt: ["me_wind", "旅行者-风", "me_anemo"],
    life: [912, 2342, 3024, 4529, 5013, 5766, 6411, 7164, 7648, 8401, 8885, 9638, 10122, 10875],
    attack: [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212],
    defend: [57, 147, 190, 284, 315, 362, 402, 450, 480, 527, 558, 605, 635, 683],
    secondary: {
        name: "attackPercentage",
        family: "atk240"
    },
    weapon: WeaponType.Sword,
} as CharacterDataType