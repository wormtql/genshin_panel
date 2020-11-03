import { Attribute } from "./attribute";
import { getCharacterAttribute, getWeaponAttribute, addWeaponAttribute } from "./numeric";
import { newAttribute } from "./attribute";
import { mixAttribute, capitalize } from "./util/util";
import { apply as applyArtifacts, Param, Artifact } from "./artifact";
import { Weapon } from "./numeric/weapon/type";

// 角色与武器数据
export { getCharacterAttribute, getWeaponAttribute, getAttribute } from "./numeric";

// 圣遗物
export * from "./artifact";

// 属性
export { newAttribute } from "./attribute";

export function composeBasic(character: string, weapon: string): Attribute | null {
    let a1 = getCharacterAttribute(character);
    let a2: Weapon | null = getWeaponAttribute(weapon);

    if (a1 === null || a2 === null) {
        return null;
    }

    let base = newAttribute();
    let temp = mixAttribute(base, a1);

    addWeaponAttribute(temp, a2);

    return temp;
}

export function compose(character: string, weapon: string, artifacts: Artifact[], params?: Param): Attribute | null {
    let base: Attribute | null = composeBasic(character, weapon);
    if (base === null) {
        return null;
    }

    params = params || {};

    applyArtifacts(base, params, artifacts);

    return base;
}