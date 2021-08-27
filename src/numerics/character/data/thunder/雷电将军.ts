import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Thunder,
    alt: ["raidenshogun", "雷电将军", "leidianjiangjun"],
    life: [1005, 2606, 3468, 5189, 5801, 6675, 7491, 8373, 8985, 9875, 10487, 11388, 12000, 12907],
    attack: [26, 68, 91, 136, 152, 174, 196, 219, 235, 258, 274, 298, 314, 337],
    defend: [61, 159, 212, 317, 355, 408, 458, 512, 549, 604, 641, 696, 734, 789],
    secondary: {
        name: "recharge",
        family: "recharge320"
    },
    weapon: WeaponType.Stick,
} as CharacterDataType