"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttribute = exports.applySecondary = exports.applyBase = void 0;
// import { mixAttribute } from "../../util/util";
const common_1 = require("../../common/common");
const sword_1 = require("./sword");
const data = Object.assign({}, sword_1.swordData);
function applyBase(attribute, w) {
    attribute.attack1 += w.primary.attack;
}
exports.applyBase = applyBase;
function applySecondary(attribute, w) {
    for (let key in w.secondary) {
        common_1.applySingle(attribute, key, w.secondary[key]);
    }
}
exports.applySecondary = applySecondary;
function getAttribute(what) {
    // console.log("666" + what);
    for (let key in data) {
        if (what.indexOf(key) === 0) {
            let temp = data[key][what];
            if (typeof temp === "undefined") {
                return null;
            }
            return temp;
        }
    }
    return null;
}
exports.getAttribute = getAttribute;
