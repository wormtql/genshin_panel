import Attribute from "../attribute/attribute";
import { WeaponInterface } from "./type";
export default class Weapon {
    name: string;
    eng: string;
    star: number;
    ascend: boolean;
    level: number;
    refine: number;
    effect: ((attribute: Attribute) => void) | null;
    attribute: WeaponInterface;
    constructor(name: string, level: string, refine: number);
    applyPrimary(attribute: Attribute): void;
    applySecondary(attribute: Attribute): void;
    applyEffect(attribute: Attribute): void;
}
