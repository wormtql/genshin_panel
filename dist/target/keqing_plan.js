"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.physical = exports.noHeavy = void 0;
const element_1 = require("../common/element");
const average_damage_1 = require("./average_damage");
const DAMAGE_BA = 3;
exports.noHeavy = average_damage_1.elementalDamage(element_1.Element.Thunder, 1, DAMAGE_BA);
exports.physical = average_damage_1.physicalDamage(0.75, DAMAGE_BA);
