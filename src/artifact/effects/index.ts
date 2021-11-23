import Attribute from "../../attribute/attribute";
import Artifact from "../artifact";
import ArtifactSet from "../artifact_set";
import { ArtifactSetName, SET_COUNT } from "../artifact_type";
import Param from "../param";
import ApplyContext from "../../common/context";

import { default as adventurerApply } from "./adventurer";
import { default as archaicPetraApply } from "./archaic_petra";
import { default as berserkerApply } from "./berserker";
import { default as bloodStainedChivalryApply } from "./bloodstained_chivalry";
import { default as braveHeartApply } from "./brave_heart";
import { default as crimsonWitchApply } from "./crimson_witch";
import { default as defenderWillApply } from "./defender_will";
import { default as exileApply } from "./exile";
import { default as gamblerApply } from "./gambler";
import { default as gladiatorFinaleApply } from "./gladiator_finale";
import { default as instructorApply } from "./instructor";
import { default as lavaWalkerApply } from "./lava_walker";
import { default as luckyDogApply } from "./lucky_dog";
import { default as maidenBelovedApply } from "./maiden_beloved";
import { default as martialArtistApply } from "./martial_artist";
import { default as noblesseObligeApply } from "./noblesse_oblige";
import { default as prayersForDestinyApply } from "./prayers_for_destiny";
import { default as prayersForIlluminationApply } from "./prayers_for_illumination";
import { default as prayersForWisdomApply } from "./prayers_for_wisdom";
import { default as prayersToStringtimeApply } from "./prayers_to_springtime";
import { default as resolutionOfSojournersApply } from "./resolution_of_sojourner";
import { default as retracingBolideApply } from "./retracing_bolide";
import { default as scholarApply } from "./scholar";
import { default as thunderSmootherApply } from "./thunder_smoother";
import { default as thunderingFuryApply } from "./thundering_fury";
import { default as tinyMiracleApply } from "./tiny_miracle";
import { default as travelingDoctorApply } from "./traveling_doctor";
import { default as viridescentVenererApply } from "./viridescent_venerer";
import { default as wandererTroupeApply } from "./wanderer_troupe";
import { default as heartOfDepthApply } from "./heart_of_depth";
import { default as blizzardStrayerApply } from "./blizzard_strayer";
import { default as paleFlameApply } from "./pale_flame";
import { default as tenacityOfTheMillelithApply } from "./tenacity_of_the_millelith";
import { default as emblemOfSeveredFate } from "./emblem_of_severed_fate";
import { default as shimenawaReminiscence } from "./shimenawa_reminiscence";
import { default as huskOfOpulentDreams } from "./husk_of_opulent_dreams";
import { default as oceanHuedClam } from "./ocean_hued_clam";


type ApplyFunctionType = ((attribute: Attribute, ctx: ApplyContext, params: Param) => void) | null;
let applyFunctions: any = {};

applyFunctions["adventurer"] = adventurerApply;
applyFunctions["archaicPetra"] = archaicPetraApply;
applyFunctions["berserker"] = berserkerApply;
applyFunctions["bloodstainedChivalry"] = bloodStainedChivalryApply;
applyFunctions["braveHeart"] = braveHeartApply;
applyFunctions["crimsonWitch"] = crimsonWitchApply;
applyFunctions["defenderWill"] = defenderWillApply;
applyFunctions["exile"] = exileApply;
applyFunctions["gambler"] = gamblerApply;
applyFunctions["gladiatorFinale"] = gladiatorFinaleApply;
applyFunctions["instructor"] = instructorApply;
applyFunctions["lavaWalker"] = lavaWalkerApply;
applyFunctions["luckyDog"] = luckyDogApply;
applyFunctions["maidenBeloved"] = maidenBelovedApply;
applyFunctions["martialArtist"] = martialArtistApply;
applyFunctions["noblesseOblige"] = noblesseObligeApply;
applyFunctions["prayersForDestiny"] = prayersForDestinyApply;
applyFunctions["prayersForIllumination"] = prayersForIlluminationApply;
applyFunctions["prayersForWisdom"] = prayersForWisdomApply;
applyFunctions["prayersToSpringtime"] = prayersToStringtimeApply;
applyFunctions["resolutionOfSojourner"] = resolutionOfSojournersApply;
applyFunctions["retracingBolide"] = retracingBolideApply;
applyFunctions["scholar"] = scholarApply;
applyFunctions["thunderSmoother"] = thunderSmootherApply;
applyFunctions["thunderingFury"] = thunderingFuryApply;
applyFunctions["tinyMiracle"] = tinyMiracleApply;
applyFunctions["travelingDoctor"] = travelingDoctorApply;
applyFunctions["viridescentVenerer"] = viridescentVenererApply;
applyFunctions["wandererTroupe"] = wandererTroupeApply;
applyFunctions["heartOfDepth"] = heartOfDepthApply;
applyFunctions["blizzardStrayer"] = blizzardStrayerApply;
applyFunctions["paleFlame"] = paleFlameApply;
applyFunctions["tenacityOfTheMillelith"] = tenacityOfTheMillelithApply;
applyFunctions["emblemOfSeveredFate"] = emblemOfSeveredFate;
applyFunctions["shimenawaReminiscence"] = shimenawaReminiscence;
applyFunctions["huskOfOpulentDreams"] = huskOfOpulentDreams;
applyFunctions["oceanHuedClam"] = oceanHuedClam;


export default function apply(attribute: Attribute, ctx: ApplyContext, params: Param | undefined | null, artifacts: ArtifactSet) {
    let temp: any = {};
    let len = artifacts.length();

    params = params || {};

    for (let i = 0; i < len; i++) {
        let art = artifacts.get(i);

        let setName = art.setName;
        if (temp[setName]) {
            temp[setName]++;
        } else {
            temp[setName] = 1;
        }
    }

    for (let key in temp) {
        let count = temp[key];

        for(let i = 0; i < count; i++) {
            if (applyFunctions[key][i]) {
                applyFunctions[key][i](attribute, ctx, params);
            }
        }
    }
}