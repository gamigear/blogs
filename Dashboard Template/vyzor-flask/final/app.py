from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

###### dashboards ######

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/index')
def index():
    return render_template('pages/dashboards/index.html')
    
@app.route('/add-product')
def add_product():
    return render_template('pages/dashboards/add-product.html')

@app.route('/add-product', endpoint='add-product')
def add_product():
    return render_template('pages/dashboards/add-product.html')

@app.route('/cart', endpoint='cart')
def cart():
    return render_template('pages/dashboards/cart.html')

@app.route('/checkout', endpoint='checkout')
def checkout():
    return render_template('pages/dashboards/checkout.html')

@app.route('/crm-companies', endpoint='crm-companies')
def crm_companies():
    return render_template('pages/dashboards/crm-companies.html')

@app.route('/crm-contacts', endpoint='crm-contacts')
def crm_contacts():
    return render_template('pages/dashboards/crm-contacts.html')

@app.route('/crm-deals', endpoint='crm-deals')
def crm_deals():
    return render_template('pages/dashboards/crm-deals.html')

@app.route('/crm-leads', endpoint='crm-leads')
def crm_leads():
    return render_template('pages/dashboards/crm-leads.html')

@app.route('/crypto-buy-sell', endpoint='crypto-buy-sell')
def crypto_buy_sell():
    return render_template('pages/dashboards/crypto-buy-sell.html')

@app.route('/crypto-currency-exchange', endpoint='crypto-currency-exchange')
def crypto_currency_exchange():
    return render_template('pages/dashboards/crypto-currency-exchange.html')

@app.route('/crypto-marketcap', endpoint='crypto-marketcap')
def crypto_marketcap():
    return render_template('pages/dashboards/crypto-marketcap.html')

@app.route('/crypto-transactions', endpoint='crypto-transactions')
def crypto_transactions():
    return render_template('pages/dashboards/crypto-transactions.html')

@app.route('/crypto-wallet', endpoint='crypto-wallet')
def crypto_wallet():
    return render_template('pages/dashboards/crypto-wallet.html')

@app.route('/customers-list', endpoint='customers-list')
def customers_list():
    return render_template('pages/dashboards/customers-list.html')

@app.route('/index1', endpoint='index1')
def index1():
    return render_template('pages/dashboards/index1.html')

@app.route('/index2', endpoint='index2')
def index2():
    return render_template('pages/dashboards/index2.html')

@app.route('/index3', endpoint='index3')
def index3():
    return render_template('pages/dashboards/index3.html')

@app.route('/index4', endpoint='index4')
def index4():
    return render_template('pages/dashboards/index4.html')

@app.route('/index5', endpoint='index5')
def index5():
    return render_template('pages/dashboards/index5.html')

@app.route('/index6', endpoint='index6')
def index6():
    return render_template('pages/dashboards/index6.html')

@app.route('/index7', endpoint='index7')
def index7():
    return render_template('pages/dashboards/index7.html')

@app.route('/index8', endpoint='index8')
def index8():
    return render_template('pages/dashboards/index8.html')

@app.route('/index9', endpoint='index9')
def index9():
    return render_template('pages/dashboards/index9.html')

@app.route('/index10', endpoint='index10')
def index10():
    return render_template('pages/dashboards/index10.html')

@app.route('/index11', endpoint='index11')
def index11():
    return render_template('pages/dashboards/index11.html')

@app.route('/index12', endpoint='index12')
def index12():
    return render_template('pages/dashboards/index12.html')

@app.route('/index13', endpoint='index13')
def index13():
    return render_template('pages/dashboards/index13.html')

@app.route('/index14', endpoint='index14')
def index14():
    return render_template('pages/dashboards/index14.html')

@app.route('/index15', endpoint='index15')
def index15():
    return render_template('pages/dashboards/index15.html')

@app.route('/job-candidate-details', endpoint='job-candidate-details')
def job_candidate_details():
    return render_template('pages/dashboards/job-candidate-details.html')

@app.route('/job-candidate-search', endpoint='job-candidate-search')
def job_candidate_search():
    return render_template('pages/dashboards/job-candidate-search.html')

@app.route('/job-company-search', endpoint='job-company-search')
def job_company_search():
    return render_template('pages/dashboards/job-company-search.html')

@app.route('/job-details', endpoint='job-details')
def job_details():
    return render_template('pages/dashboards/job-details.html')

@app.route('/job-post', endpoint='job-post')
def job_post():
    return render_template('pages/dashboards/job-post.html')

@app.route('/job-search', endpoint='job-search')
def job_search():
    return render_template('pages/dashboards/job-search.html')

@app.route('/jobs-list', endpoint='jobs-list')
def jobs_list():
    return render_template('pages/dashboards/jobs-list.html')

@app.route('/nft-create', endpoint='nft-create')
def nft_create():
    return render_template('pages/dashboards/nft-create.html')

@app.route('/nft-details', endpoint='nft-details')
def nft_details():
    return render_template('pages/dashboards/nft-details.html')

@app.route('/nft-live-auction', endpoint='nft-live-auction')
def nft_live_auction():
    return render_template('pages/dashboards/nft-live-auction.html')

@app.route('/nft-marketplace', endpoint='nft-marketplace')
def nft_marketplace():
    return render_template('pages/dashboards/nft-marketplace.html')

@app.route('/nft-wallet-integration', endpoint='nft-wallet-integration')
def nft_wallet_integration():
    return render_template('pages/dashboards/nft-wallet-integration.html')

@app.route('/orders-details', endpoint='orders-details')
def orders_details():
    return render_template('pages/dashboards/orders-details.html')

@app.route('/orders', endpoint='orders')
def orders():
    return render_template('pages/dashboards/orders.html')

@app.route('/product-details', endpoint='product-details')
def product_details():
    return render_template('pages/dashboards/product-details.html')

@app.route('/products', endpoint='products')
def products():
    return render_template('pages/dashboards/products.html')

@app.route('/projects-create', endpoint='projects-create')
def projects_create():
    return render_template('pages/dashboards/projects-create.html')

@app.route('/projects-list', endpoint='projects-list')
def projects_list():
    return render_template('pages/dashboards/projects-list.html')

@app.route('/projects-overview', endpoint='projects-overview')
def projects_overview():
    return render_template('pages/dashboards/projects-overview.html')


###### applications ######
@app.route('/chat', endpoint='chat')
def chat():
    return render_template('pages/applications/chat.html')

@app.route('/file-manager', endpoint='file-manager')
def file_manager():
    return render_template('pages/applications/file-manager.html')

@app.route('/full-calendar', endpoint='full-calendar')
def full_calendar():
    return render_template('pages/applications/full-calendar.html')

@app.route('/gallery', endpoint='gallery')
def gallery():
    return render_template('pages/applications/gallery.html')

@app.route('/mail-settings', endpoint='mail-settings')
def mail_settings():
    return render_template('pages/applications/mail-settings.html')

@app.route('/mail', endpoint='mail')
def mail():
    return render_template('pages/applications/mail.html')

@app.route('/sweet-alerts', endpoint='sweet-alerts')
def sweet_alerts():
    return render_template('pages/applications/sweet-alerts.html')

@app.route('/task-kanban-board', endpoint='task-kanban-board')
def task_kanban_board():
    return render_template('pages/applications/task-kanban-board.html')

@app.route('/task-list-view', endpoint='task-list-view')
def task_list_view():
    return render_template('pages/applications/task-list-view.html')

@app.route('/to-do-list', endpoint='to-do-list')
def to_do_list():
    return render_template('pages/applications/to-do-list.html')
    

###### charts ######
@app.route('/apex-area-charts', endpoint='apex-area-charts')
def apex_area_charts():
    return render_template('pages/charts/apex-area-charts.html')

@app.route('/apex-bar-charts', endpoint='apex-bar-charts')
def apex_bar_charts():
    return render_template('pages/charts/apex-bar-charts.html')

@app.route('/apex-boxplot-charts', endpoint='apex-boxplot-charts')
def apex_boxplot_charts():
    return render_template('pages/charts/apex-boxplot-charts.html')

@app.route('/apex-bubble-charts', endpoint='apex-bubble-charts')
def apex_bubble_charts():
    return render_template('pages/charts/apex-bubble-charts.html')

@app.route('/apex-candlestick-charts', endpoint='apex-candlestick-charts')
def apex_candlestick_charts():
    return render_template('pages/charts/apex-candlestick-charts.html')

@app.route('/apex-column-charts', endpoint='apex-column-charts')
def apex_column_charts():
    return render_template('pages/charts/apex-column-charts.html')

@app.route('/apex-funnel-charts', endpoint='apex-funnel-charts')
def apex_funnel_charts():
    return render_template('pages/charts/apex-funnel-charts.html')

@app.route('/apex-heatmap-charts', endpoint='apex-heatmap-charts')
def apex_heatmap_charts():
    return render_template('pages/charts/apex-heatmap-charts.html')

@app.route('/apex-line-charts', endpoint='apex-line-charts')
def apex_line_charts():
    return render_template('pages/charts/apex-line-charts.html')

@app.route('/apex-mixed-charts', endpoint='apex-mixed-charts')
def apex_mixed_charts():
    return render_template('pages/charts/apex-mixed-charts.html')

@app.route('/apex-pie-charts', endpoint='apex-pie-charts')
def apex_pie_charts():
    return render_template('pages/charts/apex-pie-charts.html')

@app.route('/apex-polararea-charts', endpoint='apex-polararea-charts')
def apex_polararea_charts():
    return render_template('pages/charts/apex-polararea-charts.html')

@app.route('/apex-radar-charts', endpoint='apex-radar-charts')
def apex_radar_charts():
    return render_template('pages/charts/apex-radar-charts.html')

@app.route('/apex-radialbar-charts', endpoint='apex-radialbar-charts')
def apex_radialbar_charts():
    return render_template('pages/charts/apex-radialbar-charts.html')

@app.route('/apex-rangearea-charts', endpoint='apex-rangearea-charts')
def apex_rangearea_charts():
    return render_template('pages/charts/apex-rangearea-charts.html')

@app.route('/apex-scatter-charts', endpoint='apex-scatter-charts')
def apex_scatter_charts():
    return render_template('pages/charts/apex-scatter-charts.html')

@app.route('/apex-timeline-charts', endpoint='apex-timeline-charts')
def apex_timeline_charts():
    return render_template('pages/charts/apex-timeline-charts.html')

@app.route('/apex-treemap-charts', endpoint='apex-treemap-charts')
def apex_treemap_charts():
    return render_template('pages/charts/apex-treemap-charts.html')

@app.route('/chartjs-charts', endpoint='chartjs-charts')
def chartjs_charts():
    return render_template('pages/charts/chartjs-charts.html')

@app.route('/echarts', endpoint='echarts')
def echarts():
    return render_template('pages/charts/echarts.html')
        

###### general ######
@app.route('/accordions-collpase', endpoint='accordions-collpase')
def accordions_collpase():
    return render_template('pages/general/accordions-collpase.html')

@app.route('/alerts', endpoint='alerts')
def alerts():
    return render_template('pages/general/alerts.html')

@app.route('/avatars', endpoint='avatars')
def avatars():
    return render_template('pages/general/avatars.html')

@app.route('/badge', endpoint='badge')
def badge():
    return render_template('pages/general/badge.html')

@app.route('/borders', endpoint='borders')
def borders():
    return render_template('pages/general/borders.html')

@app.route('/breadcrumb', endpoint='breadcrumb')
def breadcrumb():
    return render_template('pages/general/breadcrumb.html')

@app.route('/breakpoints', endpoint='breakpoints')
def breakpoints():
    return render_template('pages/general/breakpoints.html')

@app.route('/buttongroup', endpoint='buttongroup')
def buttongroup():
    return render_template('pages/general/buttongroup.html')

@app.route('/buttons', endpoint='buttons')
def buttons():
    return render_template('pages/general/buttons.html')

@app.route('/cards', endpoint='cards')
def cards():
    return render_template('pages/general/cards.html')

@app.route('/carousel', endpoint='carousel')
def carousel():
    return render_template('pages/general/carousel.html')

@app.route('/colors', endpoint='colors')
def colors():
    return render_template('pages/general/colors.html')

@app.route('/columns', endpoint='columns')
def columns():
    return render_template('pages/general/columns.html')

@app.route('/css-grid', endpoint='css-grid')
def css_grid():
    return render_template('pages/general/css-grid.html')

@app.route('/draggable-cards', endpoint='draggable-cards')
def draggable_cards():
    return render_template('pages/general/draggable-cards.html')

@app.route('/dropdowns', endpoint='dropdowns')
def dropdowns():
    return render_template('pages/general/dropdowns.html')

@app.route('/flex', endpoint='flex')
def flex():
    return render_template('pages/general/flex.html')

@app.route('/gutters', endpoint='gutters')
def gutters():
    return render_template('pages/general/gutters.html')

@app.route('/helpers', endpoint='helpers')
def helpers():
    return render_template('pages/general/helpers.html')

@app.route('/images-figures', endpoint='images-figures')
def images_figures():
    return render_template('pages/general/images-figures.html')

@app.route('/links-interactions', endpoint='links-interactions')
def links_interactions():
    return render_template('pages/general/links-interactions.html')

@app.route('/listgroup', endpoint='listgroup')
def listgroup():
    return render_template('pages/general/listgroup.html')

@app.route('/media-player', endpoint='media-player')
def media_player():
    return render_template('pages/general/media-player.html')

@app.route('/modals-closes', endpoint='modals-closes')
def modals_closes():
    return render_template('pages/general/modals-closes.html')

@app.route('/more', endpoint='more')
def more():
    return render_template('pages/general/more.html')

@app.route('/navbar', endpoint='navbar')
def navbar():
    return render_template('pages/general/navbar.html')

@app.route('/navs-tabs', endpoint='navs-tabs')
def navs_tabs():
    return render_template('pages/general/navs-tabs.html')

@app.route('/object-fit', endpoint='object-fit')
def object_fit():
    return render_template('pages/general/object-fit.html')

@app.route('/offcanvas', endpoint='offcanvas')
def offcanvas():
    return render_template('pages/general/offcanvas.html')

@app.route('/pagination', endpoint='pagination')
def pagination():
    return render_template('pages/general/pagination.html')

@app.route('/placeholders', endpoint='placeholders')
def placeholders():
    return render_template('pages/general/placeholders.html')

@app.route('/popovers', endpoint='popovers')
def popovers():
    return render_template('pages/general/popovers.html')

@app.route('/position', endpoint='position')
def position():
    return render_template('pages/general/position.html')

@app.route('/progress', endpoint='progress')
def progress():
    return render_template('pages/general/progress.html')

@app.route('/ratings', endpoint='ratings')
def ratings():
    return render_template('pages/general/ratings.html')

@app.route('/ribbons', endpoint='ribbons')
def ribbons():
    return render_template('pages/general/ribbons.html')

@app.route('/scrollspy', endpoint='scrollspy')
def scrollspy():
    return render_template('pages/general/scrollspy.html')

@app.route('/sortable-list', endpoint='sortable-list')
def sortable_list():
    return render_template('pages/general/sortable-list.html')

@app.route('/spinners', endpoint='spinners')
def spinners():
    return render_template('pages/general/spinners.html')

@app.route('/swiperjs', endpoint='swiperjs')
def swiperjs():
    return render_template('pages/general/swiperjs.html')

@app.route('/toasts', endpoint='toasts')
def toasts():
    return render_template('pages/general/toasts.html')

@app.route('/tooltips', endpoint='tooltips')
def tooltips():
    return render_template('pages/general/tooltips.html')

@app.route('/tour', endpoint='tour')
def tour():
    return render_template('pages/general/tour.html')

@app.route('/typography', endpoint='typography')
def typography():
    return render_template('pages/general/typography.html')
    

###### icons ######
@app.route('/icons', endpoint='icons')
def icons():
    return render_template('pages/icons/icons.html')


###### maps ######
@app.route('/google-maps', endpoint='google-maps')
def google_maps():
    return render_template('pages/maps/google-maps.html')

@app.route('/leaflet-maps', endpoint='leaflet-maps')
def leaflet_maps():
    return render_template('pages/maps/leaflet-maps.html')

@app.route('/vector-maps', endpoint='vector-maps')
def vector_maps():
    return render_template('pages/maps/vector-maps.html')
    

###### pages ######
@app.route('/blog-create', endpoint='blog-create')
def blog_create():
    return render_template('pages/pages/blog-create.html')

@app.route('/blog-details', endpoint='blog-details')
def blog_details():
    return render_template('pages/pages/blog-details.html')

@app.route('/blog', endpoint='blog')
def blog():
    return render_template('pages/pages/blog.html')

@app.route('/coming-soon', endpoint='coming-soon')
def coming_soon():
    return render_template('pages/pages/coming-soon.html')

@app.route('/create-password-basic', endpoint='create-password-basic')
def create_password_basic():
    return render_template('pages/pages/create-password-basic.html')

@app.route('/create-password-cover', endpoint='create-password-cover')
def create_password_cover():
    return render_template('pages/pages/create-password-cover.html')

@app.route('/emptypage', endpoint='emptypage')
def emptypage():
    return render_template('pages/pages/emptypage.html')

@app.route('/error401', endpoint='error401')
def error401():
    return render_template('pages/pages/error401.html')

@app.route('/error404', endpoint='error404')
def error404():
    return render_template('pages/pages/error404.html')

@app.route('/error500', endpoint='error500')
def error500():
    return render_template('pages/pages/error500.html')

@app.route('/faqs', endpoint='faqs')
def faqs():
    return render_template('pages/pages/faqs.html')

@app.route('/floating-labels', endpoint='floating-labels')
def floating_labels():
    return render_template('pages/pages/floating-labels.html')

@app.route('/form-advanced', endpoint='form-advanced')
def form_advanced():
    return render_template('pages/pages/form-advanced.html')

@app.route('/form-check-radios', endpoint='form-check-radios')
def form_check_radios():
    return render_template('pages/pages/form-check-radios.html')

@app.route('/form-color-pickers', endpoint='form-color-pickers')
def form_color_pickers():
    return render_template('pages/pages/form-color-pickers.html')

@app.route('/form-datetime-pickers', endpoint='form-datetime-pickers')
def form_datetime_pickers():
    return render_template('pages/pages/form-datetime-pickers.html')

@app.route('/form-file-uploads', endpoint='form-file-uploads')
def form_file_uploads():
    return render_template('pages/pages/form-file-uploads.html')

@app.route('/form-input-group', endpoint='form-input-group')
def form_input_group():
    return render_template('pages/pages/form-input-group.html')

@app.route('/form-input-masks', endpoint='form-input-masks')
def form_input_masks():
    return render_template('pages/pages/form-input-masks.html')

@app.route('/form-inputs', endpoint='form-inputs')
def form_inputs():
    return render_template('pages/pages/form-inputs.html')

@app.route('/form-layout', endpoint='form-layout')
def form_layout():
    return render_template('pages/pages/form-layout.html')

@app.route('/form-range', endpoint='form-range')
def form_range():
    return render_template('pages/pages/form-range.html')

@app.route('/form-select', endpoint='form-select')
def form_select():
    return render_template('pages/pages/form-select.html')

@app.route('/form-select2', endpoint='form-select2')
def form_select2():
    return render_template('pages/pages/form-select2.html')

@app.route('/form-validation', endpoint='form-validation')
def form_validation():
    return render_template('pages/pages/form-validation.html')

@app.route('/form-wizards', endpoint='form-wizards')
def form_wizards():
    return render_template('pages/pages/form-wizards.html')

@app.route('/invoice-create', endpoint='invoice-create')
def invoice_create():
    return render_template('pages/pages/invoice-create.html')

@app.route('/invoice-details', endpoint='invoice-details')
def invoice_details():
    return render_template('pages/pages/invoice-details.html')

@app.route('/invoice-list', endpoint='invoice-list')
def invoice_list():
    return render_template('pages/pages/invoice-list.html')

@app.route('/landing', endpoint='landing')
def landing():
    return render_template('pages/pages/landing.html')

@app.route('/lockscreen-basic', endpoint='lockscreen-basic')
def lockscreen_basic():
    return render_template('pages/pages/lockscreen-basic.html')

@app.route('/lockscreen-cover', endpoint='lockscreen-cover')
def lockscreen_cover():
    return render_template('pages/pages/lockscreen-cover.html')

@app.route('/pricing', endpoint='pricing')
def pricing():
    return render_template('pages/pages/pricing.html')

@app.route('/profile-settings', endpoint='profile-settings')
def profile_settings():
    return render_template('pages/pages/profile-settings.html')

@app.route('/profile', endpoint='profile')
def profile():
    return render_template('pages/pages/profile.html')

@app.route('/quill-editor', endpoint='quill-editor')
def quill_editor():
    return render_template('pages/pages/quill-editor.html')

@app.route('/reset-password-basic', endpoint='reset-password-basic')
def reset_password_basic():
    return render_template('pages/pages/reset-password-basic.html')

@app.route('/reset-password-cover', endpoint='reset-password-cover')
def reset_password_cover():
    return render_template('pages/pages/reset-password-cover.html')

@app.route('/search-results', endpoint='search-results')
def search_results():
    return render_template('pages/pages/search-results.html')

@app.route('/sign-in-basic', endpoint='sign-in-basic')
def sign_in_basic():
    return render_template('pages/pages/sign-in-basic.html')

@app.route('/sign-in-cover', endpoint='sign-in-cover')
def sign_in_cover():
    return render_template('pages/pages/sign-in-cover.html')

@app.route('/sign-up-basic', endpoint='sign-up-basic')
def sign_up_basic():
    return render_template('pages/pages/sign-up-basic.html')

@app.route('/sign-up-cover', endpoint='sign-up-cover')
def sign_up_cover():
    return render_template('pages/pages/sign-up-cover.html')

@app.route('/team', endpoint='team')
def team():
    return render_template('pages/pages/team.html')

@app.route('/terms-conditions', endpoint='terms-conditions')
def terms_conditions():
    return render_template('pages/pages/terms-conditions.html')

@app.route('/testimonials', endpoint='testimonials')
def testimonials():
    return render_template('pages/pages/testimonials.html')

@app.route('/timeline', endpoint='timeline')
def timeline():
    return render_template('pages/pages/timeline.html')

@app.route('/two-step-verification-basic', endpoint='two-step-verification-basic')
def two_step_verification_basic():
    return render_template('pages/pages/two-step-verification-basic.html')

@app.route('/two-step-verification-cover', endpoint='two-step-verification-cover')
def two_step_verification_cover():
    return render_template('pages/pages/two-step-verification-cover.html')

@app.route('/under-maintenance', endpoint='under-maintenance')
def under_maintenance():
    return render_template('pages/pages/under-maintenance.html')
        

###### tables ######
@app.route('/data-tables', endpoint='data-tables')
def data_tables():
    return render_template('pages/tables/data-tables.html')

@app.route('/grid-tables', endpoint='grid-tables')
def grid_tables():
    return render_template('pages/tables/grid-tables.html')

@app.route('/tables', endpoint='tables')
def tables():
    return render_template('pages/tables/tables.html')
    

###### widgets ######
@app.route('/widgets', endpoint='widgets')
def widgets():
    return render_template('pages/widgets/widgets.html')

    
if __name__ == '__main__':
    app.run(debug=True)