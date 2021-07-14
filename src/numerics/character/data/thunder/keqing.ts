import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Thunder,
    alt: ["keqing", "刻晴"],
    life: [1020, 2646, 3521, 5268, 5889, 6776, 7604, 8500, 9121, 10025, 10647, 11561, 12182, 13103],
    attack: [25, 65, 87, 130, 145, 167, 187, 209, 225, 247, 262, 285, 300, 323],
    defend: [62, 161, 215, 321, 359, 413, 464, 519, 556, 612, 649, 705, 743, 799],
    secondary: {
        name: "criticalDamage",
        family: "cd384"
    },
    weapon: WeaponType.Sword,
} as CharacterDataType