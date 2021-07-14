import { PrimaryTagName, SecondaryTagName } from "../../common/type";

import getCharacterData from "./data";
import Attribute from "../../attribute/attribute";
import { applyPrimaryTag, applySecondaryTag } from "../../common/common";
import { getBaseValue } from "../preset/common";
import { getCharacterSecondary } from "../preset/get_attribute";
import WeaponType from "../weapon/weapon_type";
import { Element } from "../../common/element";

export default abstract class Character {
    // character name
    name: string;
    element: Element;

    // eng: string;

    star: number;
    level: number;
    ascend: boolean;
    constellation: number;

    // 被动天赋
    hasTalent1: boolean;
    hasTalent2: boolean;

    baseAtk: number;
    baseDef: number;
    baseHp: number;

    weapon: WeaponType;

    args: any;

    // 突破加成属性
    secondary: {
        name: SecondaryTagName,
        value: number
    };

    applyTalent: ((attribute: Attribute) => void);

    constructor(name: string, level: number, ascend: boolean, constellation: number, args: any) {
        this.name = name;

        this.star = 0;
        this.level = level;
        this.ascend = ascend;
        this.constellation = constellation;

        this.hasTalent1 = (level === 20 && ascend) || (level > 20);
        this.hasTalent2 = (level === 60 && ascend) || (level > 60);

        let charSpec = getCharacterData(name);
        this.baseAtk = getBaseValue(charSpec.attack, level, ascend);
        this.baseDef = getBaseValue(charSpec.defend, level, ascend);
        this.baseHp = getBaseValue(charSpec.life, level, ascend);

        this.weapon = charSpec.weapon;
        this.element = charSpec.element;

        if (charSpec.applyTalent) {
            this.applyTalent = charSpec.applyTalent;
        } else {
            this.applyTalent = () => {};
        }
        

        this.secondary = {
            name: charSpec.secondary.name,
            value: getCharacterSecondary(charSpec.secondary.family, level, ascend),
        };

        this.args = args ?? {};
    }

    applyPrimary(attribute: Attribute) {
        applyPrimaryTag(attribute, "attack", this.baseAtk);
        applyPrimaryTag(attribute, "defend", this.baseDef);
        applyPrimaryTag(attribute, "life", this.baseHp);
    }

    applySecondary(attribute: Attribute) {
        applySecondaryTag(attribute, this.secondary.name, this.secondary.value);
    }
}