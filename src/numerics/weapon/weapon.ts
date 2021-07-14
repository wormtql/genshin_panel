import Attribute from "../../attribute/attribute";

import getWeaponData from "./data";
import { applyPrimaryTag, applySecondaryTag } from "../../common/common";
import { SecondaryTagName } from "../../common/type";
import { getWeaponBaseAtk, getWeaponSecondary } from "../preset/get_attribute";
import Character from "../character/character";

export default class Weapon {
    name: string;
    eng: string;

    star: number;

    // 是否突破
    ascend: boolean;
    // 等级
    level: number;
    // 精炼等级
    refine: number;

    // 特效
    effect: ((attribute: Attribute, character?: Character) => void) | null;

    // 特殊参数
    args: any;

    baseAtk: number;
    secondary: {
        name: SecondaryTagName,
        value: number
    } | null;

    constructor(name: string, level: number, ascend: boolean, refine: number, args: any = {}) {
        this.star = 0;
        this.eng = "";
        this.name = name;

        this.ascend = ascend;
        this.level = level;
        this.refine = refine;

        let temp = getWeaponData(name);
        this.effect = temp.effect || null;

        if (name !== "custom") {
            this.baseAtk = getWeaponBaseAtk(temp.baseAtkFamily, level, ascend);
        } else {
            this.baseAtk = args.baseAtk ?? 0;
        }
        
        if (temp.secondary) {
            this.secondary = {
                name: temp.secondary.name,
                value: getWeaponSecondary(temp.secondary.family, level)
            }
        } else {
            this.secondary = null;
        }

        this.args = args || {};
    }

    applyPrimary(attribute: Attribute) {
        applyPrimaryTag(attribute, "attack", this.baseAtk);
    }

    applySecondary(attribute: Attribute) {
        if (this.secondary) {
            applySecondaryTag(attribute, this.secondary.name, this.secondary.value);
        }
    }

    applyEffect(attribute: Attribute, character?: Character) {
        if (this.effect) {
            this.effect(attribute, character);
        }
    }
}