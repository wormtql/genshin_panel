import Attribute from "./attribute";

export class AttributeConstraint {
    constructor(
        public from: string[],
        public to: string[],
        public f: (attribute: Attribute) => number,
    ) {

    }

    
}