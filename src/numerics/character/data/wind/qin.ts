import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Wind,
    alt: ["qin", "琴", "jean"],
    life: [1144, 2967, 3948, 5908, 6605, 7599, 8528, 9533, 10230, 11243, 11940, 12965, 13662, 14695],
    attack: [19, 48, 64, 96, 108, 124, 139, 155, 166, 183, 194, 211, 222, 239],
    defend: [60, 155, 206, 309, 345, 397, 446, 499, 535, 588, 624, 678, 715, 769],
    secondary: {
        name: "cureEffect",
        family: "cure222"
    },
    weapon: WeaponType.Sword,
} as CharacterDataType