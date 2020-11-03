import { Attribute } from "../attribute";

export function mixAttribute(base: Attribute, mix: any): Attribute {
    let temp = Object.assign({}, base);

    for (let key in mix) {
        if (typeof base[key] === "number") {
            temp[key] += mix[key];
        }
    }

    return temp;
}

export function capitalize(s: string) {
    if (s.length === 0) {
        return s;
    }

    return s[0].toUpperCase() + s.slice(1);
}