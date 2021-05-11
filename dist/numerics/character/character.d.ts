import { SecondaryTagName } from "../../common/type";
import Attribute from "../../attribute/attribute";
import WeaponType from "../weapon/weapon_type";
export default abstract class Character {
    name: string;
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
    args: any;
    secondary: {
        name: SecondaryTagName;
        value: number;
    };
    applyTalent: ((attribute: Attribute) => void);
    constructor(name: string, level: number, ascend: boolean, constellation: number, args: any);
    applyPrimary(attribute: Attribute): void;
    applySecondary(attribute: Attribute): void;
}
