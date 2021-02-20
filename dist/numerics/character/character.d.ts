import { SecondaryTagName } from "../../common/type";
import Attribute from "../../attribute/attribute";
import WeaponType from "../weapon/weapon_type";
export default class Character {
    name: string;
    eng: string;
    star: number;
    level: number;
    ascend: boolean;
    constellation: number;
    hasTalent1: boolean;
    hasTalent2: boolean;
    baseAtk: number;
    baseDef: number;
    baseHp: number;
    weapon: WeaponType;
    secondary: {
        name: SecondaryTagName;
        value: number;
    };
    talent: ((attribute: Attribute) => void) | null;
    constructor(name: string, level: number, ascend: boolean, constellation: number);
    applyPrimary(attribute: Attribute): void;
    applySecondary(attribute: Attribute): void;
    applyTalent(attribute: Attribute): void;
}
