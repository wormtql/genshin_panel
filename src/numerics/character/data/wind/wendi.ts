import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Wind,
    alt: ["wendi", "温迪", "venti"],
    life: [820, 2127, 2830, 4234, 4734, 5446, 6112, 6832, 7331, 8058, 8557, 9292, 9791, 10531],
    attack: [20, 53, 71, 106, 118, 136, 153, 171, 183, 201, 214, 232, 245, 263],
    defend: [52, 135, 180, 269, 301, 346, 388, 434, 465, 512, 543, 590, 622, 669],
    secondary: {
        name: "recharge",
        family: "recharge320"
    },
    weapon: WeaponType.Bow,
} as CharacterDataType