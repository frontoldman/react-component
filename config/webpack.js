var path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../src/index.tsx')
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, use: ['awesome-typescript-loader']}
        ]
    }
}