import { SecondaryTagName } from "../../common/type";

import charAttack from "./char_attack";
import charBonus from "./char_bonus";
import charCriticalDamage from "./char_critical_damage";
import charCritical from "./char_critical";
import charCure from "./char_cure";
import charDefend from "./char_defend";
import charEm from "./char_em";
import charHp from "./char_hp";
import charRecharge from "./char_recharge";

import weaponAttack from "./weapon_attack";
import weaponCriticalDamage from "./weapon_critical_damage";
import weaponCritical from "./weapon_critical";
import weaponDefend from "./weapon_defend";
import weaponEM from "./weapon_em";
import weaponHP from "./weapon_hp";
import weaponPhysical from "./weapon_physical";
import weaponRecharge from "./weapon_recharge";

import { getBaseValue, getCharSpecial, getWeaponSpecial } from "./common";

import weaponBaseAtk from "./weapon_base_attack";


let charPresets = Object.assign({},
    charAttack,
    charBonus,
    charCriticalDamage,
    charCritical,
    charCure,
    charDefend,
    charEm,
    charHp,
    charRecharge
);

let weaponPresets = Object.assign({},
    weaponAttack,
    weaponCriticalDamage,
    weaponCritical,
    weaponDefend,
    weaponEM,
    weaponHP,
    weaponPhysical,
    weaponRecharge
);


export function getCharacterSecondary(family: string, level: number, ascend: boolean): number {
    return getCharSpecial(charPresets[family], level, ascend);
}

export function getWeaponSecondary(family: string, level: number): number {
    return getWeaponSpecial(weaponPresets[family], level);
}

export function getWeaponBaseAtk(family: string, level: number, ascend: boolean) {
    return getBaseValue(weaponBaseAtk[family], level, ascend);
}