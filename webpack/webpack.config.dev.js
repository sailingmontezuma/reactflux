var webpack = require('webpack');

module.exports = {
    devtool:'inline-source-map',
    entry:[
        'webpack-dev-server/client?http://localhost:8080',
        './client/app'
    ]
}




