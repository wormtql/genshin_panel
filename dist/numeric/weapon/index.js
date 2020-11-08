"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttribute = exports.applySecondary = exports.applyPrimary = exports.supportedWeapons = void 0;
const common_1 = require("../../common/common");
const sword_1 = require("./sword");
const sword2_1 = require("./sword2");
const stick_1 = require("./stick");
const data = Object.assign(Object.assign(Object.assign({}, sword_1.swordData), sword2_1.sword2Data), stick_1.stickData);
const _supportedWeapons = [];
for (let key in data) {
    for (let key2 in data[key]) {
        _supportedWeapons.push(key2);
    }
}
exports.supportedWeapons = function () {
    return _supportedWeapons;
};
function applyPrimary(attribute, w) {
    for (let key in w.primary) {
        common_1.applyPrimaryTag(attribute, key, w.primary[key]);
    }
}
exports.applyPrimary = applyPrimary;
function applySecondary(attribute, w) {
    for (let key in w.secondary) {
        common_1.applySecondaryTag(attribute, key, w.secondary[key]);
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
