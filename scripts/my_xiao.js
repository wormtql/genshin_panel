const app = require("../dist");

let xiao = new app.Character("xiao", 77, false, 0);
let weapon = new app.Weapon("tiankongzhiji", 90, false, 2);

let art1 = new app.ArtifactBuilder()
    .setName("viridescentVenerer")
    .position("flower")
    .mainTag("lifeStatic", 4780)
    .tag("attackPercentage", 0.053)
    .tag("attackStatic", 14)
    .tag("criticalDamage", 0.07)
    .tag("critical", 0.167)
    .build();

let art2 = new app.ArtifactBuilder()
    .setName("thunderingFury")
    .position("feather")
    .mainTag("attackStatic", 232)
    .tag("defendPercentage", 0.058)
    .tag("defendStatic", 19)
    .tag("critical", 0.105)
    .tag("criticalDamage", 0.14)
    .build();

let art3 = new app.ArtifactBuilder()
    .setName("viridescentVenerer")
    .position("sand")
    .mainTag("attackPercentage", 0.466)
    .tag("critical", 0.031)
    .tag("recharge", 0.104)
    .tag("attackStatic", 29)
    .tag("defendStatic", 60)
    .build()
;

let art4 = new app.ArtifactBuilder()
    .setName("gladiatorFinale")
    .position("cup")
    .mainTag("attackPercentage", 0.466)
    .tag("defendPercentage", 0.146)
    .tag("criticalDamage", 0.062)
    .tag("recharge", 0.097)
    .tag("attackStatic", 74)
    .build()
;

let art5 = new app.ArtifactBuilder()
    .setName("gladiatorFinale")
    .position("head")
    .mainTag("criticalDamage", 0.622)
    .tag("lifeStatic", 239)
    .tag("defendPercentage", 0.146)
    .tag("elementalMastery", 58)
    .tag("attackStatic", 31)
    .build();

let attribute = new app.AttributeBuilder()
    .character(xiao)
    .weapon(weapon)
    .artifact(art1)
    .artifact(art2)
    .artifact(art3)
    .artifact(art4)
    .artifact(art5)
    .build()
;

console.log(attribute.attack());
console.log(attribute.life());
console.log(attribute.defend());
console.log(attribute);
