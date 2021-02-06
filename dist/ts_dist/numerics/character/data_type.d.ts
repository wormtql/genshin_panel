import { SecondaryTagName } from "../../common/type";
export default interface CharacterDataType {
    alt: string[];
    life: number[];
    attack: number[];
    defend: number[];
    secondary: {
        name: SecondaryTagName;
        family: string;
    };
}
