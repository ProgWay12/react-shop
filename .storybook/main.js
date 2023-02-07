const path = require("path");
module.exports = {
  "stories": ["../resources/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    webpackFinal: async (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, '../resources/')
        config.resolve.extensions = [...config.resolve.extensions, '.ts', '.js']
        config.module.rules.push({
            test: /\.scss$/,
            sideEffects: true,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        additionalData: '@import "~@/app/styles/utility/utils-storybook.scss";',
                    },
                },
            ],
        })
        return config
    },
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  },
  staticDirs: ['../']
};