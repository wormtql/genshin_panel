import { Attribute, newAttribute } from "../../attribute/index";
import { mixAttribute } from "../../util/util";

import { keqingData } from "./keqingData";


const data = {
    "keqing": keqingData,
}

export function getAttribute(what: string): any {
    let base: Attribute = newAttribute();

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