module.exports = {
    entry: './main.js',
    devtool: 'source-map',
    mode: 'development',

    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }

};
//console.log(process.env.NODE_ENV);
