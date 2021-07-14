import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Thunder,
    alt: ["beidou", "北斗"],
    life: [1094, 2811, 3628, 5435, 6015, 6919, 7694, 8597, 9178, 10081, 10662, 11565, 12146, 13050],
    attack: [19, 48, 63, 94, 104, 119, 133, 148, 158, 174, 184, 200, 210, 225],
    defend: [54, 140, 180, 270, 299, 344, 382, 427, 456, 501, 530, 575, 603, 648],
    secondary: {
        name: "thunderBonus",
        family: "bonus240"
    },
    weapon: WeaponType.Sword2,
} as CharacterDataType