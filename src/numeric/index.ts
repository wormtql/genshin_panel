import { Attribute } from "../attribute";
import { getAttribute as getCharacterAttribute } from "./character";
import { getAttribute as getWeaponAttribute } from "./weapon";

export { getAttribute as getCharacterAttribute } from "./character";
export { getAttribute as getWeaponAttribute, addWeaponAttribute } from "./weapon";

export function getAttribute(what: string): any {
    let temp = getCharacterAttribute(what);

    if (temp === null) {
        temp = getWeaponAttribute(what);
    }

    return temp;
}