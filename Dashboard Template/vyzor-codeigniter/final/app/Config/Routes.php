<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
// $routes->get('/', 'Home::index');

/******** Dashboards ********/
$routes->get('/', 'Dashboards::redirectToIndex');
$routes->get('/index', 'Dashboards::index');
$routes->get('/add-product', 'Dashboards::add_product');
$routes->get('/cart', 'Dashboards::cart');
$routes->get('/checkout', 'Dashboards::checkout');
$routes->get('/crm-companies', 'Dashboards::crm_companies');
$routes->get('/crm-contacts', 'Dashboards::crm_contacts');
$routes->get('/crm-deals', 'Dashboards::crm_deals');
$routes->get('/crm-leads', 'Dashboards::crm_leads');
$routes->get('/crypto-buy-sell', 'Dashboards::crypto_buy_sell');
$routes->get('/crypto-currency-exchange', 'Dashboards::crypto_currency_exchange');
$routes->get('/crypto-marketcap', 'Dashboards::crypto_marketcap');
$routes->get('/crypto-transactions', 'Dashboards::crypto_transactions');
$routes->get('/crypto-wallet', 'Dashboards::crypto_wallet');
$routes->get('/customers-list', 'Dashboards::customers_list');
$routes->get('/index1', 'Dashboards::index1');
$routes->get('/index2', 'Dashboards::index2');
$routes->get('/index3', 'Dashboards::index3');
$routes->get('/index4', 'Dashboards::index4');
$routes->get('/index5', 'Dashboards::index5');
$routes->get('/index6', 'Dashboards::index6');
$routes->get('/index7', 'Dashboards::index7');
$routes->get('/index8', 'Dashboards::index8');
$routes->get('/index9', 'Dashboards::index9');
$routes->get('/index10', 'Dashboards::index10');
$routes->get('/index11', 'Dashboards::index11');
$routes->get('/index12', 'Dashboards::index12');
$routes->get('/index13', 'Dashboards::index13');
$routes->get('/index14', 'Dashboards::index14');
$routes->get('/index15', 'Dashboards::index15');
$routes->get('/job-candidate-details', 'Dashboards::job_candidate_details');
$routes->get('/job-candidate-search', 'Dashboards::job_candidate_search');
$routes->get('/job-company-search', 'Dashboards::job_company_search');
$routes->get('/job-details', 'Dashboards::job_details');
$routes->get('/job-post', 'Dashboards::job_post');
$routes->get('/job-search', 'Dashboards::job_search');
$routes->get('/jobs-list', 'Dashboards::jobs_list');
$routes->get('/nft-create', 'Dashboards::nft_create');
$routes->get('/nft-details', 'Dashboards::nft_details');
$routes->get('/nft-live-auction', 'Dashboards::nft_live_auction');
$routes->get('/nft-marketplace', 'Dashboards::nft_marketplace');
$routes->get('/nft-wallet-integration', 'Dashboards::nft_wallet_integration');
$routes->get('/orders-details', 'Dashboards::orders_details');
$routes->get('/orders', 'Dashboards::orders');
$routes->get('/product-details', 'Dashboards::product_details');
$routes->get('/products', 'Dashboards::products');
$routes->get('/projects-create', 'Dashboards::projects_create');
$routes->get('/projects-list', 'Dashboards::projects_list');
$routes->get('/projects-overview', 'Dashboards::projects_overview');

/******** Applications ********/
$routes->get('/chat', 'Applications::chat');
$routes->get('/file-manager', 'Applications::file_manager');
$routes->get('/full-calendar', 'Applications::full_calendar');
$routes->get('/gallery', 'Applications::gallery');
$routes->get('/mail-settings', 'Applications::mail_settings');
$routes->get('/mail', 'Applications::mail');
$routes->get('/sweet-alerts', 'Applications::sweet_alerts');
$routes->get('/task-kanban-board', 'Applications::task_kanban_board');
$routes->get('/task-list-view', 'Applications::task_list_view');
$routes->get('/to-do-list', 'Applications::to_do_list');

/******** Charts ********/
$routes->get('/apex-area-charts', 'Charts::apex_area_charts');
$routes->get('/apex-bar-charts', 'Charts::apex_bar_charts');
$routes->get('/apex-boxplot-charts', 'Charts::apex_boxplot_charts');
$routes->get('/apex-bubble-charts', 'Charts::apex_bubble_charts');
$routes->get('/apex-candlestick-charts', 'Charts::apex_candlestick_charts');
$routes->get('/apex-column-charts', 'Charts::apex_column_charts');
$routes->get('/apex-funnel-charts', 'Charts::apex_funnel_charts');
$routes->get('/apex-heatmap-charts', 'Charts::apex_heatmap_charts');
$routes->get('/apex-line-charts', 'Charts::apex_line_charts');
$routes->get('/apex-mixed-charts', 'Charts::apex_mixed_charts');
$routes->get('/apex-pie-charts', 'Charts::apex_pie_charts');
$routes->get('/apex-polararea-charts', 'Charts::apex_polararea_charts');
$routes->get('/apex-radar-charts', 'Charts::apex_radar_charts');
$routes->get('/apex-radialbar-charts', 'Charts::apex_radialbar_charts');
$routes->get('/apex-rangearea-charts', 'Charts::apex_rangearea_charts');
$routes->get('/apex-scatter-charts', 'Charts::apex_scatter_charts');
$routes->get('/apex-timeline-charts', 'Charts::apex_timeline_charts');
$routes->get('/apex-treemap-charts', 'Charts::apex_treemap_charts');
$routes->get('/chartjs-charts', 'Charts::chartjs_charts');
$routes->get('/echarts', 'Charts::echarts');

/******** Charts ********/
$routes->get('/accordions-collpase', 'General::accordions_collpase');
$routes->get('/alerts', 'General::alerts');
$routes->get('/avatars', 'General::avatars');
$routes->get('/badge', 'General::badge');
$routes->get('/borders', 'General::borders');
$routes->get('/breadcrumb', 'General::breadcrumb');
$routes->get('/breakpoints', 'General::breakpoints');
$routes->get('/buttongroup', 'General::buttongroup');
$routes->get('/buttons', 'General::buttons');
$routes->get('/cards', 'General::cards');
$routes->get('/carousel', 'General::carousel');
$routes->get('/colors', 'General::colors');
$routes->get('/columns', 'General::columns');
$routes->get('/css-grid', 'General::css_grid');
$routes->get('/draggable-cards', 'General::draggable_cards');
$routes->get('/dropdowns', 'General::dropdowns');
$routes->get('/flex', 'General::flex');
$routes->get('/gutters', 'General::gutters');
$routes->get('/helpers', 'General::helpers');
$routes->get('/images-figures', 'General::images_figures');
$routes->get('/links-interactions', 'General::links_interactions');
$routes->get('/listgroup', 'General::listgroup');
$routes->get('/media-player', 'General::media_player');
$routes->get('/modals-closes', 'General::modals_closes');
$routes->get('/more', 'General::more');
$routes->get('/navbar', 'General::navbar');
$routes->get('/navs-tabs', 'General::navs_tabs');
$routes->get('/object-fit', 'General::object_fit');
$routes->get('/offcanvas', 'General::offcanvas');
$routes->get('/pagination', 'General::pagination');
$routes->get('/placeholders', 'General::placeholders');
$routes->get('/popovers', 'General::popovers');
$routes->get('/position', 'General::position');
$routes->get('/progress', 'General::progress');
$routes->get('/ratings', 'General::ratings');
$routes->get('/ribbons', 'General::ribbons');
$routes->get('/scrollspy', 'General::scrollspy');
$routes->get('/sortable-list', 'General::sortable_list');
$routes->get('/spinners', 'General::spinners');
$routes->get('/swiperjs', 'General::swiperjs');
$routes->get('/toasts', 'General::toasts');
$routes->get('/tooltips', 'General::tooltips');
$routes->get('/tour', 'General::tour');
$routes->get('/typography', 'General::typography');

/******** Icons ********/
$routes->get('/icons', 'Icons::icons');

/******** Maps ********/
$routes->get('/google-maps', 'Maps::google_maps');
$routes->get('/leaflet-maps', 'Maps::leaflet_maps');
$routes->get('/vector-maps', 'Maps::vector_maps');

/******** Pages ********/
$routes->get('/blog-create', 'Pages::blog_create');
$routes->get('/blog-details', 'Pages::blog_details');
$routes->get('/blog', 'Pages::blog');
$routes->get('/coming-soon', 'Pages::coming_soon');
$routes->get('/create-password-basic', 'Pages::create_password_basic');
$routes->get('/create-password-cover', 'Pages::create_password_cover');
$routes->get('/emptypage', 'Pages::emptypage');
$routes->get('/error401', 'Pages::error401');
$routes->get('/error404', 'Pages::error404');
$routes->get('/error500', 'Pages::error500');
$routes->get('/faqs', 'Pages::faqs');
$routes->get('/floating-labels', 'Pages::floating_labels');
$routes->get('/form-advanced', 'Pages::form_advanced');
$routes->get('/form-check-radios', 'Pages::form_check_radios');
$routes->get('/form-color-pickers', 'Pages::form_color_pickers');
$routes->get('/form-datetime-pickers', 'Pages::form_datetime_pickers');
$routes->get('/form-file-uploads', 'Pages::form_file_uploads');
$routes->get('/form-input-group', 'Pages::form_input_group');
$routes->get('/form-input-masks', 'Pages::form_input_masks');
$routes->get('/form-inputs', 'Pages::form_inputs');
$routes->get('/form-layout', 'Pages::form_layout');
$routes->get('/form-range', 'Pages::form_range');
$routes->get('/form-select', 'Pages::form_select');
$routes->get('/form-select2', 'Pages::form_select2');
$routes->get('/form-validation', 'Pages::form_validation');
$routes->get('/form-wizards', 'Pages::form_wizards');
$routes->get('/invoice-create', 'Pages::invoice_create');
$routes->get('/invoice-details', 'Pages::invoice_details');
$routes->get('/invoice-list', 'Pages::invoice_list');
$routes->get('/landing', 'Pages::landing');
$routes->get('/lockscreen-basic', 'Pages::lockscreen_basic');
$routes->get('/lockscreen-cover', 'Pages::lockscreen_cover');
$routes->get('/pricing', 'Pages::pricing');
$routes->get('/profile-settings', 'Pages::profile_settings');
$routes->get('/profile', 'Pages::profile');
$routes->get('/quill-editor', 'Pages::quill_editor');
$routes->get('/reset-password-basic', 'Pages::reset_password_basic');
$routes->get('/reset-password-cover', 'Pages::reset_password_cover');
$routes->get('/search-results', 'Pages::search_results');
$routes->get('/sign-in-basic', 'Pages::sign_in_basic');
$routes->get('/sign-in-cover', 'Pages::sign_in_cover');
$routes->get('/sign-up-basic', 'Pages::sign_up_basic');
$routes->get('/sign-up-cover', 'Pages::sign_up_cover');
$routes->get('/team', 'Pages::team');
$routes->get('/terms-conditions', 'Pages::terms_conditions');
$routes->get('/testimonials', 'Pages::testimonials');
$routes->get('/timeline', 'Pages::timeline');
$routes->get('/two-step-verification-basic', 'Pages::two_step_verification_basic');
$routes->get('/two-step-verification-cover', 'Pages::two_step_verification_cover');
$routes->get('/under-maintenance', 'Pages::under_maintenance');

/******** Tables ********/
$routes->get('/data-tables', 'Tables::data_tables');
$routes->get('/grid-tables', 'Tables::grid_tables');
$routes->get('/tables', 'Tables::tables');

/******** Widgets ********/
$routes->get('/widgets', 'Widgets::widgets');