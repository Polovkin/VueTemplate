const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageMinPngquant = require('imagemin-pngquant');

module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            new ImageminPlugin({
                plugins: [
                    imageminMozjpeg({
                        quality: 85,
                    }),
                    imageMinPngquant({
                        quality: [0.65, 0.90],
                        speed: 4,
                    }),
                ]
            })
        ]
    },
    assetsDir: 'assets',
    productionSourceMap: false,

    css: {
        sourceMap: true,

        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/scss/core/global.scss";`
            },
        }
    }
}
