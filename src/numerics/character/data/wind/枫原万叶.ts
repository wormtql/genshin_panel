import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Wind,
    alt: ["fengyuanwanye", "枫原万叶", "kaedeharakazuha"],
    life: [1039, 2695, 3586, 5366, 5999, 6902, 7747, 8659, 9292, 10213, 10849, 11777, 12410, 13348],
    attack: [23, 60, 80, 119, 133, 153, 172, 192, 206, 227, 241, 262, 276, 297],
    defend: [63, 163, 217, 324, 363, 417, 468, 523, 562, 617, 656, 712, 750, 807],
    secondary: {
        name: "elementalMastery",
        family: "em115",
    },
    weapon: WeaponType.Sword,
} as CharacterDataType