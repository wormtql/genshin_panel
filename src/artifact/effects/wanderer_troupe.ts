import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import WeaponType from "../../numerics/weapon/weapon_type";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.elementalMastery += 80;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    let weapon = ctx.character.weapon;
    if (weapon === WeaponType.Book || weapon === WeaponType.Bow) {
        attribute.bBonus += 0.35;
    }
}

export default [null, apply2, null, apply4, null];