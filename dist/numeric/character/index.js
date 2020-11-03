"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttribute = void 0;
const index_1 = require("../../attribute/index");
const keqingData_1 = require("./keqingData");
const data = {
    "keqing": keqingData_1.keqingData,
};
function getAttribute(what) {
    let base = index_1.newAttribute();
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
