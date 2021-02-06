import Attribute from "../../attribute/attribute";
import { SecondaryTagName } from "../../common/type";
export default class Weapon {
    name: string;
    eng: string;
    star: number;
    ascend: boolean;
    level: number;
    refine: number;
    effect: ((attribute: Attribute) => void) | null;
    baseAtk: number;
    secondary: {
        name: SecondaryTagName;
        value: number;
    } | null;
    constructor(name: string, level: number, ascend: boolean, refine: number);
    applyPrimary(attribute: Attribute): void;
    applySecondary(attribute: Attribute): void;
    applyEffect(attribute: Attribute): void;
}
