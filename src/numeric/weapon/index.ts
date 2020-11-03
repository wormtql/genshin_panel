import { heijianData } from "./sword/heijian";
import { limingshenjianData } from "./sword/limingshenjian";
import { Weapon, WeaponTagType } from "./type";

import { Attribute, newAttribute } from "../../attribute";
import { mixAttribute } from "../../util/util";

const data = {
    "heijian": heijianData,
    "limingshenjian": limingshenjianData,
}

export function getAttribute(what: string): Weapon | null {
    for (let key in data) {
        if (what.indexOf(key) !== -1) {
            let temp = data[key][what];
            if (typeof temp === "undefined") {
                return null;
            }

            return temp;

            // let base = newAttribute();
            // return mixAttribute(base, temp);
        }
    }

    return null;
}

function applySingle(attribute: Attribute, tag: WeaponTagType, value: number) {
    switch (tag) {
        case "attack2":
            attribute.attack2 += attribute.attack1 * value;
            break;
        case "critical":
            attribute.critical += value;
            attribute.bCritical += value;
            break;
        case "criticalDamage":
            attribute.criticalDamage += value;
            break;
        case "elementalMastery":
            attribute.elementalMastery += value;
            break;
        case "life2":
            attribute.life2 += attribute.life1 * value;
            break;
        case "recharge":
            attribute.recharge += value;
            break;
    }
}

export function addWeaponAttribute(attribute: Attribute, weaponAttribute: Weapon) {
    attribute.attack1 += weaponAttribute.primary;
    for (let key in weaponAttribute.secondary) {
        applySingle(attribute, key as WeaponTagType, weaponAttribute.secondary[key]);
    }
}