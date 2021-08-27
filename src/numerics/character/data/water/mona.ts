import Attribute from "../../../../attribute/attribute";
import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import Character from "../../character";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Water,
    alt: ["mona", "莫娜"],
    life: [810, 2102, 2797, 4185, 4678, 5383, 6041, 6752, 7246, 7964, 8458, 9184, 9677, 10409],
    attack: [22, 58, 77, 115, 129, 148, 167, 186, 200, 220, 233, 253, 267, 287],
    defend: [51, 132, 176, 263, 294, 338, 379, 424, 455, 500, 531, 576, 607, 653],
    secondary: {
        name: "recharge",
        family: "recharge320"
    },
    weapon: WeaponType.Book,
    applyTalent: function (attribute: Attribute) {
        let that = this as any as Character;

        if (that.hasTalent2) {
            attribute.addLazy((a: Attribute) => {
                a.waterBonus += a.recharge * 0.2;
            });
        }
    }
} as CharacterDataType