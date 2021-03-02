/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["genshinPanel"] = factory();
	else
		root["genshinPanel"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/numerics/character/data/index.d.ts":
/*!************************************************!*\
  !*** ./src/numerics/character/data/index.d.ts ***!
  \************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/index.d.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/index.d.ts":
/*!*********************************************!*\
  !*** ./src/numerics/weapon/data/index.d.ts ***!
  \*********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/index.d.ts?");

/***/ }),

/***/ "./src/artifact/artifact.ts":
/*!**********************************!*\
  !*** ./src/artifact/artifact.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst common_1 = __webpack_require__(/*! ../common/common */ \"./src/common/common.ts\");\r\nclass Artifact {\r\n    constructor(level, star, position, setName) {\r\n        this.level = level;\r\n        this.star = star;\r\n        this.position = position;\r\n        this.setName = setName;\r\n        this.tag1 = {};\r\n        this.tag2 = {};\r\n    }\r\n    addTag1(name, value) {\r\n        this.tag1[name] = value;\r\n    }\r\n    addTag2(name, value) {\r\n        this.tag2[name] = value;\r\n    }\r\n    apply(attr) {\r\n        for (let key in this.tag1) {\r\n            common_1.applySecondaryTag(attr, key, this.tag1[key]);\r\n        }\r\n        for (let key in this.tag2) {\r\n            common_1.applySecondaryTag(attr, key, this.tag2[key]);\r\n        }\r\n    }\r\n}\r\nexports.default = Artifact;\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/artifact.ts?");

/***/ }),

/***/ "./src/artifact/artifact_builder.ts":
/*!******************************************!*\
  !*** ./src/artifact/artifact_builder.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst artifact_1 = __webpack_require__(/*! ./artifact */ \"./src/artifact/artifact.ts\");\r\nclass ArtifactBuilder {\r\n    constructor() {\r\n        this.tag1 = [];\r\n        this.tag2 = [];\r\n        this._level = -1;\r\n        this._star = -1;\r\n        this._position = \"\";\r\n        this._setName = \"\";\r\n    }\r\n    level(value) {\r\n        this._level = value;\r\n        return this;\r\n    }\r\n    star(value) {\r\n        this._star = value;\r\n        return this;\r\n    }\r\n    position(value) {\r\n        this._position = value;\r\n        return this;\r\n    }\r\n    setName(value) {\r\n        this._setName = value;\r\n        return this;\r\n    }\r\n    mainTag(name, value) {\r\n        this.tag1.push({\r\n            name, value\r\n        });\r\n        return this;\r\n    }\r\n    tag(name, value) {\r\n        this.tag2.push({\r\n            name, value\r\n        });\r\n        return this;\r\n    }\r\n    check() {\r\n        if (this._position === \"\") {\r\n            return false;\r\n        }\r\n        if (this._setName === \"\") {\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n    build() {\r\n        if (!this.check()) {\r\n            throw \"typename and setname must be given\";\r\n        }\r\n        let art = new artifact_1.default(this._level, this._star, this._position, this._setName);\r\n        for (let item of this.tag1) {\r\n            art.addTag1(item.name, item.value);\r\n        }\r\n        for (let item of this.tag2) {\r\n            art.addTag2(item.name, item.value);\r\n        }\r\n        return art;\r\n    }\r\n}\r\nexports.default = ArtifactBuilder;\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/artifact_builder.ts?");

/***/ }),

/***/ "./src/artifact/artifact_set.ts":
/*!**************************************!*\
  !*** ./src/artifact/artifact_set.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst effects_1 = __webpack_require__(/*! ./effects */ \"./src/artifact/effects/index.ts\");\r\nclass ArtifactSet {\r\n    constructor() {\r\n        this.arts = [];\r\n    }\r\n    addArtifact(artifact) {\r\n        this.arts.push(artifact);\r\n    }\r\n    length() {\r\n        return this.arts.length;\r\n    }\r\n    get(i) {\r\n        return this.arts[i];\r\n    }\r\n    apply(attribute, ctx, params) {\r\n        for (let art of this.arts) {\r\n            art.apply(attribute);\r\n        }\r\n        effects_1.default(attribute, ctx, params, this);\r\n    }\r\n}\r\nexports.default = ArtifactSet;\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/artifact_set.ts?");

/***/ }),

/***/ "./src/artifact/effects/adventurer.ts":
/*!********************************************!*\
  !*** ./src/artifact/effects/adventurer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.lifeStatic += 1000;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/adventurer.ts?");

/***/ }),

/***/ "./src/artifact/effects/archaic_petra.ts":
/*!***********************************************!*\
  !*** ./src/artifact/effects/archaic_petra.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.rockBonus += 0.15;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/archaic_petra.ts?");

/***/ }),

/***/ "./src/artifact/effects/berserker.ts":
/*!*******************************************!*\
  !*** ./src/artifact/effects/berserker.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.critical += 0.12;\r\n    attribute.bCritical += 0.12;\r\n    attribute.qCritical += 0.12;\r\n    attribute.eCritical += 0.12;\r\n    attribute.airCritical += 0.12;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    if (params.countBerserker) {\r\n        attribute.critical += 0.24;\r\n        attribute.bCritical += 0.24;\r\n        attribute.eCritical += 0.24;\r\n        attribute.qCritical += 0.24;\r\n        attribute.airCritical += 0.24;\r\n    }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/berserker.ts?");

/***/ }),

/***/ "./src/artifact/effects/blizzard_strayer.ts":
/*!**************************************************!*\
  !*** ./src/artifact/effects/blizzard_strayer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.iceBonus += 0.15;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/blizzard_strayer.ts?");

/***/ }),

/***/ "./src/artifact/effects/bloodstained_chivalry.ts":
/*!*******************************************************!*\
  !*** ./src/artifact/effects/bloodstained_chivalry.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.physicalBonus += 0.25;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    if (params.countBloodstainedChinalry) {\r\n        attribute.bBonus += 0.5;\r\n    }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/bloodstained_chivalry.ts?");

/***/ }),

/***/ "./src/artifact/effects/brave_heart.ts":
/*!*********************************************!*\
  !*** ./src/artifact/effects/brave_heart.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.attackPercentage += attribute.attackBasic * 0.18;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    if (params.countBraveHeart) {\r\n        attribute.bonus += 0.3;\r\n    }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/brave_heart.ts?");

/***/ }),

/***/ "./src/artifact/effects/crimson_witch.ts":
/*!***********************************************!*\
  !*** ./src/artifact/effects/crimson_witch.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.fireBonus += 0.15;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    if (params.countCrimsonWitch1) {\r\n        attribute.fireBonus += 1;\r\n    }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/crimson_witch.ts?");

/***/ }),

/***/ "./src/artifact/effects/defender_will.ts":
/*!***********************************************!*\
  !*** ./src/artifact/effects/defender_will.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.defendPercentage += attribute.defendBasic * 0.3;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/defender_will.ts?");

/***/ }),

/***/ "./src/artifact/effects/exile.ts":
/*!***************************************!*\
  !*** ./src/artifact/effects/exile.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.recharge += 0.2;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/exile.ts?");

/***/ }),

/***/ "./src/artifact/effects/gambler.ts":
/*!*****************************************!*\
  !*** ./src/artifact/effects/gambler.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.eBonus += 0.2;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/gambler.ts?");

/***/ }),

/***/ "./src/artifact/effects/gladiator_finale.ts":
/*!**************************************************!*\
  !*** ./src/artifact/effects/gladiator_finale.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.attackPercentage += attribute.attackBasic * 0.18;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    let weaponType = ctx.character.weapon;\r\n    if (weaponType === 0 /* Sword */ || weaponType === 4 /* Sword2 */ || weaponType === 3 /* Stick */) {\r\n        attribute.aBonus += 0.35;\r\n    }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/gladiator_finale.ts?");

/***/ }),

/***/ "./src/artifact/effects/heart_of_depth.ts":
/*!************************************************!*\
  !*** ./src/artifact/effects/heart_of_depth.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.waterBonus += 0.15;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/heart_of_depth.ts?");

/***/ }),

/***/ "./src/artifact/effects/index.ts":
/*!***************************************!*\
  !*** ./src/artifact/effects/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst adventurer_1 = __webpack_require__(/*! ./adventurer */ \"./src/artifact/effects/adventurer.ts\");\r\nconst archaic_petra_1 = __webpack_require__(/*! ./archaic_petra */ \"./src/artifact/effects/archaic_petra.ts\");\r\nconst berserker_1 = __webpack_require__(/*! ./berserker */ \"./src/artifact/effects/berserker.ts\");\r\nconst bloodstained_chivalry_1 = __webpack_require__(/*! ./bloodstained_chivalry */ \"./src/artifact/effects/bloodstained_chivalry.ts\");\r\nconst brave_heart_1 = __webpack_require__(/*! ./brave_heart */ \"./src/artifact/effects/brave_heart.ts\");\r\nconst crimson_witch_1 = __webpack_require__(/*! ./crimson_witch */ \"./src/artifact/effects/crimson_witch.ts\");\r\nconst defender_will_1 = __webpack_require__(/*! ./defender_will */ \"./src/artifact/effects/defender_will.ts\");\r\nconst exile_1 = __webpack_require__(/*! ./exile */ \"./src/artifact/effects/exile.ts\");\r\nconst gambler_1 = __webpack_require__(/*! ./gambler */ \"./src/artifact/effects/gambler.ts\");\r\nconst gladiator_finale_1 = __webpack_require__(/*! ./gladiator_finale */ \"./src/artifact/effects/gladiator_finale.ts\");\r\nconst instructor_1 = __webpack_require__(/*! ./instructor */ \"./src/artifact/effects/instructor.ts\");\r\nconst lava_walker_1 = __webpack_require__(/*! ./lava_walker */ \"./src/artifact/effects/lava_walker.ts\");\r\nconst lucky_dog_1 = __webpack_require__(/*! ./lucky_dog */ \"./src/artifact/effects/lucky_dog.ts\");\r\nconst maiden_beloved_1 = __webpack_require__(/*! ./maiden_beloved */ \"./src/artifact/effects/maiden_beloved.ts\");\r\nconst martial_artist_1 = __webpack_require__(/*! ./martial_artist */ \"./src/artifact/effects/martial_artist.ts\");\r\nconst noblesse_oblige_1 = __webpack_require__(/*! ./noblesse_oblige */ \"./src/artifact/effects/noblesse_oblige.ts\");\r\nconst prayers_for_destiny_1 = __webpack_require__(/*! ./prayers_for_destiny */ \"./src/artifact/effects/prayers_for_destiny.ts\");\r\nconst prayers_for_illumination_1 = __webpack_require__(/*! ./prayers_for_illumination */ \"./src/artifact/effects/prayers_for_illumination.ts\");\r\nconst prayers_for_wisdom_1 = __webpack_require__(/*! ./prayers_for_wisdom */ \"./src/artifact/effects/prayers_for_wisdom.ts\");\r\nconst prayers_to_springtime_1 = __webpack_require__(/*! ./prayers_to_springtime */ \"./src/artifact/effects/prayers_to_springtime.ts\");\r\nconst resolution_of_sojourner_1 = __webpack_require__(/*! ./resolution_of_sojourner */ \"./src/artifact/effects/resolution_of_sojourner.ts\");\r\nconst retracing_bolide_1 = __webpack_require__(/*! ./retracing_bolide */ \"./src/artifact/effects/retracing_bolide.ts\");\r\nconst scholar_1 = __webpack_require__(/*! ./scholar */ \"./src/artifact/effects/scholar.ts\");\r\nconst thunder_smoother_1 = __webpack_require__(/*! ./thunder_smoother */ \"./src/artifact/effects/thunder_smoother.ts\");\r\nconst thundering_fury_1 = __webpack_require__(/*! ./thundering_fury */ \"./src/artifact/effects/thundering_fury.ts\");\r\nconst tiny_miracle_1 = __webpack_require__(/*! ./tiny_miracle */ \"./src/artifact/effects/tiny_miracle.ts\");\r\nconst traveling_doctor_1 = __webpack_require__(/*! ./traveling_doctor */ \"./src/artifact/effects/traveling_doctor.ts\");\r\nconst viridescent_venerer_1 = __webpack_require__(/*! ./viridescent_venerer */ \"./src/artifact/effects/viridescent_venerer.ts\");\r\nconst wanderer_troupe_1 = __webpack_require__(/*! ./wanderer_troupe */ \"./src/artifact/effects/wanderer_troupe.ts\");\r\nconst heart_of_depth_1 = __webpack_require__(/*! ./heart_of_depth */ \"./src/artifact/effects/heart_of_depth.ts\");\r\nconst blizzard_strayer_1 = __webpack_require__(/*! ./blizzard_strayer */ \"./src/artifact/effects/blizzard_strayer.ts\");\r\nlet applyFunctions = {};\r\napplyFunctions[\"adventurer\"] = adventurer_1.default;\r\napplyFunctions[\"archaicPetra\"] = archaic_petra_1.default;\r\napplyFunctions[\"berserker\"] = berserker_1.default;\r\napplyFunctions[\"bloodstainedChivalry\"] = bloodstained_chivalry_1.default;\r\napplyFunctions[\"braveHeart\"] = brave_heart_1.default;\r\napplyFunctions[\"crimsonWitch\"] = crimson_witch_1.default;\r\napplyFunctions[\"defenderWill\"] = defender_will_1.default;\r\napplyFunctions[\"exile\"] = exile_1.default;\r\napplyFunctions[\"gambler\"] = gambler_1.default;\r\napplyFunctions[\"gladiatorFinale\"] = gladiator_finale_1.default;\r\napplyFunctions[\"instructor\"] = instructor_1.default;\r\napplyFunctions[\"lavaWalker\"] = lava_walker_1.default;\r\napplyFunctions[\"luckyDog\"] = lucky_dog_1.default;\r\napplyFunctions[\"maidenBeloved\"] = maiden_beloved_1.default;\r\napplyFunctions[\"martialArtist\"] = martial_artist_1.default;\r\napplyFunctions[\"noblesseOblige\"] = noblesse_oblige_1.default;\r\napplyFunctions[\"prayersForDestiny\"] = prayers_for_destiny_1.default;\r\napplyFunctions[\"prayersForIllumination\"] = prayers_for_illumination_1.default;\r\napplyFunctions[\"prayersForWisdom\"] = prayers_for_wisdom_1.default;\r\napplyFunctions[\"prayersToSpringtime\"] = prayers_to_springtime_1.default;\r\napplyFunctions[\"resolutionOfSojourner\"] = resolution_of_sojourner_1.default;\r\napplyFunctions[\"retracingBolide\"] = retracing_bolide_1.default;\r\napplyFunctions[\"scholar\"] = scholar_1.default;\r\napplyFunctions[\"thunderSmoother\"] = thunder_smoother_1.default;\r\napplyFunctions[\"thunderingFury\"] = thundering_fury_1.default;\r\napplyFunctions[\"tinyMiracle\"] = tiny_miracle_1.default;\r\napplyFunctions[\"travelingDoctor\"] = traveling_doctor_1.default;\r\napplyFunctions[\"viridescentVenerer\"] = viridescent_venerer_1.default;\r\napplyFunctions[\"wandererTroupe\"] = wanderer_troupe_1.default;\r\napplyFunctions[\"heartOfDepth\"] = heart_of_depth_1.default;\r\napplyFunctions[\"blizzardStrayer\"] = blizzard_strayer_1.default;\r\nfunction apply(attribute, ctx, params, artifacts) {\r\n    let temp = {};\r\n    let len = artifacts.length();\r\n    params = params || {};\r\n    for (let i = 0; i < len; i++) {\r\n        let art = artifacts.get(i);\r\n        let setName = art.setName;\r\n        if (temp[setName]) {\r\n            temp[setName]++;\r\n        }\r\n        else {\r\n            temp[setName] = 1;\r\n        }\r\n    }\r\n    for (let key in temp) {\r\n        let count = temp[key];\r\n        while (count > 0) {\r\n            if (applyFunctions[key][count - 1] !== null) {\r\n                applyFunctions[key][count - 1](attribute, ctx, params);\r\n            }\r\n            count--;\r\n        }\r\n    }\r\n}\r\nexports.default = apply;\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/index.ts?");

/***/ }),

/***/ "./src/artifact/effects/instructor.ts":
/*!********************************************!*\
  !*** ./src/artifact/effects/instructor.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.elementalMastery += 80;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    if (params.countInstructor) {\r\n        attribute.elementalMastery += 120;\r\n    }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/instructor.ts?");

/***/ }),

/***/ "./src/artifact/effects/lava_walker.ts":
/*!*********************************************!*\
  !*** ./src/artifact/effects/lava_walker.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.fireRes += 0.4;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    if (params.countLavaWalker) {\r\n        attribute.bonus += 0.35;\r\n    }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/lava_walker.ts?");

/***/ }),

/***/ "./src/artifact/effects/lucky_dog.ts":
/*!*******************************************!*\
  !*** ./src/artifact/effects/lucky_dog.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.defendStatic += 100;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/lucky_dog.ts?");

/***/ }),

/***/ "./src/artifact/effects/maiden_beloved.ts":
/*!************************************************!*\
  !*** ./src/artifact/effects/maiden_beloved.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.cureEffect += 0.15;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/maiden_beloved.ts?");

/***/ }),

/***/ "./src/artifact/effects/martial_artist.ts":
/*!************************************************!*\
  !*** ./src/artifact/effects/martial_artist.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.aBonus += 0.15;\r\n    attribute.bBonus += 0.15;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    if (params.countMartialArtist) {\r\n        attribute.aBonus += 0.25;\r\n        attribute.bBonus += 0.25;\r\n    }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/martial_artist.ts?");

/***/ }),

/***/ "./src/artifact/effects/noblesse_oblige.ts":
/*!*************************************************!*\
  !*** ./src/artifact/effects/noblesse_oblige.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.qBonus += 0.2;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/noblesse_oblige.ts?");

/***/ }),

/***/ "./src/artifact/effects/prayers_for_destiny.ts":
/*!*****************************************************!*\
  !*** ./src/artifact/effects/prayers_for_destiny.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// 祭水之人\r\nfunction apply1(attribute, ctx, params) {\r\n    attribute.waterTime += 0.4;\r\n}\r\nexports.default = [apply1, null, null, null, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/prayers_for_destiny.ts?");

/***/ }),

/***/ "./src/artifact/effects/prayers_for_illumination.ts":
/*!**********************************************************!*\
  !*** ./src/artifact/effects/prayers_for_illumination.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// 祭火之人\r\nfunction apply1(attribute, ctx, params) {\r\n    attribute.fireTime += 0.4;\r\n}\r\nexports.default = [apply1, null, null, null, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/prayers_for_illumination.ts?");

/***/ }),

/***/ "./src/artifact/effects/prayers_for_wisdom.ts":
/*!****************************************************!*\
  !*** ./src/artifact/effects/prayers_for_wisdom.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// 祭雷之人\r\nfunction apply1(attribute, ctx, params) {\r\n    attribute.thunderTime += 0.4;\r\n}\r\nexports.default = [apply1, null, null, null, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/prayers_for_wisdom.ts?");

/***/ }),

/***/ "./src/artifact/effects/prayers_to_springtime.ts":
/*!*******************************************************!*\
  !*** ./src/artifact/effects/prayers_to_springtime.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// 祭冰之人\r\nfunction apply1(attribute, ctx, params) {\r\n    attribute.iceTime += 0.4;\r\n}\r\nexports.default = [apply1, null, null, null, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/prayers_to_springtime.ts?");

/***/ }),

/***/ "./src/artifact/effects/resolution_of_sojourner.ts":
/*!*********************************************************!*\
  !*** ./src/artifact/effects/resolution_of_sojourner.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.attackPercentage += attribute.attackBasic * 0.18;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    attribute.bCritical += 0.3;\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/resolution_of_sojourner.ts?");

/***/ }),

/***/ "./src/artifact/effects/retracing_bolide.ts":
/*!**************************************************!*\
  !*** ./src/artifact/effects/retracing_bolide.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.shield += 0.35;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    if (params.countRetracingBolide) {\r\n        attribute.aBonus += 0.4;\r\n        attribute.bBonus += 0.4;\r\n    }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/retracing_bolide.ts?");

/***/ }),

/***/ "./src/artifact/effects/scholar.ts":
/*!*****************************************!*\
  !*** ./src/artifact/effects/scholar.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.recharge += 0.2;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/scholar.ts?");

/***/ }),

/***/ "./src/artifact/effects/thunder_smoother.ts":
/*!**************************************************!*\
  !*** ./src/artifact/effects/thunder_smoother.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.thunderRes += 0.4;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    if (params.countThunderSmoother) {\r\n        attribute.bonus += 0.35;\r\n    }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/thunder_smoother.ts?");

/***/ }),

/***/ "./src/artifact/effects/thundering_fury.ts":
/*!*************************************************!*\
  !*** ./src/artifact/effects/thundering_fury.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.thunderBonus += 0.15;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    // if (params.countThunderingFury) {\r\n    //     attribute.bonus += 0.4;\r\n    //     if (typeof attribute.tag !== \"undefined\") {\r\n    //         attribute.tag.push(\"计入如雷的盛怒4件套\");\r\n    //     }\r\n    // }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/thundering_fury.ts?");

/***/ }),

/***/ "./src/artifact/effects/tiny_miracle.ts":
/*!**********************************************!*\
  !*** ./src/artifact/effects/tiny_miracle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.thunderRes += 0.2;\r\n    attribute.iceRes += 0.2;\r\n    attribute.rockRes += 0.2;\r\n    attribute.fireRes += 0.2;\r\n    attribute.windRes += 0.2;\r\n    attribute.waterRes += 0.2;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/tiny_miracle.ts?");

/***/ }),

/***/ "./src/artifact/effects/traveling_doctor.ts":
/*!**************************************************!*\
  !*** ./src/artifact/effects/traveling_doctor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.curedEffect += 0.2;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/traveling_doctor.ts?");

/***/ }),

/***/ "./src/artifact/effects/viridescent_venerer.ts":
/*!*****************************************************!*\
  !*** ./src/artifact/effects/viridescent_venerer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.windBonus += 0.15;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    // if (params.countViridescentVenerer) {\r\n    //     attribute.bonus += 0.6;\r\n    //     if (typeof attribute.tag !== \"undefined\") {\r\n    //         attribute.tag.push(\"计入翠绿之影4件套\");\r\n    //     }\r\n    // }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/viridescent_venerer.ts?");

/***/ }),

/***/ "./src/artifact/effects/wanderer_troupe.ts":
/*!*************************************************!*\
  !*** ./src/artifact/effects/wanderer_troupe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction apply2(attribute, ctx, params) {\r\n    attribute.elementalMastery += 80;\r\n}\r\nfunction apply4(attribute, ctx, params) {\r\n    let weapon = ctx.character.weapon;\r\n    if (weapon === 1 /* Book */ || weapon === 2 /* Bow */) {\r\n        attribute.bBonus += 0.35;\r\n    }\r\n}\r\nexports.default = [null, apply2, null, apply4, null];\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/artifact/effects/wanderer_troupe.ts?");

/***/ }),

/***/ "./src/attribute/attribute.ts":
/*!************************************!*\
  !*** ./src/attribute/attribute.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Attribute {\r\n    constructor() {\r\n        this.cureEffect = 0; // 治疗效果 \r\n        this.curedEffect = 0; // 被治疗效果\r\n        this.lifeBasic = 0; // 基础生命值\r\n        this.lifeStatic = 0; // 固定增加生命值\r\n        this.lifePercentage = 0; // %增加生命值\r\n        this.attackBasic = 0; // 基础攻击力\r\n        this.attackStatic = 0; // 固定攻击力\r\n        this.attackPercentage = 0; // %增加攻击力\r\n        this.defendBasic = 0; // 基础防御力\r\n        this.defendStatic = 0; // 固定防御力\r\n        this.defendPercentage = 0; // %增加防御力\r\n        this.critical = 0.05; // 普通攻击暴击率\r\n        this.bCritical = 0.05; // 重击暴击率\r\n        this.eCritical = 0.05; // 元素战技暴击率\r\n        this.qCritical = 0.05; // 元素爆发暴击率\r\n        this.airCritical = 0.05; // 下落攻击暴击率\r\n        this.criticalDamage = 0.5; // 暴击伤害\r\n        this.thunderRes = 0; // 雷元素抗性\r\n        this.fireRes = 0; //\r\n        this.waterRes = 0; //\r\n        this.iceRes = 0; //\r\n        this.windRes = 0; //\r\n        this.rockRes = 0; //\r\n        this.elementalMastery = 0; // 元素精通\r\n        this.recharge = 1; // 元素充能效率\r\n        this.thunderBonus = 0; // 雷元素伤害加成\r\n        this.fireBonus = 0; //\r\n        this.waterBonus = 0; //\r\n        this.iceBonus = 0; //\r\n        this.windBonus = 0; //\r\n        this.rockBonus = 0; //\r\n        this.physicalBonus = 0; // 物理伤害加成\r\n        this.elementalBonus = 0; // 元素伤害加成\r\n        this.aBonus = 0; // 普通攻击伤害加成\r\n        this.bBonus = 0; // 重击伤害加成\r\n        this.eBonus = 0; // 元素战技伤害加成\r\n        this.qBonus = 0; // 元素爆发伤害加成\r\n        this.airBonus = 0; // 下落攻击伤害加成\r\n        this.bonus = 0; // 伤害加成\r\n        this.thunderTime = 0; // 雷元素附着持续时间\r\n        this.fireTime = 0; //\r\n        this.waterTime = 0; //\r\n        this.iceTime = 0; //\r\n        this.windTime = 0; //\r\n        this.rockTime = 0; //\r\n        this.shield = 0; // 护盾强效\r\n    }\r\n    attack() {\r\n        return this.attackBasic + this.attackPercentage + this.attackStatic;\r\n    }\r\n    life() {\r\n        return this.lifeBasic + this.lifePercentage + this.lifeStatic;\r\n    }\r\n    defend() {\r\n        return this.defendBasic + this.defendPercentage + this.defendStatic;\r\n    }\r\n    crit(value) {\r\n        this.critical += value;\r\n        this.bCritical += value;\r\n        this.eCritical += value;\r\n        this.qCritical += value;\r\n        this.airCritical += value;\r\n    }\r\n}\r\nexports.default = Attribute;\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/attribute/attribute.ts?");

/***/ }),

/***/ "./src/builder/attribute_builder.ts":
/*!******************************************!*\
  !*** ./src/builder/attribute_builder.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst artifact_1 = __webpack_require__(/*! ../artifact/artifact */ \"./src/artifact/artifact.ts\");\r\nconst artifact_set_1 = __webpack_require__(/*! ../artifact/artifact_set */ \"./src/artifact/artifact_set.ts\");\r\nconst attribute_1 = __webpack_require__(/*! ../attribute/attribute */ \"./src/attribute/attribute.ts\");\r\nconst common_1 = __webpack_require__(/*! ../common/common */ \"./src/common/common.ts\");\r\nclass AttributeBuilder {\r\n    constructor() {\r\n        this._character = null;\r\n        this._weapon = null;\r\n        this._artifacts = new artifact_set_1.default();\r\n        this._single = [];\r\n        this._useWeaponEffect = true;\r\n    }\r\n    weaponEffect(value) {\r\n        this._useWeaponEffect = value;\r\n    }\r\n    character(value) {\r\n        this._character = value;\r\n        return this;\r\n    }\r\n    weapon(value) {\r\n        this._weapon = value;\r\n        return this;\r\n    }\r\n    artifact(art) {\r\n        this._artifacts.addArtifact(art);\r\n        return this;\r\n    }\r\n    artifacts(arts) {\r\n        if (arts instanceof artifact_set_1.default) {\r\n            for (let i = 0; i < arts.length(); i++) {\r\n                this.artifact(arts.get(i));\r\n            }\r\n        }\r\n        else if (Array.isArray(arts)) {\r\n            for (let item of arts) {\r\n                if (item instanceof artifact_1.default) {\r\n                    this.artifact(item);\r\n                }\r\n            }\r\n        }\r\n        return this;\r\n    }\r\n    single(key, value) {\r\n        this._single.push({\r\n            key,\r\n            value,\r\n        });\r\n        return this;\r\n    }\r\n    // 1. weapon basic\r\n    // 2. character basic\r\n    // 3. weapon secondary\r\n    // 4. character secondary\r\n    // 5. artifacts\r\n    // 6. character talent\r\n    // 7. weapon effects\r\n    build() {\r\n        var _a;\r\n        if (this._character === null || this._weapon === null) {\r\n            throw new Error(\"weapon and character must be specified\");\r\n        }\r\n        let attribute = new attribute_1.default();\r\n        // apply primary\r\n        if (this._weapon) {\r\n            this._weapon.applyPrimary(attribute);\r\n        }\r\n        if (this._character) {\r\n            this._character.applyPrimary(attribute);\r\n        }\r\n        // apply secondary\r\n        if (this._weapon) {\r\n            this._weapon.applySecondary(attribute);\r\n        }\r\n        if (this._character) {\r\n            this._character.applySecondary(attribute);\r\n        }\r\n        let context = {\r\n            character: this._character,\r\n            weapon: this._weapon,\r\n        };\r\n        // apply artifacts\r\n        this._artifacts.apply(attribute, context, null);\r\n        for (let s of this._single) {\r\n            common_1.applySecondaryTag(attribute, s.key, s.value);\r\n        }\r\n        // character talent\r\n        this._character.applyTalent(attribute);\r\n        // apply weapon effect\r\n        if (this._weapon && this._useWeaponEffect) {\r\n            (_a = this._weapon) === null || _a === void 0 ? void 0 : _a.applyEffect(attribute);\r\n        }\r\n        return attribute;\r\n    }\r\n}\r\nexports.default = AttributeBuilder;\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/builder/attribute_builder.ts?");

/***/ }),

/***/ "./src/common/common.ts":
/*!******************************!*\
  !*** ./src/common/common.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.applyPrimaryTag = exports.applySecondaryTag = void 0;\r\nfunction applySecondaryTag(attribute, name, value) {\r\n    switch (name) {\r\n        case \"attackStatic\":\r\n            attribute.attackStatic += value;\r\n            break;\r\n        case \"attackPercentage\":\r\n            attribute.attackPercentage += value * attribute.attackBasic;\r\n            break;\r\n        case \"cureEffect\":\r\n            attribute.cureEffect += value;\r\n            break;\r\n        case \"lifeStatic\":\r\n            attribute.lifeStatic += value;\r\n            break;\r\n        case \"lifePercentage\":\r\n            attribute.lifePercentage += value * attribute.lifeBasic;\r\n            break;\r\n        case \"defendStatic\":\r\n            attribute.defendStatic += value;\r\n            break;\r\n        case \"defendPercentage\":\r\n            attribute.defendPercentage += value * attribute.defendBasic;\r\n            break;\r\n        case \"critical\":\r\n            attribute.critical += value;\r\n            attribute.bCritical += value;\r\n            attribute.eCritical += value;\r\n            attribute.qCritical += value;\r\n            attribute.airCritical += value;\r\n            break;\r\n        case \"eCritical\":\r\n            attribute.eCritical += value;\r\n            break;\r\n        case \"criticalDamage\":\r\n            attribute.criticalDamage += value;\r\n            break;\r\n        case \"elementalMastery\":\r\n            attribute.elementalMastery += value;\r\n            break;\r\n        case \"recharge\":\r\n            attribute.recharge += value;\r\n            break;\r\n        case \"thunderBonus\":\r\n            attribute.thunderBonus += value;\r\n            break;\r\n        case \"fireBonus\":\r\n            attribute.fireBonus += value;\r\n            break;\r\n        case \"waterBonus\":\r\n            attribute.waterBonus += value;\r\n            break;\r\n        case \"iceBonus\":\r\n            attribute.iceBonus += value;\r\n            break;\r\n        case \"windBonus\":\r\n            attribute.windBonus += value;\r\n            break;\r\n        case \"rockBonus\":\r\n            attribute.rockBonus += value;\r\n            break;\r\n        case \"physicalBonus\":\r\n            attribute.physicalBonus += value;\r\n            break;\r\n        case \"aBonus\":\r\n            attribute.aBonus += value;\r\n            break;\r\n        case \"bBonus\":\r\n            attribute.bBonus += value;\r\n            break;\r\n        case \"bonus\":\r\n            attribute.bonus += value;\r\n            break;\r\n        case \"eBonus\":\r\n            attribute.eBonus += value;\r\n            break;\r\n        case \"qBonus\":\r\n            attribute.qBonus += value;\r\n            break;\r\n    }\r\n}\r\nexports.applySecondaryTag = applySecondaryTag;\r\nfunction applyPrimaryTag(attribute, name, value) {\r\n    switch (name) {\r\n        case \"attack\":\r\n            attribute.attackBasic += value;\r\n            break;\r\n        case \"defend\":\r\n            attribute.defendBasic += value;\r\n            break;\r\n        case \"life\":\r\n            attribute.lifeBasic += value;\r\n            break;\r\n    }\r\n}\r\nexports.applyPrimaryTag = applyPrimaryTag;\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/common/common.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ArtifactBuilder = exports.AttributeBuilder = exports.Character = exports.Weapon = void 0;\r\nvar weapon_1 = __webpack_require__(/*! ./numerics/weapon/weapon */ \"./src/numerics/weapon/weapon.ts\");\r\nObject.defineProperty(exports, \"Weapon\", ({ enumerable: true, get: function () { return weapon_1.default; } }));\r\nvar character_1 = __webpack_require__(/*! ./numerics/character/character */ \"./src/numerics/character/character.ts\");\r\nObject.defineProperty(exports, \"Character\", ({ enumerable: true, get: function () { return character_1.default; } }));\r\nvar attribute_builder_1 = __webpack_require__(/*! ./builder/attribute_builder */ \"./src/builder/attribute_builder.ts\");\r\nObject.defineProperty(exports, \"AttributeBuilder\", ({ enumerable: true, get: function () { return attribute_builder_1.default; } }));\r\nvar artifact_builder_1 = __webpack_require__(/*! ./artifact/artifact_builder */ \"./src/artifact/artifact_builder.ts\");\r\nObject.defineProperty(exports, \"ArtifactBuilder\", ({ enumerable: true, get: function () { return artifact_builder_1.default; } }));\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/index.ts?");

/***/ }),

/***/ "./src/numerics/character/character.ts":
/*!*********************************************!*\
  !*** ./src/numerics/character/character.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst data_1 = __webpack_require__(/*! ./data */ \"./src/numerics/character/data/index.js\");\r\nconst common_1 = __webpack_require__(/*! ../../common/common */ \"./src/common/common.ts\");\r\nconst common_2 = __webpack_require__(/*! ../preset/common */ \"./src/numerics/preset/common.ts\");\r\nconst get_attribute_1 = __webpack_require__(/*! ../preset/get_attribute */ \"./src/numerics/preset/get_attribute.ts\");\r\nclass Character {\r\n    constructor(name, level, ascend, constellation) {\r\n        this.name = name;\r\n        this.eng = \"\";\r\n        this.star = 0;\r\n        this.level = level;\r\n        this.ascend = ascend;\r\n        this.constellation = constellation;\r\n        this.hasTalent1 = (level === 20 && ascend) || (level > 20);\r\n        this.hasTalent2 = (level === 60 && ascend) || (level > 60);\r\n        let charSpec = data_1.default(name);\r\n        this.baseAtk = common_2.getBaseValue(charSpec.attack, level, ascend);\r\n        this.baseDef = common_2.getBaseValue(charSpec.defend, level, ascend);\r\n        this.baseHp = common_2.getBaseValue(charSpec.life, level, ascend);\r\n        this.weapon = charSpec.weapon;\r\n        if (charSpec.createTalent) {\r\n            this.talent = charSpec.createTalent.call(this);\r\n        }\r\n        else {\r\n            this.talent = null;\r\n        }\r\n        this.secondary = {\r\n            name: charSpec.secondary.name,\r\n            value: get_attribute_1.getCharacterSecondary(charSpec.secondary.family, level, ascend),\r\n        };\r\n    }\r\n    applyPrimary(attribute) {\r\n        common_1.applyPrimaryTag(attribute, \"attack\", this.baseAtk);\r\n        common_1.applyPrimaryTag(attribute, \"defend\", this.baseDef);\r\n        common_1.applyPrimaryTag(attribute, \"life\", this.baseHp);\r\n    }\r\n    applySecondary(attribute) {\r\n        common_1.applySecondaryTag(attribute, this.secondary.name, this.secondary.value);\r\n    }\r\n    applyTalent(attribute) {\r\n        if (this.talent) {\r\n            this.talent(attribute);\r\n        }\r\n    }\r\n}\r\nexports.default = Character;\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/character.ts?");

/***/ }),

/***/ "./src/numerics/character/data/fire/anbo.ts":
/*!**************************************************!*\
  !*** ./src/numerics/character/data/fire/anbo.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"anbo\", \"amber\", \"安柏\"],\r\n    life: [793, 2038, 2630, 3940, 4361, 5016, 5578, 6233, 6654, 7309, 7730, 8358, 8806, 9461],\r\n    attack: [19, 48, 62, 93, 103, 118, 131, 147, 157, 172, 182, 198, 208, 223],\r\n    defend: [50, 129, 167, 250, 277, 318, 354, 396, 422, 464, 491, 532, 559, 601],\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk240\",\r\n    },\r\n    createTalent: function () {\r\n        let that = this;\r\n        if (that.hasTalent1) {\r\n            return function (attribute) {\r\n                attribute.qCritical += 0.1;\r\n            };\r\n        }\r\n        return null;\r\n    },\r\n    weapon: 2 /* Bow */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/fire/anbo.ts?");

/***/ }),

/***/ "./src/numerics/character/data/fire/bannite.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/character/data/fire/bannite.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"bennett\", \"bannite\", \"班尼特\"],\r\n    life: [1039, 2670, 3447, 5163, 5715, 6573, 7309, 8186, 8719, 9577, 10129, 10987, 11539, 12397],\r\n    attack: [16, 41, 53, 80, 88, 101, 113, 126, 134, 148, 156, 169, 178, 191],\r\n    defend: [65, 166, 214, 321, 356, 409, 455, 508, 542, 596, 630, 684, 718, 771],\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge267\"\r\n    },\r\n    weapon: 0 /* Sword */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/fire/bannite.ts?");

/***/ }),

/***/ "./src/numerics/character/data/fire/diluke.ts":
/*!****************************************************!*\
  !*** ./src/numerics/character/data/fire/diluke.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"diluke\", \"diluc\", \"迪卢克\"],\r\n    life: [1011, 2621, 3488, 5219, 5834, 6712, 7533, 8421, 9036, 9932, 10547, 11453, 12068, 12981],\r\n    attack: [26, 68, 90, 135, 151, 173, 194, 217, 233, 256, 272, 295, 311, 335],\r\n    defend: [61, 158, 211, 315, 352, 405, 455, 509, 546, 600, 637, 692, 729, 784],\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr192\",\r\n    },\r\n    weapon: 4 /* Sword2 */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/fire/diluke.ts?");

/***/ }),

/***/ "./src/numerics/character/data/fire/hutao.ts":
/*!***************************************************!*\
  !*** ./src/numerics/character/data/fire/hutao.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"hutao\", \"胡桃\"],\r\n    life: [1211, 3141, 4179, 6253, 6990, 8042, 9026, 10089, 10826, 11899, 12637, 13721, 14459, 15552],\r\n    attack: [8, 21, 29, 43, 48, 55, 62, 69, 74, 81, 86, 94, 99, 106],\r\n    defend: [68, 177, 235, 352, 394, 453, 508, 568, 610, 670, 712, 773, 815, 876],\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd384\",\r\n    },\r\n    weapon: 3 /* Stick */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/fire/hutao.ts?");

/***/ }),

/***/ "./src/numerics/character/data/fire/keli.ts":
/*!**************************************************!*\
  !*** ./src/numerics/character/data/fire/keli.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"keli\", \"klee\", \"可莉\"],\r\n    life: [801, 2077, 2764, 4136, 4623, 5319, 5970, 6673, 7161, 7870, 8358, 9076, 9563, 10287],\r\n    attack: [24, 63, 84, 125, 140, 161, 180, 202, 216, 238, 253, 274, 289, 311],\r\n    defend: [48, 124, 165, 247, 276, 318, 357, 399, 428, 470, 500, 542, 572, 615],\r\n    secondary: {\r\n        name: \"fireBonus\",\r\n        family: \"bonus288\"\r\n    },\r\n    weapon: 1 /* Book */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/fire/keli.ts?");

/***/ }),

/***/ "./src/numerics/character/data/fire/xiangling.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/character/data/fire/xiangling.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xiangling\", \"香菱\"],\r\n    life: [912, 2342, 3024, 4529, 5013, 5766, 6411, 7164, 7648, 8401, 8885, 9638, 10122, 10875],\r\n    attack: [19, 48, 63, 94, 104, 119, 133, 148, 158, 174, 184, 200, 210, 225],\r\n    defend: [56, 144, 186, 279, 308, 355, 394, 441, 470, 517, 546, 593, 623, 669],\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em96\"\r\n    },\r\n    weapon: 3 /* Stick */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/fire/xiangling.ts?");

/***/ }),

/***/ "./src/numerics/character/data/fire/xinyan.ts":
/*!****************************************************!*\
  !*** ./src/numerics/character/data/fire/xinyan.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xinyan\", \"辛焱\"],\r\n    life: [939, 2413, 3114, 4665, 5163, 5939, 6604, 7379, 7878, 8653, 9151, 9927, 10425, 11201],\r\n    attack: [21, 54, 69, 103, 115, 132, 147, 164, 175, 192, 203, 220, 231, 249],\r\n    defend: [67, 172, 222, 333, 368, 423, 471, 526, 562, 617, 652, 708, 743, 799],\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk240\"\r\n    },\r\n    weapon: 4 /* Sword2 */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/fire/xinyan.ts?");

/***/ }),

/***/ "./src/numerics/character/data/ice/chongyun.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/character/data/ice/chongyun.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"chongyun\", \"重云\"],\r\n    life: [921, 2366, 3054, 4574, 5063, 5824, 6475, 7236, 7725, 8485, 8974, 9734, 10223, 10984],\r\n    attack: [19, 48, 62, 93, 103, 118, 131, 147, 157, 172, 182, 197, 208, 223],\r\n    defend: [54, 140, 180, 270, 299, 344, 382, 427, 456, 501, 530, 575, 603, 648],\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk240\",\r\n    },\r\n    weapon: 4 /* Sword2 */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/ice/chongyun.ts?");

/***/ }),

/***/ "./src/numerics/character/data/ice/diaona.ts":
/*!***************************************************!*\
  !*** ./src/numerics/character/data/ice/diaona.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"diaona\", \"迪奥娜\", \"diona\"],\r\n    life: [802, 2061, 2661, 3985, 4411, 5074, 5642, 6305, 6731, 7393, 7818, 8481, 8907, 9570],\r\n    attack: [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212],\r\n    defend: [50, 129, 167, 250, 277, 318, 354, 396, 422, 464, 491, 532, 559, 601],\r\n    secondary: {\r\n        name: \"iceBonus\",\r\n        family: \"bonus240\",\r\n    },\r\n    weapon: 2 /* Bow */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/ice/diaona.ts?");

/***/ }),

/***/ "./src/numerics/character/data/ice/ganyu.ts":
/*!**************************************************!*\
  !*** ./src/numerics/character/data/ice/ganyu.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"ganyu\", \"甘雨\"],\r\n    life: [763, 1978, 2632, 3939, 4403, 5066, 5686, 6355, 6820, 7495, 7960, 8643, 9108, 9797],\r\n    attack: [26, 68, 90, 135, 151, 173, 194, 217, 233, 256, 272, 295, 311, 335],\r\n    defend: [49, 127, 169, 253, 283, 326, 366, 409, 439, 482, 512, 556, 586, 630],\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd384\",\r\n    },\r\n    weapon: 2 /* Bow */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/ice/ganyu.ts?");

/***/ }),

/***/ "./src/numerics/character/data/ice/kaiya.ts":
/*!**************************************************!*\
  !*** ./src/numerics/character/data/ice/kaiya.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"kaiya\", \"凯亚\", \"kaeya\"],\r\n    life: [976, 2506, 3235, 4846, 5364, 6170, 6860, 7666, 8184, 8989, 9507, 10312, 10830, 11636],\r\n    attack: [19, 48, 62, 93, 103, 118, 131, 147, 157, 172, 182, 198, 208, 223],\r\n    defend: [66, 171, 220, 330, 365, 420, 467, 522, 557, 612, 647, 702, 737, 792],\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge267\"\r\n    },\r\n    weapon: 0 /* Sword */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/ice/kaiya.ts?");

/***/ }),

/***/ "./src/numerics/character/data/ice/qiqi.ts":
/*!*************************************************!*\
  !*** ./src/numerics/character/data/ice/qiqi.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"qiqi\", \"七七\"],\r\n    life: [963, 2498, 3323, 4973, 5559, 6396, 7178, 8023, 8610, 9463, 10050, 10912, 11499, 12368],\r\n    attack: [22, 58, 77, 115, 129, 148, 167, 186, 200, 220, 233, 253, 267, 287],\r\n    defend: [72, 186, 248, 371, 415, 477, 535, 598, 642, 706, 749, 814, 857, 922],\r\n    secondary: {\r\n        name: \"cureEffect\",\r\n        family: \"cure222\"\r\n    },\r\n    weapon: 0 /* Sword */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/ice/qiqi.ts?");

/***/ }),

/***/ "./src/numerics/character/data/rock/abeiduo.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/character/data/rock/abeiduo.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"abeiduo\", \"阿贝多\", \"albedo\"],\r\n    life: [1030, 2671, 3554, 5317, 5944, 6839, 7675, 8579, 9207, 10119, 10746, 11669, 12296, 13226],\r\n    attack: [20, 51, 68, 101, 113, 130, 146, 163, 175, 192, 204, 222, 233, 251],\r\n    defend: [68, 177, 235, 352, 394, 453, 508, 568, 610, 670, 712, 773, 815, 876],\r\n    secondary: {\r\n        name: \"rockBonus\",\r\n        family: \"bonus288\",\r\n    },\r\n    weapon: 0 /* Sword */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/rock/abeiduo.ts?");

/***/ }),

/***/ "./src/numerics/character/data/rock/me_rock.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/character/data/rock/me_rock.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"me_rock\", \"旅行者-岩\", \"me_geo\"],\r\n    life: [912, 2342, 3024, 4529, 5013, 5766, 6411, 7164, 7648, 8401, 8885, 9638, 10122, 10875],\r\n    attack: [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212],\r\n    defend: [57, 147, 190, 284, 315, 362, 402, 450, 480, 527, 558, 605, 635, 683],\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk240\"\r\n    },\r\n    weapon: 0 /* Sword */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/rock/me_rock.ts?");

/***/ }),

/***/ "./src/numerics/character/data/rock/ningguang.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/character/data/rock/ningguang.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"ningguang\", \"凝光\"],\r\n    life: [821, 2108, 2721, 4076, 4512, 5189, 5770, 6448, 6884, 7561, 7996, 8674, 9110, 9787],\r\n    attack: [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212],\r\n    defend: [48, 123, 159, 239, 264, 304, 338, 378, 403, 443, 468, 508, 534, 573],\r\n    secondary: {\r\n        name: \"rockBonus\",\r\n        family: \"bonus240\",\r\n    },\r\n    weapon: 1 /* Book */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/rock/ningguang.ts?");

/***/ }),

/***/ "./src/numerics/character/data/rock/nuoaier.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/character/data/rock/nuoaier.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"nuoaier\", \"诺艾尔\", \"noelle\"],\r\n    life: [1012, 2600, 3356, 5027, 5564, 6400, 7117, 7953, 8490, 9325, 9862, 10698, 11235, 12071],\r\n    attack: [16, 41, 53, 80, 88, 101, 113, 126, 134, 148, 156, 169, 178, 191],\r\n    defend: [67, 172, 222, 333, 368, 423, 471, 526, 562, 617, 652, 708, 743, 799],\r\n    secondary: {\r\n        name: \"defendPercentage\",\r\n        family: \"def300\"\r\n    },\r\n    weapon: 4 /* Sword2 */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/rock/nuoaier.ts?");

/***/ }),

/***/ "./src/numerics/character/data/rock/zhongli.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/character/data/rock/zhongli.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"zhongli\", \"钟离\"],\r\n    life: [1144, 2967, 3948, 5908, 6605, 7599, 8528, 9533, 10230, 11243, 11940, 12965, 13662, 14695],\r\n    attack: [20, 51, 67, 101, 113, 130, 146, 163, 175, 192, 204, 222, 233, 251],\r\n    defend: [57, 149, 198, 297, 332, 382, 428, 479, 514, 564, 599, 651, 686, 738],\r\n    secondary: {\r\n        name: \"rockBonus\",\r\n        family: \"bonus288\"\r\n    },\r\n    weapon: 3 /* Stick */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/rock/zhongli.ts?");

/***/ }),

/***/ "./src/numerics/character/data/thunder/beidou.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/character/data/thunder/beidou.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"beidou\", \"北斗\"],\r\n    life: [1094, 2811, 3628, 5435, 6015, 6919, 7694, 8597, 9178, 10081, 10662, 11565, 12146, 13050],\r\n    attack: [19, 48, 63, 94, 104, 119, 133, 148, 158, 174, 184, 200, 210, 225],\r\n    defend: [54, 140, 180, 270, 299, 344, 382, 427, 456, 501, 530, 575, 603, 648],\r\n    secondary: {\r\n        name: \"thunderBonus\",\r\n        family: \"bonus240\"\r\n    },\r\n    weapon: 4 /* Sword2 */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/thunder/beidou.ts?");

/***/ }),

/***/ "./src/numerics/character/data/thunder/feixieer.ts":
/*!*********************************************************!*\
  !*** ./src/numerics/character/data/thunder/feixieer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"feixieer\", \"菲谢尔\", \"fischl\"],\r\n    life: [770, 1979, 2555, 3827, 4236, 4872, 5418, 6054, 6463, 7099, 7508, 8144, 8553, 9189],\r\n    attack: [20, 53, 68, 102, 113, 130, 144, 161, 172, 189, 200, 216, 227, 244],\r\n    defend: [50, 128, 165, 247, 274, 315, 350, 391, 418, 459, 485, 526, 553, 594],\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk240\"\r\n    },\r\n    weapon: 2 /* Bow */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/thunder/feixieer.ts?");

/***/ }),

/***/ "./src/numerics/character/data/thunder/keqing.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/character/data/thunder/keqing.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"keqing\", \"刻晴\"],\r\n    life: [1020, 2646, 3521, 5268, 5889, 6776, 7604, 8500, 9121, 10025, 10647, 11561, 12182, 13103],\r\n    attack: [25, 65, 87, 130, 145, 167, 187, 209, 225, 247, 262, 285, 300, 323],\r\n    defend: [62, 161, 215, 321, 359, 413, 464, 519, 556, 612, 649, 705, 743, 799],\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd384\"\r\n    },\r\n    weapon: 0 /* Sword */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/thunder/keqing.ts?");

/***/ }),

/***/ "./src/numerics/character/data/thunder/leize.ts":
/*!******************************************************!*\
  !*** ./src/numerics/character/data/thunder/leize.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"leize\", \"雷泽\", \"razor\"],\r\n    life: [1003, 2577, 3326, 4982, 5514, 6343, 7052, 7881, 8413, 9241, 9773, 10602, 11134, 11962],\r\n    attack: [20, 50, 65, 97, 108, 124, 138, 154, 164, 180, 191, 207, 217, 234],\r\n    defend: [63, 162, 209, 313, 346, 398, 443, 495, 528, 580, 613, 665, 699, 751],\r\n    secondary: {\r\n        name: \"physicalBonus\",\r\n        family: \"bonus300\"\r\n    },\r\n    weapon: 4 /* Sword2 */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/thunder/leize.ts?");

/***/ }),

/***/ "./src/numerics/character/data/thunder/lisha.ts":
/*!******************************************************!*\
  !*** ./src/numerics/character/data/thunder/lisha.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"lisha\", \"丽莎\", \"lisa\"],\r\n    life: [802, 2061, 2661, 3985, 4411, 5074, 5642, 6305, 6731, 7393, 7818, 8481, 8907, 9570],\r\n    attack: [19, 50, 64, 96, 107, 123, 136, 153, 163, 179, 189, 205, 215, 232],\r\n    defend: [48, 123, 159, 239, 264, 304, 338, 378, 403, 443, 468, 508, 534, 573],\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em96\"\r\n    },\r\n    weapon: 1 /* Book */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/thunder/lisha.ts?");

/***/ }),

/***/ "./src/numerics/character/data/water/babala.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/character/data/water/babala.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"babala\", \"芭芭拉\", \"barbara\"],\r\n    life: [821, 2108, 2721, 4076, 4512, 5189, 5770, 6448, 6884, 7561, 7996, 8674, 9110, 9787],\r\n    attack: [13, 34, 44, 66, 73, 84, 94, 105, 112, 123, 130, 141, 148, 159],\r\n    defend: [56, 144, 186, 279, 308, 355, 394, 441, 470, 517, 546, 593, 623, 669],\r\n    secondary: {\r\n        name: \"lifePercentage\",\r\n        family: \"hp240\"\r\n    },\r\n    weapon: 1 /* Book */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/water/babala.ts?");

/***/ }),

/***/ "./src/numerics/character/data/water/dadaliya.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/character/data/water/dadaliya.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"dadaliya\", \"达达利亚\", \"tartaglia\"],\r\n    life: [1020, 2646, 3521, 5268, 5889, 6776, 7604, 8500, 9121, 10025, 10647, 11561, 12182, 13103],\r\n    attack: [23, 61, 81, 121, 135, 156, 175, 195, 210, 231, 245, 266, 280, 301],\r\n    defend: [63, 165, 219, 328, 366, 421, 473, 528, 567, 623, 662, 719, 757, 815],\r\n    secondary: {\r\n        name: \"waterBonus\",\r\n        family: \"bonus288\"\r\n    },\r\n    weapon: 2 /* Bow */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/water/dadaliya.ts?");

/***/ }),

/***/ "./src/numerics/character/data/water/mona.ts":
/*!***************************************************!*\
  !*** ./src/numerics/character/data/water/mona.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"mona\", \"莫娜\"],\r\n    life: [810, 2102, 2797, 4185, 4678, 5383, 6041, 6752, 7246, 7964, 8458, 9184, 9677, 10409],\r\n    attack: [22, 58, 77, 115, 129, 148, 167, 186, 200, 220, 233, 253, 267, 287],\r\n    defend: [51, 132, 176, 263, 294, 338, 379, 424, 455, 500, 531, 576, 607, 653],\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge320\"\r\n    },\r\n    weapon: 1 /* Book */,\r\n    createTalent: function () {\r\n        let that = this;\r\n        if (that.hasTalent2) {\r\n            return function (attribute) {\r\n                attribute.waterBonus += attribute.recharge * 0.2;\r\n            };\r\n        }\r\n        return null;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/water/mona.ts?");

/***/ }),

/***/ "./src/numerics/character/data/water/xingqiu.ts":
/*!******************************************************!*\
  !*** ./src/numerics/character/data/water/xingqiu.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xingqiu\", \"行秋\"],\r\n    life: [857, 2202, 2842, 4257, 4712, 5420, 6027, 6735, 7190, 7897, 8352, 9060, 9514, 10222],\r\n    attack: [17, 43, 56, 84, 93, 107, 119, 133, 142, 156, 165, 179, 188, 202],\r\n    defend: [64, 163, 211, 316, 349, 402, 447, 499, 533, 585, 619, 671, 705, 758],\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk240\"\r\n    },\r\n    createTalent: function () {\r\n        let that = this;\r\n        if (that.hasTalent2) {\r\n            return function (attribute) {\r\n                attribute.waterBonus += 0.2;\r\n            };\r\n        }\r\n        return null;\r\n    },\r\n    weapon: 0 /* Sword */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/water/xingqiu.ts?");

/***/ }),

/***/ "./src/numerics/character/data/wind/me_wind.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/character/data/wind/me_wind.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"me_wind\", \"旅行者-风\", \"me_anemo\"],\r\n    life: [912, 2342, 3024, 4529, 5013, 5766, 6411, 7164, 7648, 8401, 8885, 9638, 10122, 10875],\r\n    attack: [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212],\r\n    defend: [57, 147, 190, 284, 315, 362, 402, 450, 480, 527, 558, 605, 635, 683],\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk240\"\r\n    },\r\n    weapon: 0 /* Sword */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/wind/me_wind.ts?");

/***/ }),

/***/ "./src/numerics/character/data/wind/qin.ts":
/*!*************************************************!*\
  !*** ./src/numerics/character/data/wind/qin.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"qin\", \"琴\", \"jean\"],\r\n    life: [1144, 2967, 3948, 5908, 6605, 7599, 8528, 9533, 10230, 11243, 11940, 12965, 13662, 14695],\r\n    attack: [19, 48, 64, 96, 108, 124, 139, 155, 166, 183, 194, 211, 222, 239],\r\n    defend: [60, 155, 206, 309, 345, 397, 446, 499, 535, 588, 624, 678, 715, 769],\r\n    secondary: {\r\n        name: \"cureEffect\",\r\n        family: \"cure222\"\r\n    },\r\n    weapon: 0 /* Sword */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/wind/qin.ts?");

/***/ }),

/***/ "./src/numerics/character/data/wind/shatang.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/character/data/wind/shatang.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"shatang\", \"砂糖\", \"sucrose\"],\r\n    life: [775, 1991, 2570, 3850, 4261, 4901, 5450, 6090, 6501, 7141, 7552, 8192, 8604, 9244],\r\n    attack: [14, 37, 47, 71, 78, 90, 100, 112, 120, 131, 139, 151, 158, 170],\r\n    defend: [59, 151, 195, 293, 324, 373, 414, 463, 494, 543, 574, 623, 654, 703],\r\n    secondary: {\r\n        name: \"windBonus\",\r\n        family: \"bonus240\"\r\n    },\r\n    weapon: 1 /* Book */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/wind/shatang.ts?");

/***/ }),

/***/ "./src/numerics/character/data/wind/wendi.ts":
/*!***************************************************!*\
  !*** ./src/numerics/character/data/wind/wendi.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"wendi\", \"温迪\", \"venti\"],\r\n    life: [820, 2127, 2830, 4234, 4734, 5446, 6112, 6832, 7331, 8058, 8557, 9292, 9791, 10531],\r\n    attack: [20, 53, 71, 106, 118, 136, 153, 171, 183, 201, 214, 232, 245, 263],\r\n    defend: [52, 135, 180, 269, 301, 346, 388, 434, 465, 512, 543, 590, 622, 669],\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge320\"\r\n    },\r\n    weapon: 2 /* Bow */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/wind/wendi.ts?");

/***/ }),

/***/ "./src/numerics/character/data/wind/xiao.ts":
/*!**************************************************!*\
  !*** ./src/numerics/character/data/wind/xiao.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xiao\", \"魈\"],\r\n    life: [991, 2572, 3422, 5120, 5724, 6586, 7391, 8262, 8866, 9744, 10348, 11236, 11840, 12736],\r\n    attack: [27, 71, 94, 140, 157, 181, 203, 227, 243, 267, 284, 308, 325, 349],\r\n    defend: [62, 161, 215, 321, 359, 413, 464, 519, 556, 612, 649, 705, 743, 799],\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr192\"\r\n    },\r\n    weapon: 3 /* Stick */,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/wind/xiao.ts?");

/***/ }),

/***/ "./src/numerics/preset/char_attack.ts":
/*!********************************************!*\
  !*** ./src/numerics/preset/char_attack.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet atk240 = [0, 0.06, 0.12, 0.12, 0.18, 0.24];\r\nexports.default = {\r\n    atk240,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/char_attack.ts?");

/***/ }),

/***/ "./src/numerics/preset/char_bonus.ts":
/*!*******************************************!*\
  !*** ./src/numerics/preset/char_bonus.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet bonus240 = [0, 0.06, 0.12, 0.12, 0.18, 0.24];\r\nlet bonus288 = [0, 0.072, 0.144, 0.144, 0.216, 0.288];\r\nlet bonus300 = [0, 0.75, 0.15, 0.15, 0.225, 0.3];\r\nexports.default = {\r\n    bonus240,\r\n    bonus288,\r\n    bonus300,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/char_bonus.ts?");

/***/ }),

/***/ "./src/numerics/preset/char_critical.ts":
/*!**********************************************!*\
  !*** ./src/numerics/preset/char_critical.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet cr192 = [0, 0.048, 0.096, 0.096, 0.144, 0.192];\r\nexports.default = {\r\n    cr192,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/char_critical.ts?");

/***/ }),

/***/ "./src/numerics/preset/char_critical_damage.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/preset/char_critical_damage.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet cd384 = [0, 0.096, 0.192, 0.192, 0.288, 0.384];\r\nexports.default = {\r\n    cd384,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/char_critical_damage.ts?");

/***/ }),

/***/ "./src/numerics/preset/char_cure.ts":
/*!******************************************!*\
  !*** ./src/numerics/preset/char_cure.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet cure222 = [0, 0.055, 0.111, 0.111, 0.166, 0.222];\r\nexports.default = {\r\n    cure222,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/char_cure.ts?");

/***/ }),

/***/ "./src/numerics/preset/char_defend.ts":
/*!********************************************!*\
  !*** ./src/numerics/preset/char_defend.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet def300 = [0, 0.075, 0.15, 0.15, 0.225, 0.3];\r\nexports.default = {\r\n    def300,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/char_defend.ts?");

/***/ }),

/***/ "./src/numerics/preset/char_em.ts":
/*!****************************************!*\
  !*** ./src/numerics/preset/char_em.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet em96 = [0, 24, 48, 48, 72, 96];\r\nexports.default = {\r\n    em96,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/char_em.ts?");

/***/ }),

/***/ "./src/numerics/preset/char_hp.ts":
/*!****************************************!*\
  !*** ./src/numerics/preset/char_hp.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet hp240 = [0, 0.06, 0.12, 0.12, 0.18, 0.24];\r\nexports.default = {\r\n    hp240,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/char_hp.ts?");

/***/ }),

/***/ "./src/numerics/preset/char_recharge.ts":
/*!**********************************************!*\
  !*** ./src/numerics/preset/char_recharge.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet recharge267 = [0, 0.067, 0.133, 0.133, 0.2, 0.267];\r\nlet recharge320 = [0, 0.08, 0.16, 0.16, 0.24, 0.32];\r\nexports.default = {\r\n    recharge267,\r\n    recharge320,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/char_recharge.ts?");

/***/ }),

/***/ "./src/numerics/preset/common.ts":
/*!***************************************!*\
  !*** ./src/numerics/preset/common.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getCharSpecial = exports.getWeaponSpecial = exports.getBaseValue = void 0;\r\nfunction getBaseValue(family, level, ascend) {\r\n    if (!family) {\r\n        throw \"family not exist\";\r\n    }\r\n    if (level < 1) {\r\n        throw \"level < 1\";\r\n    }\r\n    if (level === 1) {\r\n        return family[0];\r\n    }\r\n    let temp = [1, 20, 40, 50, 60, 70, 80, 90];\r\n    let index = 0;\r\n    while (index < temp.length && temp[index] < level) {\r\n        index++;\r\n    }\r\n    if (temp[index] === level) {\r\n        return family[index * 2 + (ascend ? 0 : -1)];\r\n    }\r\n    let lowerValue = family[(index - 1) * 2];\r\n    let upperValue = family[index * 2 - 1];\r\n    return (upperValue - lowerValue) / (temp[index] - temp[index - 1]) * (level - temp[index - 1]) + lowerValue;\r\n}\r\nexports.getBaseValue = getBaseValue;\r\nfunction getWeaponSpecial(family, level) {\r\n    if (level === 1) {\r\n        return family[0];\r\n    }\r\n    let temp = [1, 20, 40, 50, 60, 70, 80, 90];\r\n    let index = 0;\r\n    while (index < temp.length && temp[index] < level) {\r\n        index++;\r\n    }\r\n    if (level === temp[index]) {\r\n        return family[index];\r\n    }\r\n    return family[index - 1];\r\n}\r\nexports.getWeaponSpecial = getWeaponSpecial;\r\nfunction getCharSpecial(family, level, ascend) {\r\n    if (level < 20 || (level === 20 && !ascend)) {\r\n        return 0;\r\n    }\r\n    let temp = [20, 40, 50, 60, 70, 80, 90];\r\n    let index = 0;\r\n    while (index < temp.length && temp[index] < level) {\r\n        index++;\r\n    }\r\n    if (temp[index] === level && ascend) {\r\n        return family[index];\r\n    }\r\n    return family[index - 1];\r\n}\r\nexports.getCharSpecial = getCharSpecial;\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/common.ts?");

/***/ }),

/***/ "./src/numerics/preset/get_attribute.ts":
/*!**********************************************!*\
  !*** ./src/numerics/preset/get_attribute.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getWeaponBaseAtk = exports.getWeaponSecondary = exports.getCharacterSecondary = void 0;\r\nconst char_attack_1 = __webpack_require__(/*! ./char_attack */ \"./src/numerics/preset/char_attack.ts\");\r\nconst char_bonus_1 = __webpack_require__(/*! ./char_bonus */ \"./src/numerics/preset/char_bonus.ts\");\r\nconst char_critical_damage_1 = __webpack_require__(/*! ./char_critical_damage */ \"./src/numerics/preset/char_critical_damage.ts\");\r\nconst char_critical_1 = __webpack_require__(/*! ./char_critical */ \"./src/numerics/preset/char_critical.ts\");\r\nconst char_cure_1 = __webpack_require__(/*! ./char_cure */ \"./src/numerics/preset/char_cure.ts\");\r\nconst char_defend_1 = __webpack_require__(/*! ./char_defend */ \"./src/numerics/preset/char_defend.ts\");\r\nconst char_em_1 = __webpack_require__(/*! ./char_em */ \"./src/numerics/preset/char_em.ts\");\r\nconst char_hp_1 = __webpack_require__(/*! ./char_hp */ \"./src/numerics/preset/char_hp.ts\");\r\nconst char_recharge_1 = __webpack_require__(/*! ./char_recharge */ \"./src/numerics/preset/char_recharge.ts\");\r\nconst weapon_attack_1 = __webpack_require__(/*! ./weapon_attack */ \"./src/numerics/preset/weapon_attack.ts\");\r\nconst weapon_critical_damage_1 = __webpack_require__(/*! ./weapon_critical_damage */ \"./src/numerics/preset/weapon_critical_damage.ts\");\r\nconst weapon_critical_1 = __webpack_require__(/*! ./weapon_critical */ \"./src/numerics/preset/weapon_critical.ts\");\r\nconst weapon_defend_1 = __webpack_require__(/*! ./weapon_defend */ \"./src/numerics/preset/weapon_defend.ts\");\r\nconst weapon_em_1 = __webpack_require__(/*! ./weapon_em */ \"./src/numerics/preset/weapon_em.ts\");\r\nconst weapon_hp_1 = __webpack_require__(/*! ./weapon_hp */ \"./src/numerics/preset/weapon_hp.ts\");\r\nconst weapon_physical_1 = __webpack_require__(/*! ./weapon_physical */ \"./src/numerics/preset/weapon_physical.ts\");\r\nconst weapon_recharge_1 = __webpack_require__(/*! ./weapon_recharge */ \"./src/numerics/preset/weapon_recharge.ts\");\r\nconst common_1 = __webpack_require__(/*! ./common */ \"./src/numerics/preset/common.ts\");\r\nconst weapon_base_attack_1 = __webpack_require__(/*! ./weapon_base_attack */ \"./src/numerics/preset/weapon_base_attack.ts\");\r\nlet charPresets = Object.assign({}, char_attack_1.default, char_bonus_1.default, char_critical_damage_1.default, char_critical_1.default, char_cure_1.default, char_defend_1.default, char_em_1.default, char_hp_1.default, char_recharge_1.default);\r\nlet weaponPresets = Object.assign({}, weapon_attack_1.default, weapon_critical_damage_1.default, weapon_critical_1.default, weapon_defend_1.default, weapon_em_1.default, weapon_hp_1.default, weapon_physical_1.default, weapon_recharge_1.default);\r\nfunction getCharacterSecondary(family, level, ascend) {\r\n    return common_1.getCharSpecial(charPresets[family], level, ascend);\r\n}\r\nexports.getCharacterSecondary = getCharacterSecondary;\r\nfunction getWeaponSecondary(family, level) {\r\n    return common_1.getWeaponSpecial(weaponPresets[family], level);\r\n}\r\nexports.getWeaponSecondary = getWeaponSecondary;\r\nfunction getWeaponBaseAtk(family, level, ascend) {\r\n    return common_1.getBaseValue(weapon_base_attack_1.default[family], level, ascend);\r\n}\r\nexports.getWeaponBaseAtk = getWeaponBaseAtk;\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/get_attribute.ts?");

/***/ }),

/***/ "./src/numerics/preset/weapon_attack.ts":
/*!**********************************************!*\
  !*** ./src/numerics/preset/weapon_attack.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet atk51 = [0.051, 0.09, 0.131, 0.152, 0.173, 0.193, 0.201, 0.221,];\r\nlet atk60 = [0.06, 0.106, 0.155, 0.179, 0.203, 0.227, 0.251, 0.276,];\r\nlet atk72 = [0.072, 0.127, 0.185, 0.214, 0.244, 0.273, 0.302, 0.331,];\r\nlet atk77 = [0.077, 0.135, 0.197, 0.228, 0.259, 0.29, 0.321, 0.352,];\r\nlet atk90 = [0.09, 0.159, 0.232, 0.268, 0.304, 0.341, 0.377, 0.413,];\r\nlet atk108 = [0.108, 0.191, 0.278, 0.322, 0.365, 0.409, 0.453, 0.496,];\r\nlet atk120 = [0.12, 0.212, 0.309, 0.357, 0.406, 0.454, 0.503, 0.551,];\r\nexports.default = {\r\n    atk51,\r\n    atk60,\r\n    atk72,\r\n    atk77,\r\n    atk90,\r\n    atk108,\r\n    atk120,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/weapon_attack.ts?");

/***/ }),

/***/ "./src/numerics/preset/weapon_base_attack.ts":
/*!***************************************************!*\
  !*** ./src/numerics/preset/weapon_base_attack.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet atk23 = [23, 56, 68, 102, 113, 130, 141, 158, 169, 185,];\r\nlet atk33 = [33, 80, 91, 139, 151, 174, 186, 209, 220, 243,];\r\nlet atk38 = [38, 86, 105, 151, 171, 193, 212, 234, 253, 274, 294, 314, 334, 354,];\r\nlet atk39 = [39, 94, 113, 169, 189, 216, 236, 263, 282, 309, 329, 355, 375, 401,];\r\nlet atk40 = [40, 102, 121, 187, 207, 239, 259, 292, 311, 344, 363, 396, 415, 448,];\r\nlet atk41 = [41, 99, 125, 184, 210, 238, 264, 293, 319, 347, 373, 401, 427, 454,];\r\nlet atk42 = [42, 109, 135, 205, 231, 266, 292, 327, 353, 388, 414, 449, 475, 510,];\r\nlet atk44 = [44, 119, 144, 226, 252, 293, 319, 361, 387, 429, 455, 497, 523, 565,];\r\nlet atk46 = [46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608,];\r\nlet atk48 = [48, 133, 164, 261, 292, 341, 373, 423, 455, 506, 537, 590, 621, 674,];\r\nexports.default = {\r\n    atk23,\r\n    atk33,\r\n    atk38,\r\n    atk39,\r\n    atk40,\r\n    atk41,\r\n    atk42,\r\n    atk44,\r\n    atk46,\r\n    atk48,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/weapon_base_attack.ts?");

/***/ }),

/***/ "./src/numerics/preset/weapon_critical.ts":
/*!************************************************!*\
  !*** ./src/numerics/preset/weapon_critical.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet cr34 = [0.034, 0.06, 0.088, 0.101, 0.115, 0.129, 0.142, 0.156,];\r\nlet cr48 = [0.048, 0.085, 0.124, 0.143, 0.162, 0.182, 0.201, 0.221,];\r\nlet cr51 = [0.051, 0.09, 0.131, 0.152, 0.173, 0.193, 0.201, 0.221,];\r\nlet cr60 = [0.06, 0.106, 0.155, 0.179, 0.203, 0.227, 0.251, 0.276,];\r\nlet cr68 = [0.068, 0.12, 0.175, 0.203, 0.23, 0.257, 0.285, 0.312,];\r\nlet cr72 = [0.072, 0.12, 0.185, 0.214, 0.244, 0.273, 0.302, 0.331,];\r\nlet cr80 = [0.08, 0.141, 0.206, 0.238, 0.271, 0.303, 0.335, 0.368,];\r\nlet cr96 = [0.096, 0.17, 0.247, 0.286, 0.325, 0.363, 0.402, 0.441];\r\nexports.default = {\r\n    cr34,\r\n    cr48,\r\n    cr51,\r\n    cr60,\r\n    cr68,\r\n    cr72,\r\n    cr80,\r\n    cr96,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/weapon_critical.ts?");

/***/ }),

/***/ "./src/numerics/preset/weapon_critical_damage.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/preset/weapon_critical_damage.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet cd68 = [0.068, 0.12, 0.175, 0.203, 0.23, 0.257, 0.285, 0.312,];\r\nlet cd80 = [0.08, 0.141, 0.206, 0.238, 0.271, 0.303, 0.335, 0.368,];\r\nlet cd102 = [0.102, 0.18, 0.263, 0.304, 0.345, 0.386, 0.427, 0.469,];\r\nlet cd120 = [0.12, 0.212, 0.31, 0.358, 0.406, 0.454, 0.502, 0.551,];\r\nlet cd144 = [0.144, 0.254, 0.371, 0.429, 0.487, 0.545, 0.603, 0.662];\r\nexports.default = {\r\n    cd68,\r\n    cd80,\r\n    cd102,\r\n    cd120,\r\n    cd144,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/weapon_critical_damage.ts?");

/***/ }),

/***/ "./src/numerics/preset/weapon_defend.ts":
/*!**********************************************!*\
  !*** ./src/numerics/preset/weapon_defend.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet def64 = [0.064, 0.113, 0.164, 0.19, 0.216, 0.241, 0.267, 0.293,];\r\nlet def96 = [0.096, 0.169, 0.246, 0.285, 0.323, 0.362, 0.401, 0.439,];\r\nlet def113 = [0.113, 0.199, 0.29, 0.335, 0.381, 0.426, 0.472, 0.517,];\r\nexports.default = {\r\n    def64,\r\n    def96,\r\n    def113,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/weapon_defend.ts?");

/***/ }),

/***/ "./src/numerics/preset/weapon_em.ts":
/*!******************************************!*\
  !*** ./src/numerics/preset/weapon_em.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet em20 = [20, 36, 53, 61, 69, 77, 85, 94,];\r\nlet em24 = [24, 42, 62, 71, 81, 91, 101, 110,];\r\nlet em31 = [31, 54, 79, 91, 104, 116, 128, 141,];\r\nlet em36 = [36, 64, 93, 107, 122, 136, 151, 165,];\r\nlet em41 = [41, 72, 105, 122, 138, 154, 171, 187,];\r\nlet em48 = [48, 85, 124, 143, 162, 182, 201, 221,];\r\nexports.default = {\r\n    em20,\r\n    em24,\r\n    em31,\r\n    em36,\r\n    em41,\r\n    em48,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/weapon_em.ts?");

/***/ }),

/***/ "./src/numerics/preset/weapon_hp.ts":
/*!******************************************!*\
  !*** ./src/numerics/preset/weapon_hp.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet hp77 = [0.077, 0.135, 0.197, 0.228, 0.259, 0.29, 0.321, 0.413,];\r\nlet hp90 = [0.09, 0.159, 0.232, 0.268, 0.304, 0.341, 0.377, 0.413,];\r\nlet hp102 = [0.102, 0.18, 0.263, 0.304, 0.345, 0.386, 0.427, 0.469,];\r\nexports.default = {\r\n    hp77,\r\n    hp90,\r\n    hp102,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/weapon_hp.ts?");

/***/ }),

/***/ "./src/numerics/preset/weapon_physical.ts":
/*!************************************************!*\
  !*** ./src/numerics/preset/weapon_physical.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet physical75 = [0.075, 0.133, 0.193, 0.224, 0.254, 0.284, 0.315, 0.345,];\r\nlet physical90 = [0.09, 0.159, 0.232, 0.268, 0.304, 0.341, 0.377, 0.413,];\r\nlet physical96 = [0.096, 0.169, 0.246, 0.265, 0.323, 0.362, 0.401, 0.439,];\r\nlet physical150 = [0.15, 0.265, 0.387, 0.447, 0.508, 0.568, 0.629, 0.69,];\r\nexports.default = {\r\n    physical75,\r\n    physical90,\r\n    physical96,\r\n    physical150,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/weapon_physical.ts?");

/***/ }),

/***/ "./src/numerics/preset/weapon_recharge.ts":
/*!************************************************!*\
  !*** ./src/numerics/preset/weapon_recharge.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nlet recharge67 = [0.067, 0.118, 0.172, 0.199, 0.226, 0.252, 0.279, 0.306,];\r\nlet recharge80 = [0.08, 0.141, 0.206, 0.238, 0.271, 0.303, 0.335, 0.368,];\r\nlet recharge85 = [0.085, 0.15, 0.219, 0.253, 0.288, 0.322, 0.356, 0.39,];\r\nlet recharge100 = [0.1, 0.177, 0.258, 0.298, 0.338, 0.379, 0.419, 0.459,];\r\nlet recharge113 = [0.113, 0.2, 0.292, 0.338, 0.383, 0.429, 0.475, 0.521,];\r\nlet recharge120 = [0.12, 0.212, 0.309, 0.357, 0.406, 0.454, 0.503, 0.551,];\r\nlet recharge133 = [0.133, 0.236, 0.343, 0.397, 0.451, 0.505, 0.559, 0.613,];\r\nexports.default = {\r\n    recharge67,\r\n    recharge80,\r\n    recharge85,\r\n    recharge100,\r\n    recharge113,\r\n    recharge120,\r\n    recharge133,\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/preset/weapon_recharge.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/chenshizhisuo.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/book/chenshizhisuo.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"chenshizhisuo\", \"尘世之锁\", \"memoryofdust\"],\r\n    baseAtkFamily: \"atk46\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk108\"\r\n    },\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let value = 0.05 * that.refine + 0.15;\r\n        attribute.shield += value;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/chenshizhisuo.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/feiyufaqiu.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/weapon/data/book/feiyufaqiu.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"feiyufaqiu\", \"翡玉法球\", \"emeraldord\"],\r\n    baseAtkFamily: \"atk40\",\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em20\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/feiyufaqiu.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/heiyanfeiyu.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/book/heiyanfeiyu.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"heiyanfeiyu\", \"黑岩绯玉\", \"blackcliffagate\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd120\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/heiyanfeiyu.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/jiajibaojue.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/book/jiajibaojue.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"jiajibaojue\", \"甲级宝珏\", \"twinnephrite\"],\r\n    baseAtkFamily: \"atk40\",\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr34\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/jiajibaojue.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/jilicanzhang.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/weapon/data/book/jilicanzhang.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"jilicanzhang\", \"祭礼残章\", \"scarificialfragments\"],\r\n    baseAtkFamily: \"atk41\",\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em48\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/jilicanzhang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/koudaimodaoshu.ts":
/*!*********************************************************!*\
  !*** ./src/numerics/weapon/data/book/koudaimodaoshu.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"koudaimodaoshu\", \"口袋魔导书\", \"pocketgrimoire\"],\r\n    baseAtkFamily: \"atk33\"\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/koudaimodaoshu.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/liulangyuezhang.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/book/liulangyuezhang.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"liulangyuezhang\", \"流浪乐章\", \"thewidsith\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd120\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/liulangyuezhang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/modaoxulun.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/weapon/data/book/modaoxulun.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"modaoxulun\", \"魔导绪论\", \"magicguide\"],\r\n    baseAtkFamily: \"atk38\",\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em41\",\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/modaoxulun.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/rendongzhiguo.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/book/rendongzhiguo.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"rendongzhiguo\", \"忍冬之果\", \"frostbearer\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk90\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/rendongzhiguo.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/shizuojinpo.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/book/shizuojinpo.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"shizuojinpo\", \"试作金珀\", \"prototypeamber\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"lifePercentage\",\r\n        family: \"hp90\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/shizuojinpo.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/sifengyuandian.ts":
/*!*********************************************************!*\
  !*** ./src/numerics/weapon/data/book/sifengyuandian.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"sifengyuandian\", \"四风原典\", \"lostprayertothesacredwinds\"],\r\n    baseAtkFamily: \"atk46\",\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr72\",\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/sifengyuandian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/taolongyingjietan.ts":
/*!************************************************************!*\
  !*** ./src/numerics/weapon/data/book/taolongyingjietan.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"taolongyingjietan\", \"讨龙英杰谭\", \"thrillingtalesofdragonslayers\"],\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"lifePercentage\",\r\n        family: \"hp77\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/taolongyingjietan.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/tiankongzhijuan.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/book/tiankongzhijuan.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"tiankongzhijuan\", \"天空之卷\", \"skywardatlas\"],\r\n    baseAtkFamily: \"atk48\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk72\"\r\n    },\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let value = that.refine * 0.03 + 0.09;\r\n        attribute.elementalBonus += value;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/tiankongzhijuan.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/wanguozhuhaitupu.ts":
/*!***********************************************************!*\
  !*** ./src/numerics/weapon/data/book/wanguozhuhaitupu.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"wanguozhuhaitupu\", \"万国诸海图谱\", \"mappamare\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em24\"\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/wanguozhuhaitupu.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/xialiriyue.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/weapon/data/book/xialiriyue.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xialiriyue\", \"匣里日月\", \"solarpearl\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr60\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/xialiriyue.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/xifengmidian.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/weapon/data/book/xifengmidian.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xifengmidian\", \"西风秘典\", \"favoniuscodes\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge100\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/xifengmidian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/xuetubiji.ts":
/*!****************************************************!*\
  !*** ./src/numerics/weapon/data/book/xuetubiji.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xuetubiji\", \"学徒笔记\", \"apprenticesnotes\"],\r\n    baseAtkFamily: \"atk23\"\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/xuetubiji.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/yishijiexingji.ts":
/*!*********************************************************!*\
  !*** ./src/numerics/weapon/data/book/yishijiexingji.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"yishijiexingji\", \"异世界行记\", \"otherworldystory\"],\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge85\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/yishijiexingji.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/zhaoxin.ts":
/*!**************************************************!*\
  !*** ./src/numerics/weapon/data/book/zhaoxin.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"zhaoxin\", \"昭心\", \"eyeofperception\"],\r\n    baseAtkFamily: \"atk41\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk120\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/zhaoxin.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/book/zongshimifalu.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/book/zongshimifalu.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"zongshimifalu\", \"宗室秘法录\", \"royalgrimoire\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk60\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/book/zongshimifalu.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/amosizhigong.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/bow/amosizhigong.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"amosizhigong\", \"阿莫斯之弓\", \"amosbow\"],\r\n    baseAtkFamily: \"atk46\",\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let percentage = that.refine * 0.03 + 0.09;\r\n        attribute.aBonus += percentage;\r\n        attribute.bBonus += percentage;\r\n    },\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk108\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/amosizhigong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/cangcuiliegong.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/bow/cangcuiliegong.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"cangcuiliegong\", \"苍翠猎弓\", \"theviridescenthunt\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr60\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/cangcuiliegong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/fanqugong.ts":
/*!***************************************************!*\
  !*** ./src/numerics/weapon/data/bow/fanqugong.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"fanqugong\", \"反曲弓\", \"recurvebow\"],\r\n    baseAtkFamily: \"atk38\",\r\n    secondary: {\r\n        name: \"lifePercentage\",\r\n        family: \"hp102\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/fanqugong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/ganglungong.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/weapon/data/bow/ganglungong.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"ganglungong\", \"钢轮弓\", \"compoundbow\"],\r\n    baseAtkFamily: \"atk41\",\r\n    secondary: {\r\n        name: \"physicalBonus\",\r\n        family: \"physical150\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/ganglungong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/gongcang.ts":
/*!**************************************************!*\
  !*** ./src/numerics/weapon/data/bow/gongcang.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"gongcang\", \"弓藏\", \"rust\"],\r\n    baseAtkFamily: \"atk42\",\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let value = 0.1 * that.refine + 0.3;\r\n        attribute.aBonus += value;\r\n        attribute.bBonus -= 0.1;\r\n    },\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk90\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/gongcang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/heiyanzhangong.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/bow/heiyanzhangong.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"heiyanzhangong\", \"黑岩战弓\", \"blackcliffwarbow\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd80\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/heiyanzhangong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/jiligong.ts":
/*!**************************************************!*\
  !*** ./src/numerics/weapon/data/bow/jiligong.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"jiligong\", \"祭礼弓\", \"sacrificialbow\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge67\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/jiligong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/juexian.ts":
/*!*************************************************!*\
  !*** ./src/numerics/weapon/data/bow/juexian.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"juexian\", \"绝弦\", \"thestringless\"],\r\n    baseAtkFamily: \"atk42\",\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let value = that.refine * 0.06 + 0.18;\r\n        attribute.eBonus += value;\r\n        attribute.qBonus += value;\r\n    },\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em36\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/juexian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/liegong.ts":
/*!*************************************************!*\
  !*** ./src/numerics/weapon/data/bow/liegong.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"liegong\", \"猎弓\", \"huntersbow\"],\r\n    baseAtkFamily: \"atk23\"\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/liegong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/liliandeliegong.ts":
/*!*********************************************************!*\
  !*** ./src/numerics/weapon/data/bow/liliandeliegong.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"liliandeliegong\", \"历练的猎弓\", \"seasonedhuntersbow\"],\r\n    baseAtkFamily: \"atk33\"\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/liliandeliegong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/shensheshouzhishi.ts":
/*!***********************************************************!*\
  !*** ./src/numerics/weapon/data/bow/shensheshouzhishi.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"shensheshouzhishi\", \"神射手之誓\", \"sharpshootersoath\"],\r\n    // effect: function (attribute: Attribute) {\r\n    //     let that = this as any as Weapon;\r\n    //     let percentage = that.refine * 0.06 + 0.18;\r\n    //     attribute.bonus += percentage;\r\n    // },\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd102\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/shensheshouzhishi.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/shizuodanyue.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/bow/shizuodanyue.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"shizuodanyue\", \"试作澹月\", \"prototypecrescent\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk90\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/shizuodanyue.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/tangong.ts":
/*!*************************************************!*\
  !*** ./src/numerics/weapon/data/bow/tangong.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"tangong\", \"弹弓\", \"slingshot\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        if (that.args.within03) {\r\n            let value = that.refine * 0.06 + 0.3;\r\n            attribute.bonus += value;\r\n        }\r\n        else {\r\n            attribute.bonus = Math.max(attribute.bonus - 0.1, 0);\r\n        }\r\n    },\r\n    baseAtkFamily: \"atk38\",\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr68\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/tangong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/tiankongzhiyi.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/weapon/data/bow/tiankongzhiyi.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"tiankongzhiyi\", \"天空之翼\", \"skywardharp\"],\r\n    baseAtkFamily: \"atk48\",\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let percentage = that.refine * 0.05 + 0.15;\r\n        attribute.criticalDamage += percentage;\r\n    },\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr48\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/tiankongzhiyi.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/xifengliegong.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/weapon/data/bow/xifengliegong.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xifengliegong\", \"西风猎弓\", \"favoniuswarbow\"],\r\n    baseAtkFamily: \"atk41\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge133\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/xifengliegong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/xinshi.ts":
/*!************************************************!*\
  !*** ./src/numerics/weapon/data/bow/xinshi.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"信使\", \"xinshi\", \"messenger\"],\r\n    baseAtkFamily: \"atk40\",\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd68\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/xinshi.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/yayugong.ts":
/*!**************************************************!*\
  !*** ./src/numerics/weapon/data/bow/yayugong.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"yayugong\", \"鸦羽弓\", \"ravenbow\"],\r\n    // effect: function (attribute: Attribute) {\r\n    //     let that = this as any as Weapon;\r\n    //     let percentage = that.refine * 0.03 + 0.09;\r\n    //     attribute.bonus += percentage;\r\n    // },\r\n    baseAtkFamily: \"atk40\",\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em20\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/yayugong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/bow/zongshichanggong.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/bow/zongshichanggong.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"zongshichanggong\", \"宗室长弓\", \"royalbow\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk90\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/bow/zongshichanggong.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/baiyingqiang.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/stick/baiyingqiang.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"baiyingqiang\", \"白缨枪\", \"whitetassel\"],\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr51\",\r\n    },\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let value = that.refine * 0.06 + 0.18;\r\n        attribute.aBonus += value;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/baiyingqiang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/guanhongzhishuo.ts":
/*!***********************************************************!*\
  !*** ./src/numerics/weapon/data/stick/guanhongzhishuo.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"guanhongzhishuo\", \"贯虹之槊\", \"vortexvanquisher\"],\r\n    baseAtkFamily: \"atk46\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk108\"\r\n    },\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let value = that.refine * 0.05 + 0.15;\r\n        attribute.shield += value;\r\n        // value = that.refine * 0.01 + 0.03;\r\n        // attribute.attackPercentage += attribute.attackBasic * value * 2.5;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/guanhongzhishuo.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/heiyanciqiang.ts":
/*!*********************************************************!*\
  !*** ./src/numerics/weapon/data/stick/heiyanciqiang.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"heiyanciqiang\", \"黑岩刺枪\", \"blackcliffpole\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd120\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/heiyanciqiang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/heiyingqiang.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/stick/heiyingqiang.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"heiyingqiang\", \"黑缨枪\", \"blacktassel\"],\r\n    baseAtkFamily: \"atk38\",\r\n    secondary: {\r\n        name: \"lifePercentage\",\r\n        family: \"hp102\"\r\n    },\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        if (that.args.slime) {\r\n            attribute.bonus += that.refine * 0.1 + 0.3;\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/heiyingqiang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/hepuyuan.ts":
/*!****************************************************!*\
  !*** ./src/numerics/weapon/data/stick/hepuyuan.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"hepuyuan\", \"和璞鸢\", \"primordialjadewingedspear\"],\r\n    baseAtkFamily: \"atk48\",\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr48\",\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/hepuyuan.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/humozhizhang.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/stick/humozhizhang.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"humozhizhang\", \"护摩之杖\", \"staffofhoma\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let percentage = that.refine * 0.05 + 0.15;\r\n        attribute.lifePercentage += attribute.lifeBasic * percentage;\r\n        percentage = that.refine * 0.002 + 0.006;\r\n        attribute.attackStatic += attribute.life() * percentage;\r\n        if (that.args.lifeBelow50) {\r\n            percentage = that.refine * 0.002 + 0.008;\r\n            attribute.attackStatic += attribute.life() * percentage;\r\n        }\r\n    },\r\n    baseAtkFamily: \"atk46\",\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd144\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/humozhizhang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/juedouzhiqiang.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/stick/juedouzhiqiang.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"juedouzhiqiang\", \"决斗之枪\", \"deathmatch\"],\r\n    baseAtkFamily: \"atk41\",\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr80\",\r\n    },\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        if (that.args.enemyAbove2) {\r\n            let percentage = that.refine * 0.04 + 0.12;\r\n            attribute.attackPercentage += attribute.attackBasic * percentage;\r\n            attribute.defendPercentage += attribute.defendBasic * percentage;\r\n        }\r\n        else {\r\n            let percentage = that.refine * 0.06 + 0.18;\r\n            attribute.attackPercentage += attribute.attackBasic * percentage;\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/juedouzhiqiang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/liuyuezhen.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/stick/liuyuezhen.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"liuyuezhen\", \"流月针\", \"crescentpike\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"physicalBonus\",\r\n        family: \"physical75\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/liuyuezhen.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/longjichangqiang.ts":
/*!************************************************************!*\
  !*** ./src/numerics/weapon/data/stick/longjichangqiang.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"longjichangqiang\", \"龙脊长枪\", \"dragonspinespear\"],\r\n    baseAtkFamily: \"atk41\",\r\n    secondary: {\r\n        name: \"physicalBonus\",\r\n        family: \"physical150\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/longjichangqiang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/qianyanchangqiang.ts":
/*!*************************************************************!*\
  !*** ./src/numerics/weapon/data/stick/qianyanchangqiang.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"qianyanchangqiang\", \"千岩长枪\", \"lithicspear\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let liyueCount = that.args.liyueCount || 0;\r\n        let percentage = that.refine * 0.01 + 0.06;\r\n        attribute.attackPercentage += attribute.attackBasic * percentage * liyueCount;\r\n        percentage = that.refine * 0.01 + 0.02;\r\n        attribute.crit(percentage * liyueCount);\r\n    },\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk60\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/qianyanchangqiang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/shizuoxinglian.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/stick/shizuoxinglian.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"shizuoxinglian\", \"试作星镰\", \"prototypestarglitter\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge100\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/shizuoxinglian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/tiankongzhiji.ts":
/*!*********************************************************!*\
  !*** ./src/numerics/weapon/data/stick/tiankongzhiji.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"tiankongzhiji\", \"天空之脊\", \"skywardspine\"],\r\n    baseAtkFamily: \"atk48\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge80\",\r\n    },\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let value = that.refine * 0.02 + 0.06;\r\n        attribute.crit(value);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/tiankongzhiji.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/tiejianqiang.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/stick/tiejianqiang.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"tiejianqiang\", \"铁尖枪\", \"ironpoint\"],\r\n    baseAtkFamily: \"atk33\",\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/tiejianqiang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/xialimiechen.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/stick/xialimiechen.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xialimiechen\", \"匣里灭辰\", \"dragonsbane\"],\r\n    baseAtkFamily: \"atk41\",\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em48\"\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/xialimiechen.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/xifengchangqiang.ts":
/*!************************************************************!*\
  !*** ./src/numerics/weapon/data/stick/xifengchangqiang.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xifengchangqiang\", \"西风长枪\", \"favoniuslance\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge67\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/xifengchangqiang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/xinshouchangqiang.ts":
/*!*************************************************************!*\
  !*** ./src/numerics/weapon/data/stick/xinshouchangqiang.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xinshouchangqiang\", \"新手长枪\", \"beginnersprotector\"],\r\n    baseAtkFamily: \"atk23\"\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/xinshouchangqiang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/yuemao.ts":
/*!**************************************************!*\
  !*** ./src/numerics/weapon/data/stick/yuemao.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"yuemao\", \"钺矛\", \"halberd\"],\r\n    baseAtkFamily: \"atk40\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk51\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/yuemao.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/stick/zongshilieqiang.ts":
/*!***********************************************************!*\
  !*** ./src/numerics/weapon/data/stick/zongshilieqiang.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"zongshilieqiang\", \"宗室猎枪\", \"royalspear\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk60\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/stick/zongshilieqiang.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/baitiedajian.ts":
/*!*********************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/baitiedajian.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"baitiedajian\", \"白铁大剑\", \"whiteirongreatsword\"],\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"defendPercentage\",\r\n        family: \"def96\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/baitiedajian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/baiyingjian.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/baiyingjian.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"baiyingjian\", \"白影剑\", \"whiteblind\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"defendPercentage\",\r\n        family: \"def113\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/baiyingjian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/chigujian.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/chigujian.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"chigujian\", \"螭骨剑\", \"serpentspine\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr60\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/chigujian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/feitiandayujian.ts":
/*!************************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/feitiandayujian.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"feitiandayujian\", \"飞天大御剑\", \"skyridergreatsword\"],\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"physicalBonus\",\r\n        family: \"physical96\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/feitiandayujian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/heiyanzhandao.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/heiyanzhandao.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"heiyanzhandao\", \"黑岩斩刀\", \"blackcliffslasher\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd120\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/heiyanzhandao.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/jilidajian.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/jilidajian.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"jilidajian\", \"祭礼大剑\", \"sacrificialgreatsword\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge67\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/jilidajian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/langdemolu.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/langdemolu.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"langdemolu\", \"狼的末路\", \"wolfsgravestone\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let percentage = that.refine * 0.05 + 0.15;\r\n        attribute.attackPercentage += attribute.attackBasic * percentage;\r\n    },\r\n    baseAtkFamily: \"atk46\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk108\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/langdemolu.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/muyulongxiedejian.ts":
/*!**************************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/muyulongxiedejian.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"muyulongxiedejian\", \"沐浴龙血的剑\", \"bloodtaintedgreatsword\"],\r\n    baseAtkFamily: \"atk38\",\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em41\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/muyulongxiedejian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/qianyangujian.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/qianyangujian.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"qianyangujian\", \"千岩古剑\", \"lithicblade\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let liyueCount = that.args.liyueCount || 0;\r\n        let percentage = that.refine * 0.01 + 0.06;\r\n        attribute.attackPercentage += attribute.attackBasic * percentage * liyueCount;\r\n        percentage = that.refine * 0.01 + 0.02;\r\n        attribute.crit(percentage * liyueCount);\r\n    },\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk90\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/qianyangujian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/shizuoguhua.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/shizuoguhua.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"shizuoguhua\", \"试作古华\", \"prototypearchaic\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk60\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/shizuoguhua.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/tiankongzhiao.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/tiankongzhiao.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"tiankongzhiao\", \"天空之傲\", \"skywardpride\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let value = that.refine * 0.02 + 0.06;\r\n        attribute.bonus += value;\r\n    },\r\n    baseAtkFamily: \"atk48\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge80\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/tiankongzhiao.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/tieyingkuojian.ts":
/*!***********************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/tieyingkuojian.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"tieyingkuojian\", \"铁影阔剑\", \"ferrousshadow\"],\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"lifePercentage\",\r\n        family: \"hp77\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/tieyingkuojian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/wugongzhijian.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/wugongzhijian.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"wugongzhijian\", \"无工之剑\", \"theunforged\"],\r\n    baseAtkFamily: \"atk46\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk108\"\r\n    },\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        attribute.shield += that.refine * 0.05 + 0.15;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/wugongzhijian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/xifengdajian.ts":
/*!*********************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/xifengdajian.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xifengdajian\", \"西风大剑\", \"favoniusgreatsword\"],\r\n    baseAtkFamily: \"atk41\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge133\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/xifengdajian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/xuezangdexingtin.ts":
/*!*************************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/xuezangdexingtin.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xuezangdexingyin\", \"雪葬的星银\", \"snowtombedstarsilver\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"physicalBonus\",\r\n        family: \"physical75\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/xuezangdexingtin.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/xunliandajian.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/xunliandajian.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xunliandajian\", \"训练大剑\", \"wastergreatsword\"],\r\n    baseAtkFamily: \"atk23\",\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/xunliandajian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/yilifuren.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/yilifuren.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"yilifuren\", \"以理服人\", \"debateclub\"],\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk77\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/yilifuren.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/yongbingzhongjian.ts":
/*!**************************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/yongbingzhongjian.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"yongbingzhongjian\", \"佣兵重剑\", \"oldmercspal\"],\r\n    baseAtkFamily: \"atk33\",\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/yongbingzhongjian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/yucai.ts":
/*!**************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/yucai.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"yucai\", \"雨裁\", \"rainslasher\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em36\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/yucai.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/zhongjian.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/zhongjian.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"zhongjian\", \"钟剑\", \"thebell\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"lifePercentage\",\r\n        family: \"hp90\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/zhongjian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword2/zongshidajian.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/sword2/zongshidajian.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"zongshidajian\", \"宗室大剑\", \"royalgreatsword\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk60\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword2/zongshidajian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/antiejian.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/weapon/data/sword/antiejian.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"antiejian\", \"暗铁剑\", \"darkironsword\"],\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em31\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/antiejian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/chihuyudao.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/sword/chihuyudao.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"chihuyudao\", \"吃虎鱼刀\", \"filletblade\"],\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk77\"\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/chihuyudao.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/dijian.ts":
/*!**************************************************!*\
  !*** ./src/numerics/weapon/data/sword/dijian.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"dijian\", \"笛剑\", \"theflute\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk90\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/dijian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/feitianyujian.ts":
/*!*********************************************************!*\
  !*** ./src/numerics/weapon/data/sword/feitianyujian.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"飞天御剑\", \"feitianyujian\", \"skyridersword\"],\r\n    baseAtkFamily: \"atk38\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge113\",\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/feitianyujian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/fengyingjian.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/sword/fengyingjian.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"fengyingjian\", \"风鹰剑\", \"aquilafavonia\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let percentage = that.refine * 0.05 + 0.15;\r\n        attribute.attackPercentage += attribute.attackBasic * percentage;\r\n    },\r\n    baseAtkFamily: \"atk48\",\r\n    secondary: {\r\n        name: \"physicalBonus\",\r\n        family: \"physical90\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/fengyingjian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/fuzhizhijian.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/sword/fuzhizhijian.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"fuzhizhijian\", \"腐殖之剑\", \"festeringdesire\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let percentage = that.refine * 0.015 + 0.045;\r\n        attribute.eCritical += percentage;\r\n        percentage = that.refine * 0.04 + 0.12;\r\n        attribute.eBonus += percentage;\r\n    },\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge100\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/fuzhizhijian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/heijian.ts":
/*!***************************************************!*\
  !*** ./src/numerics/weapon/data/sword/heijian.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"heijian\", \"黑剑\", \"theblacksword\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let percentage = that.refine * 0.05 + 0.15;\r\n        attribute.aBonus += percentage;\r\n        attribute.bBonus += percentage;\r\n    },\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr60\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/heijian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/heiyanchangjian.ts":
/*!***********************************************************!*\
  !*** ./src/numerics/weapon/data/sword/heiyanchangjian.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"heiyanchangjian\", \"黑岩长剑\", \"blackclifflongsword\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cr80\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/heiyanchangjian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/jianglinzhijian.ts":
/*!***********************************************************!*\
  !*** ./src/numerics/weapon/data/sword/jianglinzhijian.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"jianglinzhijian\", \"降临之剑\", \"swordofdecension\"],\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk77\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/jianglinzhijian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/jilijian.ts":
/*!****************************************************!*\
  !*** ./src/numerics/weapon/data/sword/jilijian.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"jilijian\", \"祭礼剑\", \"sacrificialsword\"],\r\n    baseAtkFamily: \"atk41\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge133\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/jilijian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/lengren.ts":
/*!***************************************************!*\
  !*** ./src/numerics/weapon/data/sword/lengren.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"lengren\", \"冷刃\", \"coolsteel\"],\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk77\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/lengren.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/limingshenjian.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/sword/limingshenjian.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"limingshenjian\", \"黎明神剑\", \"harbingerofdawn\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        if (that.args.lifeAbove90) {\r\n            let percentage = 0.035 * that.refine + 0.105;\r\n            attribute.crit(percentage);\r\n        }\r\n    },\r\n    baseAtkFamily: \"atk39\",\r\n    secondary: {\r\n        name: \"criticalDamage\",\r\n        family: \"cd102\"\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/limingshenjian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/lvxingjian.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/sword/lvxingjian.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"lvxingjian\", \"旅行剑\", \"travelershandysword\"],\r\n    baseAtkFamily: \"atk40\",\r\n    secondary: {\r\n        name: \"defendPercentage\",\r\n        family: \"def96\",\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/lvxingjian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/panyanjielv.ts":
/*!*******************************************************!*\
  !*** ./src/numerics/weapon/data/sword/panyanjielv.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"panyanjielv\", \"磐岩结绿\", \"primordialjadecutter\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let percentage = that.refine * 0.05 + 0.15;\r\n        attribute.lifePercentage += attribute.lifeBasic * percentage;\r\n        percentage = that.refine * 0.003 + 0.009;\r\n        attribute.attackPercentage += attribute.attackBasic * percentage;\r\n    },\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"critical\",\r\n        family: \"cr96\",\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/panyanjielv.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/shizuozhanyan.ts":
/*!*********************************************************!*\
  !*** ./src/numerics/weapon/data/sword/shizuozhanyan.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"shizuozhanyan\", \"试作斩岩\", \"prototyperancour\"],\r\n    baseAtkFamily: \"atk44\",\r\n    secondary: {\r\n        name: \"physicalBonus\",\r\n        family: \"physical75\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/shizuozhanyan.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/tiankongzhiren.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/sword/tiankongzhiren.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"tiankongzhiren\", \"天空之刃\", \"skywardblade\"],\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let percentage = that.refine * 0.01 + 0.03;\r\n        attribute.crit(percentage);\r\n    },\r\n    baseAtkFamily: \"atk46\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge120\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/tiankongzhiren.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/tiefengci.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/weapon/data/sword/tiefengci.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"tiefengci\", \"铁蜂刺\", \"ironsting\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"elementalMastery\",\r\n        family: \"em36\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/tiefengci.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/wufengjian.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/sword/wufengjian.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"wufengjian\", \"无锋剑\", \"dullblade\"],\r\n    baseAtkFamily: \"atk23\",\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/wufengjian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/xialilongyin.ts":
/*!********************************************************!*\
  !*** ./src/numerics/weapon/data/sword/xialilongyin.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xialilongyin\", \"匣里龙吟\", \"lionsroar\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk90\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/xialilongyin.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/xifengjian.ts":
/*!******************************************************!*\
  !*** ./src/numerics/weapon/data/sword/xifengjian.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"xifengjian\", \"西风剑\", \"favoniussword\"],\r\n    baseAtkFamily: \"atk41\",\r\n    secondary: {\r\n        name: \"recharge\",\r\n        family: \"recharge133\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/xifengjian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/yinjian.ts":
/*!***************************************************!*\
  !*** ./src/numerics/weapon/data/sword/yinjian.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"yinjian\", \"银剑\", \"silversword\"],\r\n    baseAtkFamily: \"atk33\",\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/yinjian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/zhuofengzhiren.ts":
/*!**********************************************************!*\
  !*** ./src/numerics/weapon/data/sword/zhuofengzhiren.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"zhuofengzhiren\", \"斫峰之刃\", \"summitshaper\"],\r\n    baseAtkFamily: \"atk46\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk108\"\r\n    },\r\n    effect: function (attribute) {\r\n        let that = this;\r\n        let percentage = that.refine * 0.05 + 0.15;\r\n        attribute.shield += percentage;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/zhuofengzhiren.ts?");

/***/ }),

/***/ "./src/numerics/weapon/data/sword/zongshichangjian.ts":
/*!************************************************************!*\
  !*** ./src/numerics/weapon/data/sword/zongshichangjian.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    alt: [\"zongshichangjian\", \"宗室长剑\", \"royallongsword\"],\r\n    baseAtkFamily: \"atk42\",\r\n    secondary: {\r\n        name: \"attackPercentage\",\r\n        family: \"atk90\"\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/sword/zongshichangjian.ts?");

/***/ }),

/***/ "./src/numerics/weapon/weapon.ts":
/*!***************************************!*\
  !*** ./src/numerics/weapon/weapon.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst data_1 = __webpack_require__(/*! ./data */ \"./src/numerics/weapon/data/index.js\");\r\nconst common_1 = __webpack_require__(/*! ../../common/common */ \"./src/common/common.ts\");\r\nconst get_attribute_1 = __webpack_require__(/*! ../preset/get_attribute */ \"./src/numerics/preset/get_attribute.ts\");\r\nclass Weapon {\r\n    constructor(name, level, ascend, refine, args) {\r\n        this.star = 0;\r\n        this.eng = \"\";\r\n        this.name = name;\r\n        this.ascend = ascend;\r\n        this.level = level;\r\n        this.refine = refine;\r\n        let temp = data_1.default(name);\r\n        this.effect = temp.effect || null;\r\n        this.baseAtk = get_attribute_1.getWeaponBaseAtk(temp.baseAtkFamily, level, ascend);\r\n        if (temp.secondary) {\r\n            this.secondary = {\r\n                name: temp.secondary.name,\r\n                value: get_attribute_1.getWeaponSecondary(temp.secondary.family, level)\r\n            };\r\n        }\r\n        else {\r\n            this.secondary = null;\r\n        }\r\n        this.args = args || {};\r\n    }\r\n    applyPrimary(attribute) {\r\n        common_1.applyPrimaryTag(attribute, \"attack\", this.baseAtk);\r\n    }\r\n    applySecondary(attribute) {\r\n        if (this.secondary) {\r\n            common_1.applySecondaryTag(attribute, this.secondary.name, this.secondary.value);\r\n        }\r\n    }\r\n    applyEffect(attribute) {\r\n        if (this.effect) {\r\n            this.effect(attribute);\r\n        }\r\n    }\r\n}\r\nexports.default = Weapon;\r\n\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/weapon.ts?");

/***/ }),

/***/ "./src/numerics/character/data/index.js":
/*!**********************************************!*\
  !*** ./src/numerics/character/data/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet nameMap = {};\r\nfunction nameHelper(characterData) {\r\n    // console.log(characterData);\r\n    for (let name of characterData.alt) {\r\n        nameMap[name] = characterData;\r\n    }\r\n}\r\n\r\nfunction importAll(r) {\r\n    for (let key of r.keys()) {\r\n        // console.log(key);\r\n        if (key.indexOf(\".d.ts\") != -1) {\r\n            continue;\r\n        }\r\n        nameHelper(r(key).default);\r\n    }\r\n}\r\n\r\nimportAll(__webpack_require__(\"./src/numerics/character/data sync recursive \\\\.ts$\"));\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(who) {\r\n    let item = nameMap[who];\r\n    if (!item) {\r\n        return null;\r\n    }\r\n\r\n    return item;\r\n}\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/index.js?");

/***/ }),

/***/ "./src/numerics/character/data sync recursive \\.ts$":
/*!*************************************************!*\
  !*** ./src/numerics/character/data/ sync \.ts$ ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./fire/anbo.ts\": \"./src/numerics/character/data/fire/anbo.ts\",\n\t\"./fire/bannite.ts\": \"./src/numerics/character/data/fire/bannite.ts\",\n\t\"./fire/diluke.ts\": \"./src/numerics/character/data/fire/diluke.ts\",\n\t\"./fire/hutao.ts\": \"./src/numerics/character/data/fire/hutao.ts\",\n\t\"./fire/keli.ts\": \"./src/numerics/character/data/fire/keli.ts\",\n\t\"./fire/xiangling.ts\": \"./src/numerics/character/data/fire/xiangling.ts\",\n\t\"./fire/xinyan.ts\": \"./src/numerics/character/data/fire/xinyan.ts\",\n\t\"./ice/chongyun.ts\": \"./src/numerics/character/data/ice/chongyun.ts\",\n\t\"./ice/diaona.ts\": \"./src/numerics/character/data/ice/diaona.ts\",\n\t\"./ice/ganyu.ts\": \"./src/numerics/character/data/ice/ganyu.ts\",\n\t\"./ice/kaiya.ts\": \"./src/numerics/character/data/ice/kaiya.ts\",\n\t\"./ice/qiqi.ts\": \"./src/numerics/character/data/ice/qiqi.ts\",\n\t\"./index.d.ts\": \"./src/numerics/character/data/index.d.ts\",\n\t\"./rock/abeiduo.ts\": \"./src/numerics/character/data/rock/abeiduo.ts\",\n\t\"./rock/me_rock.ts\": \"./src/numerics/character/data/rock/me_rock.ts\",\n\t\"./rock/ningguang.ts\": \"./src/numerics/character/data/rock/ningguang.ts\",\n\t\"./rock/nuoaier.ts\": \"./src/numerics/character/data/rock/nuoaier.ts\",\n\t\"./rock/zhongli.ts\": \"./src/numerics/character/data/rock/zhongli.ts\",\n\t\"./thunder/beidou.ts\": \"./src/numerics/character/data/thunder/beidou.ts\",\n\t\"./thunder/feixieer.ts\": \"./src/numerics/character/data/thunder/feixieer.ts\",\n\t\"./thunder/keqing.ts\": \"./src/numerics/character/data/thunder/keqing.ts\",\n\t\"./thunder/leize.ts\": \"./src/numerics/character/data/thunder/leize.ts\",\n\t\"./thunder/lisha.ts\": \"./src/numerics/character/data/thunder/lisha.ts\",\n\t\"./water/babala.ts\": \"./src/numerics/character/data/water/babala.ts\",\n\t\"./water/dadaliya.ts\": \"./src/numerics/character/data/water/dadaliya.ts\",\n\t\"./water/mona.ts\": \"./src/numerics/character/data/water/mona.ts\",\n\t\"./water/xingqiu.ts\": \"./src/numerics/character/data/water/xingqiu.ts\",\n\t\"./wind/me_wind.ts\": \"./src/numerics/character/data/wind/me_wind.ts\",\n\t\"./wind/qin.ts\": \"./src/numerics/character/data/wind/qin.ts\",\n\t\"./wind/shatang.ts\": \"./src/numerics/character/data/wind/shatang.ts\",\n\t\"./wind/wendi.ts\": \"./src/numerics/character/data/wind/wendi.ts\",\n\t\"./wind/xiao.ts\": \"./src/numerics/character/data/wind/xiao.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/numerics/character/data sync recursive \\\\.ts$\";\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/character/data/_sync_\\.ts$?");

/***/ }),

/***/ "./src/numerics/weapon/data/index.js":
/*!*******************************************!*\
  !*** ./src/numerics/weapon/data/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeaponData)\n/* harmony export */ });\nlet nameMap = {};\r\nfunction nameHelper(d) {\r\n    if (!d) {\r\n        return;\r\n    }\r\n    for (let name of d.alt || []) {\r\n        nameMap[name] = d;\r\n    }\r\n}\r\n\r\nfunction needImport(path) {\r\n    let count = 0;\r\n    for (let i = 0; i < path.length; i++) {\r\n        if (path[i] === \"/\" || path[i] === \"\\\\\") {\r\n            count++;\r\n        }\r\n    }\r\n\r\n    return count >= 2;\r\n}\r\n\r\nfunction importAll(r) {\r\n    for (let key of r.keys()) {\r\n        if (needImport(key)) {\r\n            nameHelper(r(key).default);\r\n        }\r\n    }\r\n}\r\n\r\nimportAll(__webpack_require__(\"./src/numerics/weapon/data sync recursive \\\\.ts$\"));\r\n\r\nfunction getWeaponData (name) {\r\n    let item = nameMap[name];\r\n    if (!item) {\r\n        throw `weapon ${name} not found`;\r\n    }\r\n\r\n    return item;\r\n}\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/index.js?");

/***/ }),

/***/ "./src/numerics/weapon/data sync recursive \\.ts$":
/*!**********************************************!*\
  !*** ./src/numerics/weapon/data/ sync \.ts$ ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./book/chenshizhisuo.ts\": \"./src/numerics/weapon/data/book/chenshizhisuo.ts\",\n\t\"./book/feiyufaqiu.ts\": \"./src/numerics/weapon/data/book/feiyufaqiu.ts\",\n\t\"./book/heiyanfeiyu.ts\": \"./src/numerics/weapon/data/book/heiyanfeiyu.ts\",\n\t\"./book/jiajibaojue.ts\": \"./src/numerics/weapon/data/book/jiajibaojue.ts\",\n\t\"./book/jilicanzhang.ts\": \"./src/numerics/weapon/data/book/jilicanzhang.ts\",\n\t\"./book/koudaimodaoshu.ts\": \"./src/numerics/weapon/data/book/koudaimodaoshu.ts\",\n\t\"./book/liulangyuezhang.ts\": \"./src/numerics/weapon/data/book/liulangyuezhang.ts\",\n\t\"./book/modaoxulun.ts\": \"./src/numerics/weapon/data/book/modaoxulun.ts\",\n\t\"./book/rendongzhiguo.ts\": \"./src/numerics/weapon/data/book/rendongzhiguo.ts\",\n\t\"./book/shizuojinpo.ts\": \"./src/numerics/weapon/data/book/shizuojinpo.ts\",\n\t\"./book/sifengyuandian.ts\": \"./src/numerics/weapon/data/book/sifengyuandian.ts\",\n\t\"./book/taolongyingjietan.ts\": \"./src/numerics/weapon/data/book/taolongyingjietan.ts\",\n\t\"./book/tiankongzhijuan.ts\": \"./src/numerics/weapon/data/book/tiankongzhijuan.ts\",\n\t\"./book/wanguozhuhaitupu.ts\": \"./src/numerics/weapon/data/book/wanguozhuhaitupu.ts\",\n\t\"./book/xialiriyue.ts\": \"./src/numerics/weapon/data/book/xialiriyue.ts\",\n\t\"./book/xifengmidian.ts\": \"./src/numerics/weapon/data/book/xifengmidian.ts\",\n\t\"./book/xuetubiji.ts\": \"./src/numerics/weapon/data/book/xuetubiji.ts\",\n\t\"./book/yishijiexingji.ts\": \"./src/numerics/weapon/data/book/yishijiexingji.ts\",\n\t\"./book/zhaoxin.ts\": \"./src/numerics/weapon/data/book/zhaoxin.ts\",\n\t\"./book/zongshimifalu.ts\": \"./src/numerics/weapon/data/book/zongshimifalu.ts\",\n\t\"./bow/amosizhigong.ts\": \"./src/numerics/weapon/data/bow/amosizhigong.ts\",\n\t\"./bow/cangcuiliegong.ts\": \"./src/numerics/weapon/data/bow/cangcuiliegong.ts\",\n\t\"./bow/fanqugong.ts\": \"./src/numerics/weapon/data/bow/fanqugong.ts\",\n\t\"./bow/ganglungong.ts\": \"./src/numerics/weapon/data/bow/ganglungong.ts\",\n\t\"./bow/gongcang.ts\": \"./src/numerics/weapon/data/bow/gongcang.ts\",\n\t\"./bow/heiyanzhangong.ts\": \"./src/numerics/weapon/data/bow/heiyanzhangong.ts\",\n\t\"./bow/jiligong.ts\": \"./src/numerics/weapon/data/bow/jiligong.ts\",\n\t\"./bow/juexian.ts\": \"./src/numerics/weapon/data/bow/juexian.ts\",\n\t\"./bow/liegong.ts\": \"./src/numerics/weapon/data/bow/liegong.ts\",\n\t\"./bow/liliandeliegong.ts\": \"./src/numerics/weapon/data/bow/liliandeliegong.ts\",\n\t\"./bow/shensheshouzhishi.ts\": \"./src/numerics/weapon/data/bow/shensheshouzhishi.ts\",\n\t\"./bow/shizuodanyue.ts\": \"./src/numerics/weapon/data/bow/shizuodanyue.ts\",\n\t\"./bow/tangong.ts\": \"./src/numerics/weapon/data/bow/tangong.ts\",\n\t\"./bow/tiankongzhiyi.ts\": \"./src/numerics/weapon/data/bow/tiankongzhiyi.ts\",\n\t\"./bow/xifengliegong.ts\": \"./src/numerics/weapon/data/bow/xifengliegong.ts\",\n\t\"./bow/xinshi.ts\": \"./src/numerics/weapon/data/bow/xinshi.ts\",\n\t\"./bow/yayugong.ts\": \"./src/numerics/weapon/data/bow/yayugong.ts\",\n\t\"./bow/zongshichanggong.ts\": \"./src/numerics/weapon/data/bow/zongshichanggong.ts\",\n\t\"./index.d.ts\": \"./src/numerics/weapon/data/index.d.ts\",\n\t\"./stick/baiyingqiang.ts\": \"./src/numerics/weapon/data/stick/baiyingqiang.ts\",\n\t\"./stick/guanhongzhishuo.ts\": \"./src/numerics/weapon/data/stick/guanhongzhishuo.ts\",\n\t\"./stick/heiyanciqiang.ts\": \"./src/numerics/weapon/data/stick/heiyanciqiang.ts\",\n\t\"./stick/heiyingqiang.ts\": \"./src/numerics/weapon/data/stick/heiyingqiang.ts\",\n\t\"./stick/hepuyuan.ts\": \"./src/numerics/weapon/data/stick/hepuyuan.ts\",\n\t\"./stick/humozhizhang.ts\": \"./src/numerics/weapon/data/stick/humozhizhang.ts\",\n\t\"./stick/juedouzhiqiang.ts\": \"./src/numerics/weapon/data/stick/juedouzhiqiang.ts\",\n\t\"./stick/liuyuezhen.ts\": \"./src/numerics/weapon/data/stick/liuyuezhen.ts\",\n\t\"./stick/longjichangqiang.ts\": \"./src/numerics/weapon/data/stick/longjichangqiang.ts\",\n\t\"./stick/qianyanchangqiang.ts\": \"./src/numerics/weapon/data/stick/qianyanchangqiang.ts\",\n\t\"./stick/shizuoxinglian.ts\": \"./src/numerics/weapon/data/stick/shizuoxinglian.ts\",\n\t\"./stick/tiankongzhiji.ts\": \"./src/numerics/weapon/data/stick/tiankongzhiji.ts\",\n\t\"./stick/tiejianqiang.ts\": \"./src/numerics/weapon/data/stick/tiejianqiang.ts\",\n\t\"./stick/xialimiechen.ts\": \"./src/numerics/weapon/data/stick/xialimiechen.ts\",\n\t\"./stick/xifengchangqiang.ts\": \"./src/numerics/weapon/data/stick/xifengchangqiang.ts\",\n\t\"./stick/xinshouchangqiang.ts\": \"./src/numerics/weapon/data/stick/xinshouchangqiang.ts\",\n\t\"./stick/yuemao.ts\": \"./src/numerics/weapon/data/stick/yuemao.ts\",\n\t\"./stick/zongshilieqiang.ts\": \"./src/numerics/weapon/data/stick/zongshilieqiang.ts\",\n\t\"./sword/antiejian.ts\": \"./src/numerics/weapon/data/sword/antiejian.ts\",\n\t\"./sword/chihuyudao.ts\": \"./src/numerics/weapon/data/sword/chihuyudao.ts\",\n\t\"./sword/dijian.ts\": \"./src/numerics/weapon/data/sword/dijian.ts\",\n\t\"./sword/feitianyujian.ts\": \"./src/numerics/weapon/data/sword/feitianyujian.ts\",\n\t\"./sword/fengyingjian.ts\": \"./src/numerics/weapon/data/sword/fengyingjian.ts\",\n\t\"./sword/fuzhizhijian.ts\": \"./src/numerics/weapon/data/sword/fuzhizhijian.ts\",\n\t\"./sword/heijian.ts\": \"./src/numerics/weapon/data/sword/heijian.ts\",\n\t\"./sword/heiyanchangjian.ts\": \"./src/numerics/weapon/data/sword/heiyanchangjian.ts\",\n\t\"./sword/jianglinzhijian.ts\": \"./src/numerics/weapon/data/sword/jianglinzhijian.ts\",\n\t\"./sword/jilijian.ts\": \"./src/numerics/weapon/data/sword/jilijian.ts\",\n\t\"./sword/lengren.ts\": \"./src/numerics/weapon/data/sword/lengren.ts\",\n\t\"./sword/limingshenjian.ts\": \"./src/numerics/weapon/data/sword/limingshenjian.ts\",\n\t\"./sword/lvxingjian.ts\": \"./src/numerics/weapon/data/sword/lvxingjian.ts\",\n\t\"./sword/panyanjielv.ts\": \"./src/numerics/weapon/data/sword/panyanjielv.ts\",\n\t\"./sword/shizuozhanyan.ts\": \"./src/numerics/weapon/data/sword/shizuozhanyan.ts\",\n\t\"./sword/tiankongzhiren.ts\": \"./src/numerics/weapon/data/sword/tiankongzhiren.ts\",\n\t\"./sword/tiefengci.ts\": \"./src/numerics/weapon/data/sword/tiefengci.ts\",\n\t\"./sword/wufengjian.ts\": \"./src/numerics/weapon/data/sword/wufengjian.ts\",\n\t\"./sword/xialilongyin.ts\": \"./src/numerics/weapon/data/sword/xialilongyin.ts\",\n\t\"./sword/xifengjian.ts\": \"./src/numerics/weapon/data/sword/xifengjian.ts\",\n\t\"./sword/yinjian.ts\": \"./src/numerics/weapon/data/sword/yinjian.ts\",\n\t\"./sword/zhuofengzhiren.ts\": \"./src/numerics/weapon/data/sword/zhuofengzhiren.ts\",\n\t\"./sword/zongshichangjian.ts\": \"./src/numerics/weapon/data/sword/zongshichangjian.ts\",\n\t\"./sword2/baitiedajian.ts\": \"./src/numerics/weapon/data/sword2/baitiedajian.ts\",\n\t\"./sword2/baiyingjian.ts\": \"./src/numerics/weapon/data/sword2/baiyingjian.ts\",\n\t\"./sword2/chigujian.ts\": \"./src/numerics/weapon/data/sword2/chigujian.ts\",\n\t\"./sword2/feitiandayujian.ts\": \"./src/numerics/weapon/data/sword2/feitiandayujian.ts\",\n\t\"./sword2/heiyanzhandao.ts\": \"./src/numerics/weapon/data/sword2/heiyanzhandao.ts\",\n\t\"./sword2/jilidajian.ts\": \"./src/numerics/weapon/data/sword2/jilidajian.ts\",\n\t\"./sword2/langdemolu.ts\": \"./src/numerics/weapon/data/sword2/langdemolu.ts\",\n\t\"./sword2/muyulongxiedejian.ts\": \"./src/numerics/weapon/data/sword2/muyulongxiedejian.ts\",\n\t\"./sword2/qianyangujian.ts\": \"./src/numerics/weapon/data/sword2/qianyangujian.ts\",\n\t\"./sword2/shizuoguhua.ts\": \"./src/numerics/weapon/data/sword2/shizuoguhua.ts\",\n\t\"./sword2/tiankongzhiao.ts\": \"./src/numerics/weapon/data/sword2/tiankongzhiao.ts\",\n\t\"./sword2/tieyingkuojian.ts\": \"./src/numerics/weapon/data/sword2/tieyingkuojian.ts\",\n\t\"./sword2/wugongzhijian.ts\": \"./src/numerics/weapon/data/sword2/wugongzhijian.ts\",\n\t\"./sword2/xifengdajian.ts\": \"./src/numerics/weapon/data/sword2/xifengdajian.ts\",\n\t\"./sword2/xuezangdexingtin.ts\": \"./src/numerics/weapon/data/sword2/xuezangdexingtin.ts\",\n\t\"./sword2/xunliandajian.ts\": \"./src/numerics/weapon/data/sword2/xunliandajian.ts\",\n\t\"./sword2/yilifuren.ts\": \"./src/numerics/weapon/data/sword2/yilifuren.ts\",\n\t\"./sword2/yongbingzhongjian.ts\": \"./src/numerics/weapon/data/sword2/yongbingzhongjian.ts\",\n\t\"./sword2/yucai.ts\": \"./src/numerics/weapon/data/sword2/yucai.ts\",\n\t\"./sword2/zhongjian.ts\": \"./src/numerics/weapon/data/sword2/zhongjian.ts\",\n\t\"./sword2/zongshidajian.ts\": \"./src/numerics/weapon/data/sword2/zongshidajian.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/numerics/weapon/data sync recursive \\\\.ts$\";\n\n//# sourceURL=webpack://genshinPanel/./src/numerics/weapon/data/_sync_\\.ts$?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});