import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Ice,
    alt: ["kaiya", "凯亚", "kaeya"],
    life: [976, 2506, 3235, 4846, 5364, 6170, 6860, 7666, 8184, 8989, 9507, 10312, 10830, 11636],
    attack: [19, 48, 62, 93, 103, 118, 131, 147, 157, 172, 182, 198, 208, 223],
    defend: [66, 171, 220, 330, 365, 420, 467, 522, 557, 612, 647, 702, 737, 792],
    secondary: {
        name: "recharge",
        family: "recharge267"
    },
    weapon: WeaponType.Sword,
} as CharacterDataType