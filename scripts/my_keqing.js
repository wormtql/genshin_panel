const app = require("../dist");

let keqing = new app.Character("keqing", 90, false, 0);
let weapon = new app.Weapon("heijian", 90, false, 2);

let art1 = new app.ArtifactBuilder()
    .setName("thunderingFury")
    .position("flower")
    .mainTag("lifeStatic", 4780)
    .tag("critical", 0.086)
    .tag("elementalMastery", 21)
    .tag("attackPercentage", 0.099)
    .tag("defendStatic", 39)
    .build()
;

let art2 = new app.ArtifactBuilder()
    .setName("thunderSmoother")
    .position("feather")
    .mainTag("attackStatic", 311)
    .tag("critical", 0.093)
    .tag("criticalDamage", 0.202)
    .tag("lifePercentage", 0.047)
    .tag("lifeStatic", 209)
    .build()
;

let art3 = new app.ArtifactBuilder()
    .setName("thunderSmoother")
    .position("sand")
    .mainTag("attackPercentage", 0.466)
    .tag("critical", 0.07)
    .tag("defendStatic", 53)
    .tag("elementalMastery", 23)
    .tag("lifePercentage", 0.099)
    .build()
;

let art4 = new app.ArtifactBuilder()
    .setName("thunderSmoother")
    .position("cup")
    .mainTag("physicalBonus", 0.583)
    .tag("attackStatic", 64)
    .tag("criticalDamage", 0.202)
    .tag("elementalMastery", 16)
    .tag("critical", 0.027)
    .build()
;

let art5 = new app.ArtifactBuilder()
    .setName("thunderSmoother")
    .position("head")
    .mainTag("criticalDamage", 0.622)
    .tag("critical", 0.062)
    .tag("defendStatic", 51)
    .tag("defendPercentage", 0.124)
    .tag("recharge", 0.097)
    .build()
;

let attribute = new app.AttributeBuilder()
    .character(keqing)
    .weapon(weapon)
    .artifact(art1)
    .artifact(art2)
    .artifact(art3)
    .artifact(art4)
    .artifact(art5)
    .build()
;

console.log(attribute);
console.log(attribute.attack());
console.log(attribute.life());
console.log(attribute.defend());