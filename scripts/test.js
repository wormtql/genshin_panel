const genshin = require("../dist");

let character = new genshin.Character("leidianjiangjun", 90, false, 0);
let weapon = new genshin.Weapon("ticaozhidaoguang", 90, false, 1);

let art1 = new genshin.ArtifactBuilder()
    .setName("blizzardStrayer")
    .position("flower")
    .mainTag("lifeStatic", 4780)
    .tag("recharge", 0.188)
    .tag("lifePercentage", 0.053)
    .tag("criticalDamage", 0.187)
    .tag("attackPercentage", 0.093)
    .build()
;

let art2 = new genshin.ArtifactBuilder()
    .setName("viridescentVenerer")
    .position("feather")
    .mainTag("attackStatic", 311)
    .tag("lifePercentage", 0.192)
    .tag("recharge", 0.194)
    .tag("criticalDamage", 0.07)
    .tag("critical", 0.031)
    .build()
;

let art3 = new genshin.ArtifactBuilder()
    .setName("gladiatorFinale")
    .position("sand")
    .mainTag("attackPercentage", 0.387)
    .tag("attackStatic", 16)
    .tag("critical", 0.039)
    .tag("criticalDamage", 0.187)
    .tag("recharge", 0.091)
    .build()
;

let art4 = new genshin.ArtifactBuilder()
    .setName("wandererTroupe")
    .position("cup")
    .mainTag("waterBonus", 0.466)
    .tag("defendPercentage", 0.117)
    .tag("attackStatic", 27)
    .tag("criticalDamage", 0.062)
    .tag("attackPercentage", 0.14)
    .build()
;

let art5 = new genshin.ArtifactBuilder()
    .setName("gladiatorFinale")
    .position("head")
    .mainTag("criticalDamage", 0.622)
    .tag("recharge", 0.168)
    .tag("lifePercentage", 0.099)
    .tag("defendStatic", 23)
    .tag("attackPercentage", 0.099)
    .build()
;

let attribute = new genshin.AttributeBuilder()
    .character(character).weapon(weapon)
    .artifact(art1)
    .artifact(art2)
    .artifact(art3)
    .artifact(art4)
    .artifact(art5)
    .build();

console.log(attribute);
console.log(attribute.attack());
// console.log(attribute.life());
// console.log(attribute.defend());