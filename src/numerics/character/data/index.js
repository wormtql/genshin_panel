let nameMap = {};
function nameHelper(characterData) {
    // console.log(characterData);
    for (let name of characterData.alt) {
        nameMap[name] = characterData;
    }
}

function importAll(r) {
    for (let key of r.keys()) {
        // console.log(key);
        if (key.indexOf(".d.ts") != -1) {
            continue;
        }
        nameHelper(r(key).default);
    }
}

importAll(require.context("./", true, /\.ts$/));

export default function (who) {
    let item = nameMap[who];
    if (!item) {
        return null;
    }

    return item;
}