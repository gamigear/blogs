<?php
/**
 * Routes configuration.
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different URLs to chosen controllers and their actions (functions).
 *
 * It's loaded within the context of `Application::routes()` method which
 * receives a `RouteBuilder` instance `$routes` as method argument.
 *
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */

use Cake\Routing\Route\DashedRoute;
use Cake\Routing\RouteBuilder;

/*
 * This file is loaded in the context of the `Application` class.
 * So you can use `$this` to reference the application class instance
 * if required.
 */
return function (RouteBuilder $routes): void {
    /*
     * The default class to use for all routes
     *
     * The following route classes are supplied with CakePHP and are appropriate
     * to set as the default:
     *
     * - Route
     * - InflectedRoute
     * - DashedRoute
     *
     * If no call is made to `Router::defaultRouteClass()`, the class used is
     * `Route` (`Cake\Routing\Route\Route`)
     *
     * Note that `Route` does not do any inflections on URLs which will result in
     * inconsistently cased URLs when used with `{plugin}`, `{controller}` and
     * `{action}` markers.
     */
    $routes->setRouteClass(DashedRoute::class);

    $routes->scope('/', function (RouteBuilder $builder): void {
        /*
         * Here, we are connecting '/' (base path) to a controller called 'Pages',
         * its action called 'display', and we pass a param to select the view file
         * to use (in this case, templates/Pages/home.php)...
         */
        // $builder->connect('/', ['controller' => 'Pages', 'action' => 'display', 'home']);
        
        $builder->connect('/', ['controller' => 'Pages', 'action' => 'home']);  // This will redirect '/' to '/index'
        $builder->connect('/home', ['controller' => 'Pages', 'action' => 'display', 'home']);
        $builder->connect('/accordions_collpase', ['controller' => 'Pages', 'action' => 'display', 'accordions_collpase']);
        $builder->connect('/add_product', ['controller' => 'Pages', 'action' => 'display', 'add_product']);
        $builder->connect('/alerts', ['controller' => 'Pages', 'action' => 'display', 'alerts']);
        $builder->connect('/apex_area_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_area_charts']);
        $builder->connect('/apex_bar_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_bar_charts']);
        $builder->connect('/apex_boxplot_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_boxplot_charts']);
        $builder->connect('/apex_bubble_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_bubble_charts']);
        $builder->connect('/apex_candlestick_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_candlestick_charts']);
        $builder->connect('/apex_column_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_column_charts']);
        $builder->connect('/apex_funnel_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_funnel_charts']);
        $builder->connect('/apex_heatmap_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_heatmap-charts']);
        $builder->connect('/apex_line_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_line_charts']);
        $builder->connect('/apex_mixed_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_mixed_charts']);
        $builder->connect('/apex_pie_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_pie_charts']);
        $builder->connect('/apex_polararea_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_polararea_charts']);
        $builder->connect('/apex_radar_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_radar_charts']);
        $builder->connect('/apex_radialbar_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_radialbar_charts']);
        $builder->connect('/apex_rangearea_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_rangearea_charts']);
        $builder->connect('/apex_scatter_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_scatter_charts']);
        $builder->connect('/apex_timeline_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_timeline_charts']);
        $builder->connect('/apex_treemap_charts', ['controller' => 'Pages', 'action' => 'display', 'apex_treemap_charts']);
        $builder->connect('/avatars', ['controller' => 'Pages', 'action' => 'display', 'avatars']);
        $builder->connect('/badge', ['controller' => 'Pages', 'action' => 'display', 'badge']);
        $builder->connect('/blog_create', ['controller' => 'Pages', 'action' => 'display', 'blog_create']);
        $builder->connect('/blog_details', ['controller' => 'Pages', 'action' => 'display', 'blog_details']);
        $builder->connect('/blog', ['controller' => 'Pages', 'action' => 'display', 'blog']);
        $builder->connect('/borders', ['controller' => 'Pages', 'action' => 'display', 'borders']);
        $builder->connect('/breadcrumb', ['controller' => 'Pages', 'action' => 'display', 'breadcrumb']);
        $builder->connect('/breakpoints', ['controller' => 'Pages', 'action' => 'display', 'breakpoints']);
        $builder->connect('/buttongroup', ['controller' => 'Pages', 'action' => 'display', 'buttongroup']);
        $builder->connect('/buttons', ['controller' => 'Pages', 'action' => 'display', 'buttons']);
        $builder->connect('/cards', ['controller' => 'Pages', 'action' => 'display', 'cards']);
        $builder->connect('/carousel', ['controller' => 'Pages', 'action' => 'display', 'carousel']);
        $builder->connect('/cart', ['controller' => 'Pages', 'action' => 'display', 'cart']);
        $builder->connect('/chartjs_charts', ['controller' => 'Pages', 'action' => 'display', 'chartjs_charts']);
        $builder->connect('/chat', ['controller' => 'Pages', 'action' => 'display', 'chat']);
        $builder->connect('/checkout', ['controller' => 'Pages', 'action' => 'display', 'checkout']);
        $builder->connect('/colors', ['controller' => 'Pages', 'action' => 'display', 'colors']);
        $builder->connect('/columns', ['controller' => 'Pages', 'action' => 'display', 'columns']);
        $builder->connect('/crm_companies', ['controller' => 'Pages', 'action' => 'display', 'crm_companies']);
        $builder->connect('/crm_contacts', ['controller' => 'Pages', 'action' => 'display', 'crm_contacts']);
        $builder->connect('/crm_deals', ['controller' => 'Pages', 'action' => 'display', 'crm_deals']);
        $builder->connect('/crm_leads', ['controller' => 'Pages', 'action' => 'display', 'crm_leads']);
        $builder->connect('/crypto_buy_sell', ['controller' => 'Pages', 'action' => 'display', 'crypto_buy_sell']);
        $builder->connect('/crypto_currency_exchange', ['controller' => 'Pages', 'action' => 'display', 'crypto_currency_exchange']);
        $builder->connect('/crypto_marketcap', ['controller' => 'Pages', 'action' => 'display', 'crypto_marketcap']);
        $builder->connect('/crypto_transactions', ['controller' => 'Pages', 'action' => 'display', 'crypto_transactions']);
        $builder->connect('/crypto_wallet', ['controller' => 'Pages', 'action' => 'display', 'crypto_wallet']);
        $builder->connect('/css_grid', ['controller' => 'Pages', 'action' => 'display', 'css_grid']);
        $builder->connect('/customers_list', ['controller' => 'Pages', 'action' => 'display', 'customers_list']);
        $builder->connect('/data_tables', ['controller' => 'Pages', 'action' => 'display', 'data_tables']);
        $builder->connect('/draggable_cards', ['controller' => 'Pages', 'action' => 'display', 'draggable_cards']);
        $builder->connect('/dropdowns', ['controller' => 'Pages', 'action' => 'display', 'dropdowns']);
        $builder->connect('/echarts', ['controller' => 'Pages', 'action' => 'display', 'echarts']);
        $builder->connect('/emptypage', ['controller' => 'Pages', 'action' => 'display', 'emptypage']);
        $builder->connect('/faqs', ['controller' => 'Pages', 'action' => 'display', 'faqs']);
        $builder->connect('/file_manager', ['controller' => 'Pages', 'action' => 'display', 'file_manager']);
        $builder->connect('/flex', ['controller' => 'Pages', 'action' => 'display', 'flex']);
        $builder->connect('/floating_labels', ['controller' => 'Pages', 'action' => 'display', 'floating_labels']);
        $builder->connect('/form_advanced', ['controller' => 'Pages', 'action' => 'display', 'form_advanced']);
        $builder->connect('/form_check_radios', ['controller' => 'Pages', 'action' => 'display', 'form_check_radios']);
        $builder->connect('/form_color_pickers', ['controller' => 'Pages', 'action' => 'display', 'form_color_pickers']);
        $builder->connect('/form_datetime_pickers', ['controller' => 'Pages', 'action' => 'display', 'form_datetime_pickers']);
        $builder->connect('/form_file_uploads', ['controller' => 'Pages', 'action' => 'display', 'form_file_uploads']);
        $builder->connect('/form_input_group', ['controller' => 'Pages', 'action' => 'display', 'form_input_group']);
        $builder->connect('/form_input_masks', ['controller' => 'Pages', 'action' => 'display', 'form_input_masks']);
        $builder->connect('/form_inputs', ['controller' => 'Pages', 'action' => 'display', 'form_inputs']);
        $builder->connect('/form_layout', ['controller' => 'Pages', 'action' => 'display', 'form_layout']);
        $builder->connect('/form_range', ['controller' => 'Pages', 'action' => 'display', 'form_range']);
        $builder->connect('/form_select', ['controller' => 'Pages', 'action' => 'display', 'form_select']);
        $builder->connect('/form_select2', ['controller' => 'Pages', 'action' => 'display', 'form_select2']);
        $builder->connect('/form_validation', ['controller' => 'Pages', 'action' => 'display', 'form_validation']);
        $builder->connect('/form_wizards', ['controller' => 'Pages', 'action' => 'display', 'form_wizards']);
        $builder->connect('/full_calendar', ['controller' => 'Pages', 'action' => 'display', 'full_calendar']);
        $builder->connect('/gallery', ['controller' => 'Pages', 'action' => 'display', 'gallery']);
        $builder->connect('/google_maps', ['controller' => 'Pages', 'action' => 'display', 'google_maps']);
        $builder->connect('/grid_tables', ['controller' => 'Pages', 'action' => 'display', 'grid_tables']);
        $builder->connect('/gutters', ['controller' => 'Pages', 'action' => 'display', 'gutters']);
        $builder->connect('/helpers', ['controller' => 'Pages', 'action' => 'display', 'helpers']);
        $builder->connect('/icons', ['controller' => 'Pages', 'action' => 'display', 'icons']);
        $builder->connect('/images_figures', ['controller' => 'Pages', 'action' => 'display', 'images_figures']);
        $builder->connect('/index', ['controller' => 'Pages', 'action' => 'display', 'index']);
        $builder->connect('/index1', ['controller' => 'Pages', 'action' => 'display', 'index1']);
        $builder->connect('/index2', ['controller' => 'Pages', 'action' => 'display', 'index2']);
        $builder->connect('/index3', ['controller' => 'Pages', 'action' => 'display', 'index3']);
        $builder->connect('/index4', ['controller' => 'Pages', 'action' => 'display', 'index4']);
        $builder->connect('/index5', ['controller' => 'Pages', 'action' => 'display', 'index5']);
        $builder->connect('/index6', ['controller' => 'Pages', 'action' => 'display', 'index6']);
        $builder->connect('/index7', ['controller' => 'Pages', 'action' => 'display', 'index7']);
        $builder->connect('/index8', ['controller' => 'Pages', 'action' => 'display', 'index8']);
        $builder->connect('/index9', ['controller' => 'Pages', 'action' => 'display', 'index9']);
        $builder->connect('/index10', ['controller' => 'Pages', 'action' => 'display', 'index10']);
        $builder->connect('/index11', ['controller' => 'Pages', 'action' => 'display', 'index11']);
        $builder->connect('/index12', ['controller' => 'Pages', 'action' => 'display', 'index12']);
        $builder->connect('/index13', ['controller' => 'Pages', 'action' => 'display', 'index13']);
        $builder->connect('/index14', ['controller' => 'Pages', 'action' => 'display', 'index14']);
        $builder->connect('/index15', ['controller' => 'Pages', 'action' => 'display', 'index15']);
        $builder->connect('/invoice_create', ['controller' => 'Pages', 'action' => 'display', 'invoice_create']);
        $builder->connect('/invoice_details', ['controller' => 'Pages', 'action' => 'display', 'invoice_details']);
        $builder->connect('/invoice_list', ['controller' => 'Pages', 'action' => 'display', 'invoice_list']);
        $builder->connect('/job_candidate_details', ['controller' => 'Pages', 'action' => 'display', 'job_candidate_details']);
        $builder->connect('/job_candidate_search', ['controller' => 'Pages', 'action' => 'display', 'job_candidate_search']);
        $builder->connect('/job_company_search', ['controller' => 'Pages', 'action' => 'display', 'job_company_search']);
        $builder->connect('/job_details', ['controller' => 'Pages', 'action' => 'display', 'job_details']);
        $builder->connect('/job_post', ['controller' => 'Pages', 'action' => 'display', 'job_post']);
        $builder->connect('/job_search', ['controller' => 'Pages', 'action' => 'display', 'job_search']);
        $builder->connect('/jobs_list', ['controller' => 'Pages', 'action' => 'display', 'jobs_list']);
        $builder->connect('/landing', ['controller' => 'Pages', 'action' => 'display', 'landing']);
        $builder->connect('/leaflet_maps', ['controller' => 'Pages', 'action' => 'display', 'leaflet_maps']);
        $builder->connect('/links_interactions', ['controller' => 'Pages', 'action' => 'display', 'links_interactions']);
        $builder->connect('/listgroup', ['controller' => 'Pages', 'action' => 'display', 'listgroup']);
        $builder->connect('/mail_settings', ['controller' => 'Pages', 'action' => 'display', 'mail_settings']);
        $builder->connect('/mail', ['controller' => 'Pages', 'action' => 'display', 'mail']);
        $builder->connect('/media_player', ['controller' => 'Pages', 'action' => 'display', 'media_player']);
        $builder->connect('/modals_closes', ['controller' => 'Pages', 'action' => 'display', 'modals_closes']);
        $builder->connect('/more', ['controller' => 'Pages', 'action' => 'display', 'more']);
        $builder->connect('/navbar', ['controller' => 'Pages', 'action' => 'display', 'navbar']);
        $builder->connect('/navs_tabs', ['controller' => 'Pages', 'action' => 'display', 'navs_tabs']);
        $builder->connect('/nft_create', ['controller' => 'Pages', 'action' => 'display', 'nft_create']);
        $builder->connect('/nft_details', ['controller' => 'Pages', 'action' => 'display', 'nft_details']);
        $builder->connect('/nft_live_auction', ['controller' => 'Pages', 'action' => 'display', 'nft_live_auction']);
        $builder->connect('/nft_marketplace', ['controller' => 'Pages', 'action' => 'display', 'nft_marketplace']);
        $builder->connect('/nft_wallet_integration', ['controller' => 'Pages', 'action' => 'display', 'nft_wallet_integration']);
        $builder->connect('/object_fit', ['controller' => 'Pages', 'action' => 'display', 'object_fit']);
        $builder->connect('/offcanvas', ['controller' => 'Pages', 'action' => 'display', 'offcanvas']);
        $builder->connect('/orders_details', ['controller' => 'Pages', 'action' => 'display', 'orders_details']);
        $builder->connect('/orders', ['controller' => 'Pages', 'action' => 'display', 'orders']);
        $builder->connect('/pagination', ['controller' => 'Pages', 'action' => 'display', 'pagination']);
        $builder->connect('/placeholders', ['controller' => 'Pages', 'action' => 'display', 'placeholders']);
        $builder->connect('/popovers', ['controller' => 'Pages', 'action' => 'display', 'popovers']);
        $builder->connect('/position', ['controller' => 'Pages', 'action' => 'display', 'position']);
        $builder->connect('/pricing', ['controller' => 'Pages', 'action' => 'display', 'pricing']);
        $builder->connect('/product_details', ['controller' => 'Pages', 'action' => 'display', 'product_details']);
        $builder->connect('/products', ['controller' => 'Pages', 'action' => 'display', 'products']);
        $builder->connect('/profile_settings', ['controller' => 'Pages', 'action' => 'display', 'profile_settings']);
        $builder->connect('/profile', ['controller' => 'Pages', 'action' => 'display', 'profile']);
        $builder->connect('/progress', ['controller' => 'Pages', 'action' => 'display', 'progress']);
        $builder->connect('/projects_create', ['controller' => 'Pages', 'action' => 'display', 'projects_create']);
        $builder->connect('/projects_list', ['controller' => 'Pages', 'action' => 'display', 'projects_list']);
        $builder->connect('/projects_overview', ['controller' => 'Pages', 'action' => 'display', 'projects_overview']);
        $builder->connect('/quill_editor', ['controller' => 'Pages', 'action' => 'display', 'quill_editor']);
        $builder->connect('/ratings', ['controller' => 'Pages', 'action' => 'display', 'ratings']);
        $builder->connect('/ribbons', ['controller' => 'Pages', 'action' => 'display', 'ribbons']);
        $builder->connect('/scrollspy', ['controller' => 'Pages', 'action' => 'display', 'scrollspy']);
        $builder->connect('/search_results', ['controller' => 'Pages', 'action' => 'display', 'search_results']);
        $builder->connect('/sortable_list', ['controller' => 'Pages', 'action' => 'display', 'sortable_list']);
        $builder->connect('/spinners', ['controller' => 'Pages', 'action' => 'display', 'spinners']);
        $builder->connect('/sweet_alerts', ['controller' => 'Pages', 'action' => 'display', 'sweet_alerts']);
        $builder->connect('/swiperjs', ['controller' => 'Pages', 'action' => 'display', 'swiperjs']);
        $builder->connect('/tables', ['controller' => 'Pages', 'action' => 'display', 'tables']);
        $builder->connect('/task_kanban_board', ['controller' => 'Pages', 'action' => 'display', 'task_kanban_board']);
        $builder->connect('/task_list_view', ['controller' => 'Pages', 'action' => 'display', 'task_list_view']);
        $builder->connect('/team', ['controller' => 'Pages', 'action' => 'display', 'team']);
        $builder->connect('/terms_conditions', ['controller' => 'Pages', 'action' => 'display', 'terms_conditions']);
        $builder->connect('/testimonials', ['controller' => 'Pages', 'action' => 'display', 'testimonials']);
        $builder->connect('/timeline', ['controller' => 'Pages', 'action' => 'display', 'timeline']);
        $builder->connect('/to_do_list', ['controller' => 'Pages', 'action' => 'display', 'to_do_list']);
        $builder->connect('/toasts', ['controller' => 'Pages', 'action' => 'display', 'toasts']);
        $builder->connect('/tooltips', ['controller' => 'Pages', 'action' => 'display', 'tooltips']);
        $builder->connect('/tour', ['controller' => 'Pages', 'action' => 'display', 'tour']);
        $builder->connect('/typography', ['controller' => 'Pages', 'action' => 'display', 'typography']);
        $builder->connect('/vector_maps', ['controller' => 'Pages', 'action' => 'display', 'vector_maps']);
        $builder->connect('/widgets', ['controller' => 'Pages', 'action' => 'display', 'widgets']);

        
        $builder->connect('/coming_soon', ['controller' => 'Error', 'action' => 'display', 'coming_soon']);
        $builder->connect('/create_password_basic', ['controller' => 'Error', 'action' => 'display', 'create_password_basic']);
        $builder->connect('/create_password_cover', ['controller' => 'Error', 'action' => 'display', 'create_password_cover']);
        $builder->connect('/lockscreen_basic', ['controller' => 'Error', 'action' => 'display', 'lockscreen_basic']);
        $builder->connect('/lockscreen_cover', ['controller' => 'Error', 'action' => 'display', 'lockscreen_cover']);
        $builder->connect('/reset_password_basic', ['controller' => 'Error', 'action' => 'display', 'reset_password_basic']);
        $builder->connect('/reset_password_cover', ['controller' => 'Error', 'action' => 'display', 'reset_password_cover']);
        $builder->connect('/sign_in_basic', ['controller' => 'Error', 'action' => 'display', 'sign_in_basic']);
        $builder->connect('/sign_in_cover', ['controller' => 'Error', 'action' => 'display', 'sign_in_cover']);
        $builder->connect('/sign_up_basic', ['controller' => 'Error', 'action' => 'display', 'sign_up_basic']);
        $builder->connect('/sign_up_cover', ['controller' => 'Error', 'action' => 'display', 'sign_up_cover']);
        $builder->connect('/error401', ['controller' => 'Error', 'action' => 'display', 'error401']);
        $builder->connect('/error404', ['controller' => 'Error', 'action' => 'display', 'error404']);
        $builder->connect('/error500', ['controller' => 'Error', 'action' => 'display', 'error500']);
        $builder->connect('/two_step_verification_basic', ['controller' => 'Error', 'action' => 'display', 'two_step_verification_basic']);
        $builder->connect('/two_step_verification_cover', ['controller' => 'Error', 'action' => 'display', 'two_step_verification_cover']);
        $builder->connect('/under_maintenance', ['controller' => 'Error', 'action' => 'display', 'under_maintenance']);

        /*
         * ...and connect the rest of 'Pages' controller's URLs.
         */
        $builder->connect('/pages/*', 'Pages::display');
        $builder->connect('/Error/*', 'Error::display');

        /*
         * Connect catchall routes for all controllers.
         *
         * The `fallbacks` method is a shortcut for
         *
         * ```
         * $builder->connect('/{controller}', ['action' => 'index']);
         * $builder->connect('/{controller}/{action}/*', []);
         * ```
         *
         * It is NOT recommended to use fallback routes after your initial prototyping phase!
         * See https://book.cakephp.org/5/en/development/routing.html#fallbacks-method for more information
         */
        $builder->fallbacks();
    });

    /*
     * If you need a different set of middleware or none at all,
     * open new scope and define routes there.
     *
     * ```
     * $routes->scope('/api', function (RouteBuilder $builder): void {
     *     // No $builder->applyMiddleware() here.
     *
     *     // Parse specified extensions from URLs
     *     // $builder->setExtensions(['json', 'xml']);
     *
     *     // Connect API actions here.
     * });
     * ```
     */
};
