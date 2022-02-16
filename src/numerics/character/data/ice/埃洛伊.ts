import Attribute from "../../../../attribute/attribute";
import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Ice,
    alt: ["ailuoyi", "埃洛伊", "aloy"],
    life: [848, 2201, 2928, 4382, 4899, 5636, 6325, 7070, 7587, 8339, 8856, 9616, 10133, 10899],
    attack: [18, 47, 63, 94, 105, 121, 136, 152, 163, 179, 190, 206, 217, 234],
    defend: [53, 137, 182, 272, 304, 350, 393, 439, 471, 517, 550, 597, 629, 676],
    secondary: {
        name: "iceBonus",
        family: "bonus288",
    },
    weapon: WeaponType.Bow,
} as CharacterDataType