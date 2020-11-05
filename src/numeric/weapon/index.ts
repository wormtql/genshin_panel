import { Attribute, newAttribute } from "../../attribute";
// import { mixAttribute } from "../../util/util";
import { applySingle } from "../../common/common";
import { TagName } from "../../artifact/tag_type";

import { swordData } from "./sword";

const data = {
    ...swordData,
}

export function applyBase(attribute: Attribute, w: any) {
    attribute.attack1 += w.primary.attack;
}

export function applySecondary(attribute: Attribute, w: any) {
    for (let key in w.secondary) {
        applySingle(attribute, key as TagName, w.secondary[key]);
    }
}

export function getAttribute(what: string): any {
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