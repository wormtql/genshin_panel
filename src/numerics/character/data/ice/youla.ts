import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Ice,
    alt: ["youla", "优菈", "eula"],
    life: [1030, 2671, 3554, 5317, 5944, 6839, 7675, 8579, 9207, 10119, 10746, 11699, 12296, 13226],
    attack: [27, 69, 92, 138, 154, 177, 198, 222, 238, 262, 278, 302, 318, 342],
    defend: [58, 152, 202, 302, 337, 388, 436, 487, 523, 574, 610, 662, 698, 751],
    secondary: {
        name: "criticalDamage",
        family: "cd384"
    },
    weapon: WeaponType.Sword2,
} as CharacterDataType