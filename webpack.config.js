const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const modules = {
        js: {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ],
        },
        sass: {
            test: /\.scss$/,
            use: [
                {
                  loader: "style-loader"
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "sass-loader",
                }
            ],
        },
        stylusIsomorph: {
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: "css-loader",
                },
            ],
        }
    }

    if (env === 'production') {
        modules.sass.use.splice(2, 0, { loader: "postcss-loader" })
        modules.stylusIsomorph.use.splice(2, 0, { loader: "postcss-loader" })
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: { // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
            resources: path.resolve(__dirname, 'resources/'),
        },
    }

    return {
        modules,
        resolve,
    }
}