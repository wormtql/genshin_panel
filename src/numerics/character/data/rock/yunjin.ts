import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default <CharacterDataType> {
    element: Element.Rock,
    alt: ["yunjin", "云堇"],
    life: [894, 2296, 2963, 4438, 4913, 5651, 6283, 7021, 7495, 8233, 8707, 9445, 9919, 10657],
    attack: [16, 41, 53, 80, 88, 101, 113, 126, 134, 148, 156, 169, 178, 191],
    defend: [62, 158, 204, 306, 339, 389, 433, 484, 517, 567, 600, 651, 684, 734],
    secondary: {
        name: "recharge",
        family: "recharge267",
    },
    weapon: WeaponType.Stick,
}