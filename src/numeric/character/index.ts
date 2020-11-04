import { Attribute, newAttribute } from "../../attribute/index";
import { mixAttribute } from "../../util/util";
import { applySingle } from "../../common/common";

import { dilukeData } from "./fire/diluke";
import { keliData } from "./fire/keli";
import { banniteData } from "./fire/bannite";
import { xianglingData } from "./fire/xiangling";

import { monaData } from "./water/mona";
import { babalaData } from "./water/babala";
import { xingqiuData } from "./water/xingqiu";

import { qinData } from "./wind/qin";
import { wendiData } from "./wind/wendi";
import { shatangData } from "./wind/shatang";

import { keqingData } from "./thunder/keqing";
import { beidouData } from "./thunder/beidou";
import { lishaData } from "./thunder/lisha";
import { leizeData } from "./thunder/leize";
import { feixieerData } from "./thunder/feixieer";

import { qiqiData } from "./ice/qiqi";
import { kaiyaData } from "./ice/kaiya";
import { chongyunData } from "./ice/chongyun";

import { nuoaierData } from "./rock/nuoaier";
import { ningguangData } from "./rock/ningguang";

import { TagName } from "../../artifact/tag_type";


const data = {
    "diluke": dilukeData,
    "keli": keliData,
    "bannite": banniteData,
    "xiangling": xianglingData,

    "mona": monaData,
    "babala": babalaData,
    "xingqiu": xingqiuData,

    "qin": qinData,
    "wendi": wendiData,
    "shatang": shatangData,

    "keqing": keqingData,
    "beidou": beidouData,
    "lisha": lishaData,
    "leize": leizeData,
    "feixieer": feixieerData,

    "qiqi": qiqiData,
    "kaiya": kaiyaData,
    "chongyun": chongyunData,

    "nuoaier": nuoaierData,
    "ningguang": ningguangData,
}

const _supportedCharacters: string[] = [];
for (let key in data) {
    for (let key2 in data[key]) {
        _supportedCharacters.push(key2);
    }
}
export const supportedCharacters = function(): string[] {
    return _supportedCharacters;
};

export function applyBase(attribute: Attribute, c: any) {
    attribute.life1 += c.primary.life;
    attribute.attack1 += c.primary.attack;
    attribute.defend1 += c.primary.defend;
}

export function applySecondary(attribute: Attribute, c: any) {
    for (let key in c.secondary) {
        applySingle(attribute, key as TagName, c.secondary[key]);
    }
}

export function getAttribute(what: string): any {
    // let base: Attribute = newAttribute();

    for (let key in data) {
        if (what.indexOf(key) === 0) {
            let temp = data[key][what];

            if (typeof temp === "undefined") {
                return null;
            }

            return temp;
            // let base = newAttribute();
            // return mixAttribute(base, temp);
        }
    }

    return null;
}