const app = require("../dist");

let character = new app.Character("旅行者-岩", 90, false, 0);
let weapon = new app.Weapon("tiankongzhiren", 1, false, 2);

console.log(character);
console.log(weapon);