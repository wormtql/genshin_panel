import { Attribute } from "./attribute";
import {
    getCharacterAttribute, getWeaponAttribute,
    applyCharacterPrimary, applyWeaponPrimary,
    applyCharacterSecondary, applyWeaponSecondary
} from "./numeric";
import { newAttribute } from "./attribute";
import { apply as applyArtifacts, Param, IArtifact, ArtifactType, ArtifactSet } from "./artifact";
import { CharacterInterface, WeaponInterface } from "./common/type";

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


// function createArtifact(obj: IArtifact): Artifact | null {
//     try {
//         let art = new Artifact(obj.position, obj.setName);
//         art.setPrimaryTag(obj.primary.tag, obj.primary.value);
//         for (let i = 0; i < obj.secondary.length; i++) {
//             let temp = obj.secondary[i];
//             art.addSecondaryTag(temp.tag, temp.value);
//         }
    
//         return art;
//     } catch (err) {
//         return null;
//     }
// }

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

// export function compose(character: string, weapon: string, artifacts: Artifact[], params?: Param): Attribute | null {
//     let base: Attribute | null = composeBasic(character, weapon);
//     if (base === null) {
//         return null;
//     }

//     params = params || {};

//     applyArtifacts(base, artifacts, params);

//     return base;
// }