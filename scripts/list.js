const app = require("../dist");

let supportedWeapon = app.supportedWeapons();
let supportedCharacter = app.supportedCharacters();

console.log(supportedWeapon);
console.log(supportedCharacter);