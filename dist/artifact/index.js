"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.Artifact = void 0;
const index_1 = require("./effects/index");
var artifact_1 = require("./artifact");
Object.defineProperty(exports, "Artifact", { enumerable: true, get: function () { return artifact_1.Artifact; } });
// 计算圣遗物（包括套装）加成后的面板
function apply(attribute, artifacts, param) {
    for (let i = 0; i < artifacts.length; i++) {
        artifacts[i].apply(attribute);
    }
    index_1.apply(attribute, param, artifacts);
}
exports.apply = apply;
