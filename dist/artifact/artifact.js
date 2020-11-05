"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export class Artifact {
//     position: ArtifactType;
//     setName: ArtifactSet;
//     mainTag: TagType = {
//         tag: "attack1",
//         value: 0,
//     };
//     secondaryTags: TagType[] = [];
//     constructor(position: ArtifactType, setName: ArtifactSet) {
//         this.position = position;
//         this.setName = setName;
//     }
//     setPrimaryTag(tag: TagName, value: number): void {
//         this.mainTag = {
//             tag, value
//         };
//     }
//     addSecondaryTag(tag: TagName, value: number): void {
//         this.secondaryTags.push({
//             tag, value
//         });
//     }
//     private applySingle(attribute: Attribute, tag: TagType) {
//         const name = tag.tag;
//         const value = tag.value;
//         applySingle(attribute, name, value);
//     }
//     apply(attribute: Attribute): void {
//         this.applySingle(attribute, this.mainTag);
//         for (let i = 0; i < this.secondaryTags.length; i++) {
//             this.applySingle(attribute, this.secondaryTags[i]);
//         }
//     }
// }
