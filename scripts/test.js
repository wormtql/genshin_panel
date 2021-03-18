const app = require("../dist");

let character = new app.Character("hutao", 90, false, 0);
let weapon = new app.Weapon("anxiangdejiuyushi", 1, false, 2);

console.log(character);
console.log(weapon);