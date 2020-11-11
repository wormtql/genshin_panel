import { Attribute, newAttribute } from "../../attribute";
import { applyPrimaryTag, applySecondaryTag } from "../../common/common";
import { PrimaryTagName, SecondaryTagName, WeaponInterface } from "../../common/type";

import { swordData } from "./sword";
import { sword2Data } from "./sword2";
import { stickData } from "./stick";
import { bookData } from "./book";
import { bowData } from "./bow";

const data = {
    ...swordData,
    ...sword2Data,
    ...stickData,
    ...bookData,
    ...bowData,
}

const _supportedWeapons: string[] = [];
for (let key in data) {
    for (let key2 in data[key]) {
        _supportedWeapons.push(key2);
    }
}
export const supportedWeapons = function(): string[] {
    return _supportedWeapons;
};

export function applyPrimary(attribute: Attribute, w: WeaponInterface) {
    for (let key in w.primary) {
        applyPrimaryTag(attribute, key as PrimaryTagName, w.primary[key]);
    }
}

export function applySecondary(attribute: Attribute, w: WeaponInterface) {
    for (let key in w.secondary) {
        applySecondaryTag(attribute, key as SecondaryTagName, w.secondary[key]);
    }
}

export function getAttribute(what: string): WeaponInterface | null {
    // console.log("666" + what);
    for (let key in data) {
        if (what.indexOf(key) === 0) {
            let temp = data[key][what];
            if (typeof temp === "undefined") {
                return null;
            }

            return temp;
        }
    }

    return null;
}