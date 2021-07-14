import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Fire,
    alt: ["bennett", "bannite", "班尼特"],
    life: [1039, 2670, 3447, 5163, 5715, 6573, 7309, 8186, 8719, 9577, 10129, 10987, 11539, 12397],
    attack: [16, 41, 53, 80, 88, 101, 113, 126, 134, 148, 156, 169, 178, 191],
    defend: [65, 166, 214, 321, 356, 409, 455, 508, 542, 596, 630, 684, 718, 771],
    secondary: {
        name: "recharge",
        family: "recharge267"
    },
    weapon: WeaponType.Sword,
} as CharacterDataType