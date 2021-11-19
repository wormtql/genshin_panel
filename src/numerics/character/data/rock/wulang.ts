import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Rock,
    alt: ["wulang", "五郎", "gorou"],
    life: [802, 2061, 2661, 3985, 4411, 5074, 5642, 6305, 6731, 7393, 7818, 8481, 8907, 9570],
    attack: [15, 39, 51, 76, 84, 97, 108, 120, 128, 141, 149, 162, 170, 183],
    defend: [54, 140, 180, 270, 299, 344, 382, 427, 456, 501, 530, 575, 603, 648],
    secondary: {
        name: "rockBonus",
        family: "bonus240",
    },
    weapon: WeaponType.Bow,
} as CharacterDataType