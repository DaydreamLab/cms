let mix = require("laravel-mix");
const path = require("path");
require("laravel-mix-auto-extract");

const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve("resources/assets/admin/"),
            cps: path.resolve("resources/assets/admin/components/"),
            pages: path.resolve("resources/assets/admin/pages/"),
            layout: path.resolve("resources/assets/admin/layout/"),
            utils: path.resolve("resources/assets/admin/utils/"),
            router: path.resolve("resources/assets/admin/router/"),
            store: path.resolve("resources/assets/admin/store/"),
            directives: path.resolve("resources/assets/admin/directives/"),
            lang: path.resolve("resources/assets/admin/lang/"),
            configs: path.resolve("resources/assets/admin/configs/"),
            mixins: path.resolve("resources/assets/admin/mixins/")
        }
    },
    output: {
        publicPath: "/admin/",
        chunkFilename: mix.inProduction()
            ? "js/[name].[chunkhash].js"
            : "js/[name].js"
    },
    externals: {
        vue: "Vue",
        "vue-router": "VueRouter",
        vuex: "Vuex",
        axios: "axios",
        lodash: "_",
        "element-ui": "ELEMENT",
        "vue-i18n": "VueI18n"
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        // new SpriteLoaderPlugin()
    ]
});

mix.options({
    // Setup Autoprefixer
    postCss: [
        require("autoprefixer")()
        /**
         * Automatically create rtl css
         * applies styles based on the 'dir' attribute on <html></html>
         * eg: <html dir="ltr"></html>
         * experimental, broken
         */
        // require('postcss-rtl')()
    ],
    extractVueStyles: true,
    globalVueStyles: path.resolve("resources/assets/admin/sass/_variables.sass")
});

mix.js("resources/assets/admin/app.js", "public/admin/js").sass(
    "resources/assets/admin/sass/main.sass",
    "public/admin/css"
);

mix.copy(
    "ckeditor5-build-classic/build/ckeditor.js",
    "public/admin/js/ckeditor.js"
);

mix.autoExtract(); //auto extract vendor

mix.setResourceRoot("/admin/");
mix.setPublicPath("public/admin/");

mix.browserSync({
    proxy: {
        target: "http://daydreamlab-cms.com/dashboard/"
    }
});
