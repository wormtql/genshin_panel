import { SecondaryTagName } from "../../common/type";
import Attribute from "../../attribute/attribute";
export default class Character {
    name: string;
    eng: string;
    star: number;
    level: number;
    ascend: boolean;
    constellation: number;
    baseAtk: number;
    baseDef: number;
    baseHp: number;
    secondary: {
        name: SecondaryTagName;
        value: number;
    };
    constructor(name: string, level: number, ascend: boolean, constellation: number);
    applyPrimary(attribute: Attribute): void;
    applySecondary(attribute: Attribute): void;
}
