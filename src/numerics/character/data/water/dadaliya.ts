import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Water,
    alt: ["dadaliya", "达达利亚", "tartaglia"],
    life: [1020, 2646, 3521, 5268, 5889, 6776, 7604, 8500, 9121, 10025, 10647, 11561, 12182, 13103],
    attack: [23, 61, 81, 121, 135, 156, 175, 195, 210, 231, 245, 266, 280, 301],
    defend: [63, 165, 219, 328, 366, 421, 473, 528, 567, 623, 662, 719, 757, 815],
    secondary: {
        name: "waterBonus",
        family: "bonus288"
    },
    weapon: WeaponType.Bow,
} as CharacterDataType