"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttribute = exports.addWeaponAttribute = exports.getWeaponAttribute = exports.getCharacterAttribute = void 0;
const character_1 = require("./character");
const weapon_1 = require("./weapon");
var character_2 = require("./character");
Object.defineProperty(exports, "getCharacterAttribute", { enumerable: true, get: function () { return character_2.getAttribute; } });
var weapon_2 = require("./weapon");
Object.defineProperty(exports, "getWeaponAttribute", { enumerable: true, get: function () { return weapon_2.getAttribute; } });
Object.defineProperty(exports, "addWeaponAttribute", { enumerable: true, get: function () { return weapon_2.addWeaponAttribute; } });
function getAttribute(what) {
    let temp = character_1.getAttribute(what);
    if (temp === null) {
        temp = weapon_1.getAttribute(what);
    }
    return temp;
}
exports.getAttribute = getAttribute;
