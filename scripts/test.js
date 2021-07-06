const app = require("../dist");

let character = new app.Character("ningguang", 90, false, 0);
let weapon = new app.Weapon("tiankongzhijuan", 86, false, 1);

let attribute = new app.AttributeBuilder().character(character).weapon(weapon).build();

console.log(attribute);
console.log(attribute.attack());
console.log(attribute.life());
console.log(attribute.defend());