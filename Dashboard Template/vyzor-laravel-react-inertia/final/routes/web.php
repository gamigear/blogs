<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


//Route::get('{any}', function () {
//    return Inertia::render("Login");
//})->where('any', '.*');

Route::get('', function () {
    return Inertia::render('Login'); // your React component
});
Route::get('dashboards/sales', function () {
    return Inertia::render('dashboards/sale/sale'); // your React component
});
Route::get('dashboards/analytics', function () {
    return Inertia::render('dashboards/analytics/analytics'); // your React component
});
Route::get('dashboards/ecommerce/dashboard', function () {
    return Inertia::render('dashboards/ecommerce/dashboard/dashboard');
});
Route::get('dashboards/ecommerce/products', function () {
    return Inertia::render('dashboards/ecommerce/products/Products');
});
Route::get('dashboards/ecommerce/product-details', function () {
    return Inertia::render('dashboards/ecommerce/productdetails/Product-details');
});
Route::get('dashboards/ecommerce/cart', function () {
    return Inertia::render('dashboards/ecommerce/cart/Cart');
});
Route::get('dashboards/ecommerce/checkout', function () {
    return Inertia::render('dashboards/ecommerce/checkout/Checkout');
});
Route::get('dashboards/ecommerce/customers', function () {
    return Inertia::render('dashboards/ecommerce/customers/Customers');
});
Route::get('dashboards/ecommerce/orders', function () {
    return Inertia::render('dashboards/ecommerce/orders/Orders');
});
Route::get('dashboards/ecommerce/order-details', function () {
    return Inertia::render('dashboards/ecommerce/order-details/Order-details');
});
Route::get('dashboards/ecommerce/add-product', function () {
    return Inertia::render('dashboards/ecommerce/addproduct/Add-product');
});
Route::get('dashboards/crypto/dashboard', function () {
    return Inertia::render('dashboards/crypto/dashboard/dashboard');
});
Route::get('dashboards/crypto/transactions', function () {
    return Inertia::render('dashboards/crypto/transactions/transactions');
});
Route::get('dashboards/crypto/currency-exchange', function () {
    return Inertia::render('dashboards/crypto/currency-exchange/currency-exchange');
});
Route::get('dashboards/crypto/buy-sell', function () {
    return Inertia::render('dashboards/crypto/buy-sell/buy-sell');
});
Route::get('dashboards/crypto/market-cap', function () {
    return Inertia::render('dashboards/crypto/market-cap/market-cap');
});
Route::get('dashboards/crypto/wallet', function () {
    return Inertia::render('dashboards/crypto/wallet/wallet');
});
Route::get('dashboards/crm/dashboard', function () {
    return Inertia::render('dashboards/crm/dashboard/dashboard');
});
Route::get('dashboards/crm/contacts', function () {
    return Inertia::render('dashboards/crm/contacts/contacts');
});
Route::get('dashboards/crm/companies', function () {
    return Inertia::render('dashboards/crm/companies/companies');
});
Route::get('dashboards/crm/deals', function () {
    return Inertia::render('dashboards/crm/deals/deals');
});
Route::get('dashboards/crm/leads', function () {
    return Inertia::render('dashboards/crm/leads/leads');
});
Route::get('dashboards/projects/dashboard', function () {
    return Inertia::render('dashboards/projects/dashboard/dashboard');
});
Route::get('dashboards/projects/projects-list', function () {
    return Inertia::render('dashboards/projects/projects-list/projects-list');
});
Route::get('dashboards/projects/project-overview', function () {
    return Inertia::render('dashboards/projects/project-overview/project-overview');
});
Route::get('dashboards/projects/create-project', function () {
    return Inertia::render('dashboards/projects/create-project/create-project');
});
Route::get('dashboards/hrm', function () {
    return Inertia::render('dashboards/hrm/hrm'); // your React component
});
Route::get('dashboards/courses', function () {
    return Inertia::render('dashboards/courses/courses'); // your React component
});
Route::get('dashboards/stocks', function () {
    return Inertia::render('dashboards/stocks/stocks');
});
Route::get('dashboards/nft/dashboard', function () {
    return Inertia::render('dashboards/nft/dashboard/dashboard');
});
Route::get('dashboards/nft/market-place', function () {
    return Inertia::render('dashboards/nft/market-place/market-place');
});
Route::get('dashboards/nft/nft-details', function () {
    return Inertia::render('dashboards/nft/nft-details/nft-details');
});
Route::get('dashboards/nft/create-nft', function () {
    return Inertia::render('dashboards/nft/create-nft/create-nft');
});
Route::get('dashboards/nft/wallet-integration', function () {
    return Inertia::render('dashboards/nft/wallet-integration/wallet-integration');
});
Route::get('dashboards/nft/live-auction', function () {
    return Inertia::render('dashboards/nft/live-auction/live-auction');
});
Route::get('dashboards/jobs/dashboard', function () {
    return Inertia::render('dashboards/jobs/dashboard/dashboard');
});
Route::get('dashboards/jobs/job-details', function () {
    return Inertia::render('dashboards/jobs/job-details/job-details');
});
Route::get('dashboards/jobs/search-company', function () {
    return Inertia::render('dashboards/jobs/search-company/search-company');
});
Route::get('dashboards/jobs/search-jobs', function () {
    return Inertia::render('dashboards/jobs/search-jobs/search-jobs');
});
Route::get('dashboards/jobs/job-post', function () {
    return Inertia::render('dashboards/jobs/job-post/job-post');
});
Route::get('dashboards/jobs/jobs-list', function () {
    return Inertia::render('dashboards/jobs/jobs-list/jobs-list');
});
Route::get('dashboards/jobs/search-candidate', function () {
    return Inertia::render('dashboards/jobs/search-candidate/search-candidate');
});
Route::get('dashboards/jobs/candidate-details', function () {
    return Inertia::render('dashboards/jobs/candidate-details/candidate-details');
});
Route::get('dashboards/podcast', function () {
    return Inertia::render('dashboards/podcast/podcast');
});
Route::get('dashboards/social-media', function () {
    return Inertia::render('dashboards/social-media/social-media');
});
Route::get('dashboards/school', function () {
    return Inertia::render('dashboards/school/school');
});
Route::get('dashboards/medical', function () {
    return Inertia::render('dashboards/medical/medical');
});
Route::get('dashboards/pos-system', function () {
    return Inertia::render('dashboards/pos-system/pos-system');
});
Route::get('applications/chat', function () {
    return Inertia::render('applications/chat/chat');
});
Route::get('applications/email/mail-app', function () {
    return Inertia::render('applications/email/mail-app/mail-app');
});
Route::get('applications/email/mail-settings', function () {
    return Inertia::render('applications/email/mail-settings/mail-settings');
});
Route::get('applications/file-manager', function () {
    return Inertia::render('applications/file-manager/file-manager');
});
Route::get('applications/full-calendar', function () {
    return Inertia::render('applications/full-calendar/full-calendar');
});
Route::get('applications/gallery', function () {
    return Inertia::render('applications/gallery/gallery');
});
Route::get('applications/sweet-alerts', function () {
    return Inertia::render('applications/sweet-alerts/sweet-alerts');
});
Route::get('applications/task/kanban-board', function () {
    return Inertia::render('applications/task/kanban-board/kanban-board');
});
Route::get('applications/task/list-view', function () {
    return Inertia::render('applications/task/list-view/list-view');
});
Route::get('applications/to-do-list', function () {
    return Inertia::render('applications/to-do-list/to-do-list');
});
Route::get('pages/authentication/coming-soon', function () {
    return Inertia::render('pages/authentication/coming-soon/coming-soon');
});
Route::get('pages/authentication/create-password/basic', function () {
    return Inertia::render('pages/authentication/create-password/basic/basic');
});
Route::get('pages/authentication/create-password/cover', function () {
    return Inertia::render('pages/authentication/create-password/cover/cover');
});
Route::get('pages/authentication/lock-screen/basic', function () {
    return Inertia::render('pages/authentication/lock-screen/basic/basic');
});
Route::get('pages/authentication/lock-screen/cover', function () {
    return Inertia::render('pages/authentication/lock-screen/cover/cover');
});
Route::get('pages/authentication/reset-password/basic', function () {
    return Inertia::render('pages/authentication/reset-password/basic/basic');
});
Route::get('pages/authentication/reset-password/cover', function () {
    return Inertia::render('pages/authentication/reset-password/cover/cover');
});
Route::get('pages/authentication/sign-up/basic', function () {
    return Inertia::render('pages/authentication/sign-up/basic/basic');
});
Route::get('pages/authentication/sign-up/cover', function () {
    return Inertia::render('pages/authentication/sign-up/cover/cover');
});
Route::get('pages/authentication/sign-in/basic', function () {
    return Inertia::render('pages/authentication/sign-in/basic/basic');
});
Route::get('pages/authentication/sign-in/cover', function () {
    return Inertia::render('pages/authentication/sign-in/cover/cover');
});
Route::get('pages/authentication/two-step-verification/basic', function () {
    return Inertia::render('pages/authentication/two-step-verification/basic/basic');
});
Route::get('pages/authentication/two-step-verification/cover', function () {
    return Inertia::render('pages/authentication/two-step-verification/cover/cover');
});
Route::get('pages/authentication/under-maintainance', function () {
    return Inertia::render('pages/authentication/under-maintainance/under-maintainance');
});
Route::get('pages/error/401-error', function () {
    return Inertia::render('pages/error/401-error/401-error');
});
Route::get('pages/error/404-error', function () {
    return Inertia::render('pages/error/404-error/404-error');
});
Route::get('pages/error/500-error', function () {
    return Inertia::render('pages/error/500-error/500-error');
});
Route::get('pages/blog/blog', function () {
    return Inertia::render('pages/blog/blog/blog');
});
Route::get('pages/blog/blog-details', function () {
    return Inertia::render('pages/blog/blog-details/blog-details');
});
Route::get('pages/blog/create-blog', function () {
    return Inertia::render('pages/blog/create-blog/create-blog');
});
Route::get('pages/empty', function () {
    return Inertia::render('pages/empty/empty');
});
Route::get('pages/forms/form-advanced', function () {
    return Inertia::render('pages/forms/form-advanced/form-advanced');
});
Route::get('pages/forms/form-elements/inputs', function () {
    return Inertia::render('pages/forms/form-elements/inputs/inputs');
});
Route::get('pages/forms/form-elements/checks-radios', function () {
    return Inertia::render('pages/forms/form-elements/checks-radios/checks-radios');
});
Route::get('pages/forms/form-elements/input-group', function () {
    return Inertia::render('pages/forms/form-elements/input-group/input-group');
});
Route::get('pages/forms/form-elements/form-select', function () {
    return Inertia::render('pages/forms/form-elements/form-select/form-select');
});
Route::get('pages/forms/form-elements/range-slider', function () {
    return Inertia::render('pages/forms/form-elements/range-slider/range-slider');
});
Route::get('pages/forms/form-elements/input-masks', function () {
    return Inertia::render('pages/forms/form-elements/input-masks/input-masks');
});
Route::get('pages/forms/form-elements/file-uploads', function () {
    return Inertia::render('pages/forms/form-elements/file-uploads/file-uploads');
});
Route::get('pages/forms/form-elements/date-time-picker', function () {
    return Inertia::render('pages/forms/form-elements/date-time-picker/date-time-picker');
});
Route::get('pages/forms/form-elements/color-picker', function () {
    return Inertia::render('pages/forms/form-elements/color-picker/color-picker');
});
Route::get('pages/forms/floating-labels', function () {
    return Inertia::render('pages/forms/floating-labels/floating-labels');
});
Route::get('pages/forms/form-layouts', function () {
    return Inertia::render('pages/forms/form-layouts/form-layouts');
});
Route::get('pages/forms/form-wizards', function () {
    return Inertia::render('pages/forms/form-wizards/form-wizards');
});
Route::get('pages/forms/sun-editor', function () {
    return Inertia::render('pages/forms/sun-editor/sun-editor');
});
Route::get('pages/forms/validation', function () {
    return Inertia::render('pages/forms/validation/validation');
});
Route::get('pages/forms/select2', function () {
    return Inertia::render('pages/forms/select2/select2');
});
Route::get('pages/faqs', function () {
    return Inertia::render('pages/faqs/faqs');
});
Route::get('pages/invoice/create-invoice', function () {
    return Inertia::render('pages/invoice/create-invoice/create-invoice');
});
Route::get('pages/invoice/invoice-details', function () {
    return Inertia::render('pages/invoice/invoice-details/invoice-details');
});
Route::get('pages/invoice/invoice-list', function () {
    return Inertia::render('pages/invoice/invoice-list/invoice-list');
});
Route::get('pages/landing', function () {
    return Inertia::render('pages/landing/landing');
});
Route::get('pages/pricing', function () {
    return Inertia::render('pages/pricing/pricing');
});
Route::get('pages/profile', function () {
    return Inertia::render('pages/profile/profile');
});
Route::get('pages/profile-settings', function () {
    return Inertia::render('pages/profile-settings/profile-settings');
});
Route::get('pages/testimonials', function () {
    return Inertia::render('pages/testimonials/testimonials');
});
Route::get('pages/search', function () {
    return Inertia::render('pages/search/search');
});
Route::get('pages/team', function () {
    return Inertia::render('pages/team/team');
});
Route::get('pages/terms-conditions', function () {
    return Inertia::render('pages/terms-conditions/terms-conditions');
});
Route::get('pages/timeline', function () {
    return Inertia::render('pages/timeline/timeline');
});
Route::get('general/ui-elements/alerts', function () {
    return Inertia::render('general/ui-elements/alerts/alerts');
});
Route::get('general/ui-elements/badge', function () {
    return Inertia::render('general/ui-elements/badge/badge');
});
Route::get('general/ui-elements/breadcrumb', function () {
    return Inertia::render('general/ui-elements/breadcrumb/breadcrumb');
});
Route::get('general/ui-elements/buttons', function () {
    return Inertia::render('general/ui-elements/buttons/buttons');
});
Route::get('general/ui-elements/button-group', function () {
    return Inertia::render('general/ui-elements/button-group/button-group');
});
Route::get('general/ui-elements/cards', function () {
    return Inertia::render('general/ui-elements/cards/cards');
});
Route::get('general/ui-elements/dropdowns', function () {
    return Inertia::render('general/ui-elements/dropdowns/dropdowns');
});
Route::get('general/ui-elements/images-figures', function () {
    return Inertia::render('general/ui-elements/images-figures/images-figures');
});
Route::get('general/ui-elements/links-interactions', function () {
    return Inertia::render('general/ui-elements/links-interactions/links-interactions');
});
Route::get('general/ui-elements/list-group', function () {
    return Inertia::render('general/ui-elements/list-group/list-group');
});
Route::get('general/ui-elements/navs-tabs', function () {
    return Inertia::render('general/ui-elements/navs-tabs/navs-tabs');
});
Route::get('general/ui-elements/object-fit', function () {
    return Inertia::render('general/ui-elements/object-fit/object-fit');
});
Route::get('general/ui-elements/pagination', function () {
    return Inertia::render('general/ui-elements/pagination/pagination');
});
Route::get('general/ui-elements/popovers', function () {
    return Inertia::render('general/ui-elements/popovers/popovers');
});
Route::get('general/ui-elements/progress', function () {
    return Inertia::render('general/ui-elements/progress/progress');
});
Route::get('general/ui-elements/spinners', function () {
    return Inertia::render('general/ui-elements/spinners/spinners');
});
Route::get('general/ui-elements/toasts', function () {
    return Inertia::render('general/ui-elements/toasts/toasts');
});
Route::get('general/ui-elements/tooltips', function () {
    return Inertia::render('general/ui-elements/tooltips/tooltips');
});
Route::get('general/ui-elements/typography', function () {
    return Inertia::render('general/ui-elements/typography/typography');
});
Route::get('general/utilities/avatars', function () {
    return Inertia::render('general/utilities/avatars/avatars');
});
Route::get('general/utilities/borders', function () {
    return Inertia::render('general/utilities/borders/borders');
});
Route::get('general/utilities/breakpoints', function () {
    return Inertia::render('general/utilities/breakpoints/breakpoints');
});
Route::get('general/utilities/colors', function () {
    return Inertia::render('general/utilities/colors/colors');
});
Route::get('general/utilities/columns', function () {
    return Inertia::render('general/utilities/columns/columns');
});
Route::get('general/utilities/css-grid', function () {
    return Inertia::render('general/utilities/css-grid/css-grid');
});
Route::get('general/utilities/flex', function () {
    return Inertia::render('general/utilities/flex/flex');
});
Route::get('general/utilities/gutters', function () {
    return Inertia::render('general/utilities/gutters/gutters');
});
Route::get('general/utilities/helpers', function () {
    return Inertia::render('general/utilities/helpers/helpers');
});
Route::get('general/utilities/position', function () {
    return Inertia::render('general/utilities/position/position');
});
Route::get('general/utilities/additional-content', function () {
    return Inertia::render('general/utilities/additional-content/additional-content');
});
Route::get('general/advanced-ui/accordions-collapse', function () {
    return Inertia::render('general/advanced-ui/accordions-collapse/accordions-collapse');
});
Route::get('general/advanced-ui/carousel', function () {
    return Inertia::render('general/advanced-ui/carousel/carousel');
});
Route::get('general/advanced-ui/draggable-cards', function () {
    return Inertia::render('general/advanced-ui/draggable-cards/draggable-cards');
});
Route::get('general/advanced-ui/media-player', function () {
    return Inertia::render('general/advanced-ui/media-player/media-player');
});
Route::get('general/advanced-ui/modals-closes', function () {
    return Inertia::render('general/advanced-ui/modals-closes/modals-closes');
});
Route::get('general/advanced-ui/navbar', function () {
    return Inertia::render('general/advanced-ui/navbar/navbar');
});
Route::get('general/advanced-ui/offcanvas', function () {
    return Inertia::render('general/advanced-ui/offcanvas/offcanvas');
});
Route::get('general/advanced-ui/placeholders', function () {
    return Inertia::render('general/advanced-ui/placeholders/placeholders');
});
Route::get('general/advanced-ui/ratings', function () {
    return Inertia::render('general/advanced-ui/ratings/ratings');
});
Route::get('general/advanced-ui/ribbons', function () {
    return Inertia::render('general/advanced-ui/ribbons/ribbons');
});
Route::get('general/advanced-ui/sortable-js', function () {
    return Inertia::render('general/advanced-ui/sortable-js/sortable-js');
});
Route::get('general/advanced-ui/swiper-js', function () {
    return Inertia::render('general/advanced-ui/swiper-js/swiper-js');
});
Route::get('general/advanced-ui/tour', function () {
    return Inertia::render('general/advanced-ui/tour/tour');
});
Route::get('widgets', function () {
    return Inertia::render('widgets/widgets');
});
Route::get('maps/pigeon-maps', function () {
    return Inertia::render('maps/pigeon-maps/pigeon-maps');
});
Route::get('maps/leaflet-maps', function () {
    return Inertia::render('maps/leaflet-maps/leaflet-maps');
});
Route::get('icons', function () {
    return Inertia::render('icons/icons');
});
Route::get('charts/apex-charts/area-chart', function () {
    return Inertia::render('charts/apex-charts/area-chart/area-chart');
});
Route::get('charts/apex-charts/bar-chart', function () {
    return Inertia::render('charts/apex-charts/bar-chart/bar-chart');
});
Route::get('charts/apex-charts/boxplot-chart', function () {
    return Inertia::render('charts/apex-charts/boxplot-chart/boxplot-chart');
});
Route::get('charts/apex-charts/bubble-chart', function () {
    return Inertia::render('charts/apex-charts/bubble-chart/bubble-chart');
});
Route::get('charts/apex-charts/candlestick-chart', function () {
    return Inertia::render('charts/apex-charts/candlestick-chart/candlestick-chart');
});
Route::get('charts/apex-charts/column-chart', function () {
    return Inertia::render('charts/apex-charts/column-chart/column-chart');
});
Route::get('charts/apex-charts/funnel-chart', function () {
    return Inertia::render('charts/apex-charts/funnel-chart/funnel-chart');
});
Route::get('charts/apex-charts/heatmap-chart', function () {
    return Inertia::render('charts/apex-charts/heatmap-chart/heatmap-chart');
});
Route::get('charts/apex-charts/line-chart', function () {
    return Inertia::render('charts/apex-charts/line-chart/line-chart');
});
Route::get('charts/apex-charts/mixed-chart', function () {
    return Inertia::render('charts/apex-charts/mixed-chart/mixed-chart');
});
Route::get('charts/apex-charts/pie-chart', function () {
    return Inertia::render('charts/apex-charts/pie-chart/pie-chart');
});
Route::get('charts/apex-charts/polararea-chart', function () {
    return Inertia::render('charts/apex-charts/polararea-chart/polararea-chart');
});
Route::get('charts/apex-charts/radar-chart', function () {
    return Inertia::render('charts/apex-charts/radar-chart/radar-chart');
});
Route::get('charts/apex-charts/radialbar-chart', function () {
    return Inertia::render('charts/apex-charts/radialbar-chart/radialbar-chart');
});
Route::get('charts/apex-charts/range-area-chart', function () {
    return Inertia::render('charts/apex-charts/range-area-chart/range-area-chart');
});
Route::get('charts/apex-charts/scatter-chart', function () {
    return Inertia::render('charts/apex-charts/scatter-chart/scatter-chart');
});
Route::get('charts/apex-charts/timeline-chart', function () {
    return Inertia::render('charts/apex-charts/timeline-chart/timeline-chart');
});
Route::get('charts/apex-charts/treemap-chart', function () {
    return Inertia::render('charts/apex-charts/treemap-chart/treemap-chart');
});
Route::get('charts/chartjs-charts', function () {
    return Inertia::render('charts/chartjs-charts/chartjs-charts');
});
Route::get('charts/echart-charts', function () {
    return Inertia::render('charts/echart-charts/echart-charts');
});
Route::get('tables/tables', function () {
    return Inertia::render('tables/tables/tables');
});
Route::get('tables/grid-js-tables', function () {
    return Inertia::render('tables/grid-js-tables/grid-js-tables');
});
Route::get('tables/data-tables', function () {
    return Inertia::render('tables/data-tables/data-tables');
});
