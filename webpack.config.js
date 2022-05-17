const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        "admin/js/main": './admin.js',
        "js/main": './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    }
};