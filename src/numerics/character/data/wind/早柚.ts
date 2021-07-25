import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default <CharacterDataType> {
    element: Element.Wind,
    alt: ["zaoyou", "早柚", "sayu"],
    life: [994, 2553, 3296, 4937, 5464, 6285, 6988, 7809, 8337, 9157, 9684, 10505, 11033, 11854],
    attack: [20, 53, 68, 102, 113, 130, 144, 161, 172, 189, 200, 216, 227, 244],
    defend: [62, 160, 207, 310, 343, 395, 439, 491, 524, 575, 608, 660, 693, 745],
    secondary: {
        name: "elementalMastery",
        family: "em96",
    },
    weapon: WeaponType.Sword2,
}