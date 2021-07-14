import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Rock,
    alt: ["zhongli", "钟离"],
    life: [1144, 2967, 3948, 5908, 6605, 7599, 8528, 9533, 10230, 11243, 11940, 12965, 13662, 14695],
    attack: [20, 51, 67, 101, 113, 130, 146, 163, 175, 192, 204, 222, 233, 251],
    defend: [57, 149, 198, 297, 332, 382, 428, 479, 514, 564, 599, 651, 686, 738],
    secondary: {
        name: "rockBonus",
        family: "bonus288"
    },
    weapon: WeaponType.Stick,
} as CharacterDataType