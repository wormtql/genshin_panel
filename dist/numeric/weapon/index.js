"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addWeaponAttribute = exports.getAttribute = void 0;
const heijian_1 = require("./sword/heijian");
const limingshenjian_1 = require("./sword/limingshenjian");
const data = {
    "heijian": heijian_1.heijianData,
    "limingshenjian": limingshenjian_1.limingshenjianData,
};
function getAttribute(what) {
    for (let key in data) {
        if (what.indexOf(key) !== -1) {
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
function applySingle(attribute, tag, value) {
    switch (tag) {
        case "attack2":
            attribute.attack2 += attribute.attack1 * value;
            break;
        case "critical":
            attribute.critical += value;
            attribute.bCritical += value;
            break;
        case "criticalDamage":
            attribute.criticalDamage += value;
            break;
        case "elementalMastery":
            attribute.elementalMastery += value;
            break;
        case "life2":
            attribute.life2 += attribute.life1 * value;
            break;
        case "recharge":
            attribute.recharge += value;
            break;
    }
}
function addWeaponAttribute(attribute, weaponAttribute) {
    attribute.attack1 += weaponAttribute.primary;
    for (let key in weaponAttribute.secondary) {
        applySingle(attribute, key, weaponAttribute.secondary[key]);
    }
}
exports.addWeaponAttribute = addWeaponAttribute;
