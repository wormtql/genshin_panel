import { Attribute } from "./attribute";
import {
    getCharacterAttribute, getWeaponAttribute,
    applyCharacterPrimary, applyWeaponPrimary,
    applyCharacterSecondary, applyWeaponSecondary
} from "./numeric";
import { newAttribute } from "./attribute";
import { apply as applyArtifacts, Param, IArtifact, ArtifactType, ArtifactSet } from "./artifact";
// import { CharacterInterface, WeaponInterface, BonusItemInterface } from "./common/type";
import {
    CharacterInterface,
    WeaponInterface,
    BonusItemInterface,
    applyPrimaryTag,
    applySecondaryTag,
    PrimaryTagName,
    SecondaryTagName,
} from "./common";

// 角色与武器数据
export {
    getCharacterAttribute, getWeaponAttribute,
    // applyCharacterBase, applyWeaponBase,
    // applyCharacterSecondary, applyWeaponSecondary
    supportedCharacters, supportedWeapons
} from "./numeric";

// 圣遗物
export { apply as applyArtifacts } from "./artifact";

// 属性
export { newAttribute } from "./attribute";

// 信息
export * from "./info";


export function compose(
    character: string | CharacterInterface,
    weapon: string | WeaponInterface,
    artifacts?: IArtifact[],
    params?: Param
): Attribute | null {
    let base = newAttribute();

    let a1: CharacterInterface;
    if (typeof character === "object") {
        a1 = character;
    } else {
        let temp = getCharacterAttribute(character);
        if (temp === null) {
            return null;
        }
        a1 = temp;
    }

    let a2: WeaponInterface;
    if (typeof weapon === "object") {
        a2 = weapon;
    } else {
        let temp = getWeaponAttribute(weapon);
        if (temp === null) {
            return null;
        }
        a2 = temp;
    }
    
    applyCharacterPrimary(base, a1);
    applyWeaponPrimary(base, a2);
    applyCharacterSecondary(base, a1);
    applyWeaponSecondary(base, a2);

    if (!artifacts || artifacts.length === 0) {
        return base;
    }

    params = params || {};
    applyArtifacts(base, artifacts, params);
    
    return base;
}

export function compose2(bonus: BonusItemInterface[], arts?: IArtifact[], params?: Param): Attribute {
    let ret = newAttribute();

    for (let i = 0; i < bonus.length; i++) {
        let item: BonusItemInterface = bonus[i];
        for (let key in item.primary) {
            applyPrimaryTag(ret, key as PrimaryTagName, item.primary[key]);
        }
    }

    for (let i = 0; i < bonus.length; i++) {
        let item: BonusItemInterface = bonus[i];
        for (let key in item.secondary) {
            applySecondaryTag(ret, key as SecondaryTagName, item.secondary[key]);
        }
    }

    if (!arts || arts.length === 0) {
        return ret;
    }

    params = params || {};
    applyArtifacts(ret, arts, params);

    return ret;
}

// export function compose(character: string, weapon: string, artifacts: Artifact[], params?: Param): Attribute | null {
//     let base: Attribute | null = composeBasic(character, weapon);
//     if (base === null) {
//         return null;
//     }

//     params = params || {};

//     applyArtifacts(base, artifacts, params);

//     return base;
// }