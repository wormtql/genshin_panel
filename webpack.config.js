const path = require("path");
// const fs = require("fs");

// class DeleteTsPlugin {
//     apply(compiler) {
//         compiler.hooks.done.tap("Delete Typescript Result Plugin", (stats) => {
//             fs.rmdirSync(path.resolve(__dirname, "dist", "ts_dist"), {recursive: true})
//         })
//     }
// }

let mode = "development";

module.exports = {
    mode,
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "genshinPanel",
        libraryTarget: "umd",
        globalObject: "this",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules|(\.d\.ts$)/,
                // exclude: /node_modules/,
            },
            {
                test: /\.d\.ts$/,
                use: "ignore-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    // plugins: [new DeleteTsPlugin()]
    // optimization: {
    //     runtimeChunk: true,
    // }
}