import { PrimaryTagName, SecondaryTagName } from "../../common/type";

import getCharacterData from "./data";
import Attribute from "../../attribute/attribute";
import { applyPrimaryTag, applySecondaryTag } from "../../common/common";
import { getBaseValue } from "../preset/common";
import { getCharacterSecondary } from "../preset/get_attribute";

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
        name: SecondaryTagName,
        value: number
    };

    constructor(name: string, level: number, ascend: boolean, constellation: number) {
        this.name = name;
        this.eng = "";

        this.star = 0;
        this.level = level;
        this.ascend = ascend;
        this.constellation = constellation;

        let charSpec = getCharacterData(name);
        this.baseAtk = getBaseValue(charSpec.attack, level, ascend);
        this.baseDef = getBaseValue(charSpec.defend, level, ascend);
        this.baseHp = getBaseValue(charSpec.life, level, ascend);

        this.secondary = {
            name: charSpec.secondary.name,
            value: getCharacterSecondary(charSpec.secondary.family, level, ascend),
        };
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