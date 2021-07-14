import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Wind,
    alt: ["xiao", "魈"],
    life: [991, 2572, 3422, 5120, 5724, 6586, 7391, 8262, 8866, 9744, 10348, 11236, 11840, 12736],
    attack: [27, 71, 94, 140, 157, 181, 203, 227, 243, 267, 284, 308, 325, 349],
    defend: [62, 161, 215, 321, 359, 413, 464, 519, 556, 612, 649, 705, 743, 799],
    secondary: {
        name: "critical",
        family: "cr192"
    },
    weapon: WeaponType.Stick,
} as CharacterDataType