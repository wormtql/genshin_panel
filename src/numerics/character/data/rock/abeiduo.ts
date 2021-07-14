import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Rock,
    alt: ["abeiduo", "阿贝多", "albedo"],
    life: [1030, 2671, 3554, 5317, 5944, 6839, 7675, 8579, 9207, 10119, 10746, 11669, 12296, 13226],
    attack: [20, 51, 68, 101, 113, 130, 146, 163, 175, 192, 204, 222, 233, 251],
    defend: [68, 177, 235, 352, 394, 453, 508, 568, 610, 670, 712, 773, 815, 876],
    secondary: {
        name: "rockBonus",
        family: "bonus288",
    },
    weapon: WeaponType.Sword,
} as CharacterDataType