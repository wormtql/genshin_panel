import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Wind,
    alt: ["shatang", "砂糖", "sucrose"],
    life: [775, 1991, 2570, 3850, 4261, 4901, 5450, 6090, 6501, 7141, 7552, 8192, 8604, 9244],
    attack: [14, 37, 47, 71, 78, 90, 100, 112, 120, 131, 139, 151, 158, 170],
    defend: [59, 151, 195, 293, 324, 373, 414, 463, 494, 543, 574, 623, 654, 703],
    secondary: {
        name: "windBonus",
        family: "bonus240"
    },
    weapon: WeaponType.Book,
} as CharacterDataType