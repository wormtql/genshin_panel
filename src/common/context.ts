import Character from "../numerics/character/character";
import Weapon from "../numerics/weapon/weapon";

export default interface ApplyContext {
    character: Character,
    weapon: Weapon,
}