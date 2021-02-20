import Attribute from "../../attribute/attribute"
import ApplyContext from "../../common/context";
import WeaponType from "../../numerics/weapon/weapon_type";
import Param from "../param";

function apply2(attribute: Attribute, ctx: ApplyContext, params: Param) {
    attribute.attackPercentage += attribute.attackBasic * 0.18;
}

function apply4(attribute: Attribute, ctx: ApplyContext, params: Param) {
    let weaponType = ctx.character.weapon;
    if (weaponType === WeaponType.Sword || weaponType === WeaponType.Sword2 || weaponType === WeaponType.Stick) {
        attribute.aBonus += 0.35;
    }
}

export default [null, apply2, null, apply4, null];