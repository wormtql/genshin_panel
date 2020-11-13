import { Attribute, newAttribute } from "../../attribute/index";
// import { mixAttribute } from "../../util/util";
import { applyPrimaryTag, applySecondaryTag } from "../../common/common";

import { dilukeData } from "./fire/diluke";
import { keliData } from "./fire/keli";
import { banniteData } from "./fire/bannite";
import { xianglingData } from "./fire/xiangling";

import { monaData } from "./water/mona";
import { babalaData } from "./water/babala";
import { xingqiuData } from "./water/xingqiu";
import { dadaliyaData } from "./water/dadaliya";

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
import { diaonaData } from "./ice/diaona";

import { nuoaierData } from "./rock/nuoaier";
import { ningguangData } from "./rock/ningguang";
import { CharacterInterface, PrimaryTagName, SecondaryTagName } from "../../common/type";


const data = {
    "diluke": dilukeData,
    "keli": keliData,
    "bannite": banniteData,
    "xiangling": xianglingData,

    "mona": monaData,
    "babala": babalaData,
    "xingqiu": xingqiuData,
    "dadaliya": dadaliyaData,

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
    "diaona": diaonaData,

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

export function applyPrimary(attribute: Attribute, c: CharacterInterface) {
    for (let key in c.primary) {
        applyPrimaryTag(attribute, key as PrimaryTagName, c.primary[key]);
    }
}

export function applySecondary(attribute: Attribute, c: CharacterInterface) {
    for (let key in c.secondary) {
        applySecondaryTag(attribute, key as SecondaryTagName, c.secondary[key]);
    }
}

export function getAttribute(what: string): CharacterInterface | null {
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