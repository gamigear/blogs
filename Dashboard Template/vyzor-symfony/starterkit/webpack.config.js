const Encore = require('@symfony/webpack-encore');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const fsExtra = require('fs-extra');
const path = require('path');
const packages = require('./package.json'); // To access dependencies

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // ... other Encore configuration options

    // Disable JavaScript minification
    .configureTerserPlugin((options) => {
        options.terserOptions = {
            compress: false,
            mangle: false,
            output: {
                beautify: true,
            },
        };
    })

    // Configure the CopyWebpackPlugin to copy the JavaScript files
    .addPlugin(new CopyWebpackPlugin({
      patterns: [
        { from: 'assets/js/main.js', to: 'js' },
        { from: 'assets/js/chat.js', to: 'js' },
        { from: 'assets/js/coming-soon.js', to: 'js' },
        { from: 'assets/js/two-step-verification.js', to: 'js' },
        { from: 'assets/js/show-password.js', to: 'js' },
        { from: 'assets/js/apex-github-data.js', to: 'js' },
        { from: 'assets/js/apexcharts-candlestick-seriesdata.js', to: 'js' },
        { from: 'assets/js/apexcharts-irregulardata.js', to: 'js' },
        { from: 'assets/js/apexcharts-stock-prices.js', to: 'js' },
        { from: 'assets/js/apexcharts-dayjs.js', to: 'js' },
        { from: 'assets/js/dataseries.js', to: 'js' },
        { from: 'assets/js/form-wizard.js', to: 'js' },
      ],
    }))
;

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or subdirectory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/app.js')

    // js file inculdes
    .addEntry('js/add-products', './assets/js/add-products.js')
    .addEntry('js/alerts', './assets/js/alerts.js')
    .addEntry('js/analytics-dashboard', './assets/js/analytics-dashboard.js')
    .addEntry('js/apexcharts-area', './assets/js/apexcharts-area.js')
    .addEntry('js/apexcharts-bar', './assets/js/apexcharts-bar.js')
    .addEntry('js/apexcharts-boxplot', './assets/js/apexcharts-boxplot.js')
    .addEntry('js/apexcharts-bubble', './assets/js/apexcharts-bubble.js')
    .addEntry('js/apexcharts-candlestick', './assets/js/apexcharts-candlestick.js')
    .addEntry('js/apexcharts-column', './assets/js/apexcharts-column.js')
    .addEntry('js/apexcharts-funnel', './assets/js/apexcharts-funnel.js')
    .addEntry('js/apexcharts-heatmap', './assets/js/apexcharts-heatmap.js')
    .addEntry('js/apexcharts-line', './assets/js/apexcharts-line.js')
    .addEntry('js/apexcharts-mixed', './assets/js/apexcharts-mixed.js')
    .addEntry('js/apexcharts-pie', './assets/js/apexcharts-pie.js')
    .addEntry('js/apexcharts-polararea', './assets/js/apexcharts-polararea.js')
    .addEntry('js/apexcharts-radar', './assets/js/apexcharts-radar.js')
    .addEntry('js/apexcharts-radialbar', './assets/js/apexcharts-radialbar.js')
    .addEntry('js/apexcharts-rangearea', './assets/js/apexcharts-rangearea.js')
    .addEntry('js/apexcharts-scatter', './assets/js/apexcharts-scatter.js')
    .addEntry('js/apexcharts-timeline', './assets/js/apexcharts-timeline.js')
    .addEntry('js/apexcharts-treemap', './assets/js/apexcharts-treemap.js')
    .addEntry('js/authentication-main', './assets/js/authentication-main.js')
    .addEntry('js/blog-create', './assets/js/blog-create.js')
    .addEntry('js/blog-details', './assets/js/blog-details.js')
    .addEntry('js/canada', './assets/js/canada.js')
    .addEntry('js/chartjs-charts', './assets/js/chartjs-charts.js')
    .addEntry('js/choices', './assets/js/choices.js')
    .addEntry('js/color-picker', './assets/js/color-picker.js')
    .addEntry('js/courses-dashboard', './assets/js/courses-dashboard.js')
    .addEntry('js/create-invoice', './assets/js/create-invoice.js')
    .addEntry('js/create-project', './assets/js/create-project.js')
    .addEntry('js/crm-companies', './assets/js/crm-companies.js')
    .addEntry('js/crm-contacts', './assets/js/crm-contacts.js')
    .addEntry('js/crm-dashboard', './assets/js/crm-dashboard.js')
    .addEntry('js/crm-deals', './assets/js/crm-deals.js')
    .addEntry('js/crm-leads', './assets/js/crm-leads.js')
    .addEntry('js/crypto-buy_sell', './assets/js/crypto-buy_sell.js')
    .addEntry('js/crypto-currency-exchange', './assets/js/crypto-currency-exchange.js')
    .addEntry('js/crypto-dashboard', './assets/js/crypto-dashboard.js')
    .addEntry('js/crypto-marketcap', './assets/js/crypto-marketcap.js')
    .addEntry('js/custom-switcher', './assets/js/custom-switcher.js')
    .addEntry('js/custom', './assets/js/custom.js')
    .addEntry('js/customers-list', './assets/js/customers-list.js')
    .addEntry('js/datatables', './assets/js/datatables.js')
    .addEntry('js/date&time_pickers', './assets/js/date&time_pickers.js')
    .addEntry('js/defaultmenu', './assets/js/defaultmenu.js')
    .addEntry('js/draggable-cards', './assets/js/draggable-cards.js')
    .addEntry('js/echarts', './assets/js/echarts.js')
    .addEntry('js/ecommerce-dashboard', './assets/js/ecommerce-dashboard.js')
    .addEntry('js/file-manager', './assets/js/file-manager.js')
    .addEntry('js/fileupload', './assets/js/fileupload.js')
    .addEntry('js/form-advanced', './assets/js/form-advanced.js')
    .addEntry('js/form-input-mask', './assets/js/form-input-mask.js')
    .addEntry('js/form-wizard-init', './assets/js/form-wizard-init.js')
    .addEntry('js/fullcalendar', './assets/js/fullcalendar.js')
    .addEntry('js/gallery', './assets/js/gallery.js')
    .addEntry('js/google-maps', './assets/js/google-maps.js')
    .addEntry('js/grid', './assets/js/grid.js')
    .addEntry('js/hrm-dashboard', './assets/js/hrm-dashboard.js')
    .addEntry('js/invoice-list', './assets/js/invoice-list.js')
    .addEntry('js/job-candidate-details', './assets/js/job-candidate-details.js')
    .addEntry('js/job-details', './assets/js/job-details.js')
    .addEntry('js/job-list', './assets/js/job-list.js')
    .addEntry('js/job-search-candidate', './assets/js/job-search-candidate.js')
    .addEntry('js/job-search', './assets/js/job-search.js')
    .addEntry('js/jobs-dashboard', './assets/js/jobs-dashboard.js')
    .addEntry('js/jobs-post', './assets/js/jobs-post.js')
    .addEntry('js/jsvectormap', './assets/js/jsvectormap.js')
    .addEntry('js/landing', './assets/js/landing.js')
    .addEntry('js/leaflet', './assets/js/leaflet.js')
    .addEntry('js/mail-settings', './assets/js/mail-settings.js')
    .addEntry('js/mail', './assets/js/mail.js')
    .addEntry('js/media-player', './assets/js/media-player.js')
    .addEntry('js/medical-dashboard', './assets/js/medical-dashboard.js')
    .addEntry('js/modal', './assets/js/modal.js')
    .addEntry('js/nft-create', './assets/js/nft-create.js')
    .addEntry('js/nft-dashboard', './assets/js/nft-dashboard.js')
    .addEntry('js/nft-details', './assets/js/nft-details.js')
    .addEntry('js/nouislider', './assets/js/nouislider.js')
    .addEntry('js/orders', './assets/js/orders.js')
    .addEntry('js/pos-dashboard', './assets/js/pos-dashboard.js')
    .addEntry('js/prism-custom', './assets/js/prism-custom.js')
    .addEntry('js/product-details', './assets/js/product-details.js')
    .addEntry('js/products', './assets/js/products.js')
    .addEntry('js/profile', './assets/js/profile.js')
    .addEntry('js/project-overview', './assets/js/project-overview.js')
    .addEntry('js/projects-dashboard', './assets/js/projects-dashboard.js')
    .addEntry('js/quill-editor', './assets/js/quill-editor.js')
    .addEntry('js/ratings', './assets/js/ratings.js')
    .addEntry('js/reviews', './assets/js/reviews.js')
    .addEntry('js/russia', './assets/js/russia.js')
    .addEntry('js/sales-dashboard', './assets/js/sales-dashboard.js')
    .addEntry('js/school-dashboard', './assets/js/school-dashboard.js')
    .addEntry('js/search-results', './assets/js/search-results.js')
    .addEntry('js/select2', './assets/js/select2.js')
    .addEntry('js/simplebar', './assets/js/simplebar.js')
    .addEntry('js/social-media-dashboard', './assets/js/social-media-dashboard.js')
    .addEntry('js/sortable', './assets/js/sortable.js')
    .addEntry('js/spain', './assets/js/spain.js')
    .addEntry('js/sticky', './assets/js/sticky.js')
    .addEntry('js/stocks-dashboard', './assets/js/stocks-dashboard.js')
    .addEntry('js/sweet-alerts', './assets/js/sweet-alerts.js')
    .addEntry('js/swiper', './assets/js/swiper.js')
    .addEntry('js/tagify', './assets/js/tagify.js')
    .addEntry('js/task-kanban-board', './assets/js/task-kanban-board.js')
    .addEntry('js/task-list', './assets/js/task-list.js')
    .addEntry('js/team', './assets/js/team.js')
    .addEntry('js/toasts', './assets/js/toasts.js')
    .addEntry('js/todolist', './assets/js/todolist.js')
    .addEntry('js/tour', './assets/js/tour.js')
    .addEntry('js/us-merc-en', './assets/js/us-merc-en.js')
    .addEntry('js/validation', './assets/js/validation.js')
    .addEntry('js/widgets', './assets/js/widgets.js')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()

    // Displays build status system notifications to the user
    // .enableBuildNotifications()

    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    // enables and configure @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.38';
    })

    .copyFiles({
      from: './assets/images',
      // optional target path, relative to the output dir
      to: 'images/[path][name].[ext]',

      // if versioning is enabled, add the file hash too
      //to: 'images/[path][name].[hash:8].[ext]',

      // only copy files matching this pattern
      //pattern: /\.(png|jpg|jpeg)$/
    })

    .copyFiles({
      from: './assets/icon-fonts',

      // optional target path, relative to the output dir
      to: 'icon-fonts/[path][name].[ext]',

      // if versioning is enabled, add the file hash too
      //to: 'plugins/[path][name].[ext]',

      // only copy files matching this pattern
      //pattern: /\.(js)$/
    })

    .copyFiles({
      from: './assets/video',

      // optional target path, relative to the output dir
      to: 'video/[path][name].[ext]',

      // if versioning is enabled, add the file hash too
      //to: 'plugins/[path][name].[ext]',

      // only copy files matching this pattern
      //pattern: /\.(js)$/
    })

    .copyFiles({
      from: './assets/audio',

      // optional target path, relative to the output dir
      to: 'audio/[path][name].[ext]',

      // if versioning is enabled, add the file hash too
      //to: 'plugins/[path][name].[ext]',

      // only copy files matching this pattern
      //pattern: /\.(js)$/
    })

    // enables Sass/SCSS support
    .enableSassLoader()

    Encore.addPlugin({
        apply: (compiler) => {
            compiler.hooks.afterEmit.tapPromise('CopyDistFilesPlugin', async (compilation) => {
                const destDir = path.join(__dirname, 'public/build/libs');
                await fsExtra.ensureDir(destDir);

                for (const dep of Object.keys(packages.dependencies)) {
                    try {
                        const srcDistPath = path.join(__dirname, 'node_modules', dep, 'dist');
                        const destDistPath = path.join(destDir, dep);

                        if (await fsExtra.pathExists(srcDistPath)) {
                            await fsExtra.copy(srcDistPath, destDistPath, {
                                overwrite: true,
                                recursive: true,
                            });
                        } else {
                            const srcPkgPath = path.join(__dirname, 'node_modules', dep);
                            const destPkgPath = path.join(destDir, dep);

                            if (await fsExtra.pathExists(srcPkgPath)) {
                                await fsExtra.copy(srcPkgPath, destPkgPath, {
                                    overwrite: true,
                                    recursive: true,
                                });
                            }
                        }
                    } catch (err) {
                        // You can log only errors if you want minimal feedback:
                        // console.error(`Error copying ${dep}:`, err.message);
                    }
                }

                // Optionally keep this summary or remove:
                // console.log('Dependency copy complete.');
            });
        }
    });

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
