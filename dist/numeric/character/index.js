"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttribute = exports.applySecondary = exports.applyPrimary = exports.supportedCharacters = void 0;
// import { mixAttribute } from "../../util/util";
const common_1 = require("../../common/common");
const diluke_1 = require("./fire/diluke");
const keli_1 = require("./fire/keli");
const bannite_1 = require("./fire/bannite");
const xiangling_1 = require("./fire/xiangling");
const mona_1 = require("./water/mona");
const babala_1 = require("./water/babala");
const xingqiu_1 = require("./water/xingqiu");
const dadaliya_1 = require("./water/dadaliya");
const qin_1 = require("./wind/qin");
const wendi_1 = require("./wind/wendi");
const shatang_1 = require("./wind/shatang");
const keqing_1 = require("./thunder/keqing");
const beidou_1 = require("./thunder/beidou");
const lisha_1 = require("./thunder/lisha");
const leize_1 = require("./thunder/leize");
const feixieer_1 = require("./thunder/feixieer");
const qiqi_1 = require("./ice/qiqi");
const kaiya_1 = require("./ice/kaiya");
const chongyun_1 = require("./ice/chongyun");
const diaona_1 = require("./ice/diaona");
const nuoaier_1 = require("./rock/nuoaier");
const ningguang_1 = require("./rock/ningguang");
const data = {
    "diluke": diluke_1.dilukeData,
    "keli": keli_1.keliData,
    "bannite": bannite_1.banniteData,
    "xiangling": xiangling_1.xianglingData,
    "mona": mona_1.monaData,
    "babala": babala_1.babalaData,
    "xingqiu": xingqiu_1.xingqiuData,
    "dadaliya": dadaliya_1.dadaliyaData,
    "qin": qin_1.qinData,
    "wendi": wendi_1.wendiData,
    "shatang": shatang_1.shatangData,
    "keqing": keqing_1.keqingData,
    "beidou": beidou_1.beidouData,
    "lisha": lisha_1.lishaData,
    "leize": leize_1.leizeData,
    "feixieer": feixieer_1.feixieerData,
    "qiqi": qiqi_1.qiqiData,
    "kaiya": kaiya_1.kaiyaData,
    "chongyun": chongyun_1.chongyunData,
    "diaona": diaona_1.diaonaData,
    "nuoaier": nuoaier_1.nuoaierData,
    "ningguang": ningguang_1.ningguangData,
};
const _supportedCharacters = [];
for (let key in data) {
    for (let key2 in data[key]) {
        _supportedCharacters.push(key2);
    }
}
exports.supportedCharacters = function () {
    return _supportedCharacters;
};
function applyPrimary(attribute, c) {
    for (let key in c.primary) {
        common_1.applyPrimaryTag(attribute, key, c.primary[key]);
    }
}
exports.applyPrimary = applyPrimary;
function applySecondary(attribute, c) {
    for (let key in c.secondary) {
        common_1.applySecondaryTag(attribute, key, c.secondary[key]);
    }
}
exports.applySecondary = applySecondary;
function getAttribute(what) {
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
exports.getAttribute = getAttribute;
