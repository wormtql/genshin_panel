"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.getParamList = void 0;
const index_1 = require("./effects/index");
const common_1 = require("../common/common");
var param_1 = require("./param");
Object.defineProperty(exports, "getParamList", { enumerable: true, get: function () { return param_1.getParamList; } });
// export { TagType } from "./tag_type";
// 计算单个圣遗物加成后的面板
function applySingleArt(attribute, art) {
    for (let key in art.primary) {
        common_1.applySecondaryTag(attribute, key, art.primary[key]);
    }
    for (let key in art.secondary) {
        common_1.applySecondaryTag(attribute, key, art.secondary[key]);
    }
}
// 计算圣遗物（包括套装）加成后的面板
function apply(attribute, artifacts, param) {
    for (let i = 0; i < artifacts.length; i++) {
        const art = artifacts[i];
        applySingleArt(attribute, art);
    }
    index_1.apply(attribute, param, artifacts);
}
exports.apply = apply;
