from django.shortcuts import render, redirect

# Create your views here.

def root_redirect(request):
    return redirect('app:index')  # Redirect to URL named 'index' in app namespace

def index (request):
    return render(request, 'index.html')

def accordions_collpase (request): 
    return render(request, 'accordions-collpase.html')

def add_product (request): 
    return render(request, 'add-product.html')

def alerts (request): 
    return render(request, 'alerts.html')

def apex_area_charts (request): 
    return render(request, 'apex-area-charts.html')

def apex_bar_charts (request): 
    return render(request, 'apex-bar-charts.html')

def apex_boxplot_charts (request): 
    return render(request, 'apex-boxplot-charts.html')

def apex_bubble_charts (request): 
    return render(request, 'apex-bubble-charts.html')

def apex_candlestick_charts (request): 
    return render(request, 'apex-candlestick-charts.html')

def apex_column_charts (request): 
    return render(request, 'apex-column-charts.html')

def apex_funnel_charts (request): 
    return render(request, 'apex-funnel-charts.html')

def apex_heatmap_charts (request): 
    return render(request, 'apex-heatmap-charts.html')

def apex_line_charts (request): 
    return render(request, 'apex-line-charts.html')

def apex_mixed_charts (request): 
    return render(request, 'apex-mixed-charts.html')

def apex_pie_charts (request): 
    return render(request, 'apex-pie-charts.html')

def apex_polararea_charts (request): 
    return render(request, 'apex-polararea-charts.html')

def apex_radar_charts (request): 
    return render(request, 'apex-radar-charts.html')

def apex_radialbar_charts (request): 
    return render(request, 'apex-radialbar-charts.html')

def apex_rangearea_charts (request): 
    return render(request, 'apex-rangearea-charts.html')

def apex_scatter_charts (request): 
    return render(request, 'apex-scatter-charts.html')

def apex_timeline_charts (request): 
    return render(request, 'apex-timeline-charts.html')

def apex_treemap_charts (request): 
    return render(request, 'apex-treemap-charts.html')

def avatars (request): 
    return render(request, 'avatars.html')

def badge (request): 
    return render(request, 'badge.html')

def blog_create (request): 
    return render(request, 'blog-create.html')

def blog_details (request): 
    return render(request, 'blog-details.html')

def blog (request): 
    return render(request, 'blog.html')

def borders (request): 
    return render(request, 'borders.html')

def breadcrumb (request): 
    return render(request, 'breadcrumb.html')

def breakpoints (request): 
    return render(request, 'breakpoints.html')

def buttongroup (request): 
    return render(request, 'buttongroup.html')

def buttons (request): 
    return render(request, 'buttons.html')

def cards (request): 
    return render(request, 'cards.html')

def carousel (request): 
    return render(request, 'carousel.html')

def cart (request): 
    return render(request, 'cart.html')

def chartjs_charts (request): 
    return render(request, 'chartjs-charts.html')

def chat (request): 
    return render(request, 'chat.html')

def checkout (request): 
    return render(request, 'checkout.html')

def colors (request): 
    return render(request, 'colors.html')

def columns (request): 
    return render(request, 'columns.html')

def coming_soon (request): 
    return render(request, 'coming-soon.html')

def create_password_basic (request): 
    return render(request, 'create-password-basic.html')

def create_password_cover (request): 
    return render(request, 'create-password-cover.html')

def crm_companies (request): 
    return render(request, 'crm-companies.html')

def crm_contacts (request): 
    return render(request, 'crm-contacts.html')

def crm_deals (request): 
    return render(request, 'crm-deals.html')

def crm_leads (request): 
    return render(request, 'crm-leads.html')

def crypto_buy_sell (request): 
    return render(request, 'crypto-buy-sell.html')

def crypto_currency_exchange (request): 
    return render(request, 'crypto-currency-exchange.html')

def crypto_marketcap (request): 
    return render(request, 'crypto-marketcap.html')

def crypto_transactions (request): 
    return render(request, 'crypto-transactions.html')

def crypto_wallet (request): 
    return render(request, 'crypto-wallet.html')

def css_grid (request): 
    return render(request, 'css-grid.html')

def customers_list (request): 
    return render(request, 'customers-list.html')

def data_tables (request): 
    return render(request, 'data-tables.html')

def draggable_cards (request): 
    return render(request, 'draggable-cards.html')

def dropdowns (request): 
    return render(request, 'dropdowns.html')

def echarts (request): 
    return render(request, 'echarts.html')

def emptypage (request): 
    return render(request, 'emptypage.html')

def error401 (request): 
    return render(request, 'error401.html')

def error404 (request): 
    return render(request, 'error404.html')

def error500 (request): 
    return render(request, 'error500.html')

def faqs (request): 
    return render(request, 'faqs.html')

def file_manager (request): 
    return render(request, 'file-manager.html')

def flex (request): 
    return render(request, 'flex.html')

def floating_labels (request): 
    return render(request, 'floating-labels.html')

def form_advanced (request): 
    return render(request, 'form-advanced.html')

def form_check_radios (request): 
    return render(request, 'form-check-radios.html')

def form_color_pickers (request): 
    return render(request, 'form-color-pickers.html')

def form_datetime_pickers (request): 
    return render(request, 'form-datetime-pickers.html')

def form_file_uploads (request): 
    return render(request, 'form-file-uploads.html')

def form_input_group (request): 
    return render(request, 'form-input-group.html')

def form_input_masks (request): 
    return render(request, 'form-input-masks.html')

def form_inputs (request): 
    return render(request, 'form-inputs.html')

def form_layout (request): 
    return render(request, 'form-layout.html')

def form_range (request): 
    return render(request, 'form-range.html')

def form_select (request): 
    return render(request, 'form-select.html')

def form_select2 (request): 
    return render(request, 'form-select2.html')

def form_validation (request): 
    return render(request, 'form-validation.html')

def form_wizards (request): 
    return render(request, 'form-wizards.html')

def full_calendar (request): 
    return render(request, 'full-calendar.html')

def gallery (request): 
    return render(request, 'gallery.html')

def google_maps (request): 
    return render(request, 'google-maps.html')

def grid_tables (request): 
    return render(request, 'grid-tables.html')

def gutters (request): 
    return render(request, 'gutters.html')

def helpers (request): 
    return render(request, 'helpers.html')

def icons (request): 
    return render(request, 'icons.html')

def images_figures (request): 
    return render(request, 'images-figures.html')

def index1 (request): 
    return render(request, 'index1.html')

def index2 (request): 
    return render(request, 'index2.html')

def index3 (request): 
    return render(request, 'index3.html')

def index4 (request): 
    return render(request, 'index4.html')

def index5 (request): 
    return render(request, 'index5.html')

def index6 (request): 
    return render(request, 'index6.html')

def index7 (request): 
    return render(request, 'index7.html')

def index8 (request): 
    return render(request, 'index8.html')

def index9 (request): 
    return render(request, 'index9.html')

def index10 (request): 
    return render(request, 'index10.html')

def index11 (request): 
    return render(request, 'index11.html')

def index12 (request): 
    return render(request, 'index12.html')

def index13 (request): 
    return render(request, 'index13.html')

def index14 (request): 
    return render(request, 'index14.html')

def index15 (request): 
    return render(request, 'index15.html')

def invoice_create (request): 
    return render(request, 'invoice-create.html')

def invoice_details (request): 
    return render(request, 'invoice-details.html')

def invoice_list (request): 
    return render(request, 'invoice-list.html')

def job_candidate_details (request): 
    return render(request, 'job-candidate-details.html')

def job_candidate_search (request): 
    return render(request, 'job-candidate-search.html')

def job_company_search (request): 
    return render(request, 'job-company-search.html')

def job_details (request): 
    return render(request, 'job-details.html')

def job_post (request): 
    return render(request, 'job-post.html')

def job_search (request): 
    return render(request, 'job-search.html')

def jobs_list (request): 
    return render(request, 'jobs-list.html')

def landing (request): 
    return render(request, 'landing.html')

def leaflet_maps (request): 
    return render(request, 'leaflet-maps.html')

def links_interactions (request): 
    return render(request, 'links-interactions.html')

def listgroup (request): 
    return render(request, 'listgroup.html')

def lockscreen_basic (request): 
    return render(request, 'lockscreen-basic.html')

def lockscreen_cover (request): 
    return render(request, 'lockscreen-cover.html')

def mail_settings (request): 
    return render(request, 'mail-settings.html')

def mail (request): 
    return render(request, 'mail.html')

def media_player (request): 
    return render(request, 'media-player.html')

def modals_closes (request): 
    return render(request, 'modals-closes.html')

def more (request): 
    return render(request, 'more.html')

def navbar (request): 
    return render(request, 'navbar.html')

def navs_tabs (request): 
    return render(request, 'navs-tabs.html')

def nft_create (request): 
    return render(request, 'nft-create.html')

def nft_details (request): 
    return render(request, 'nft-details.html')

def nft_live_auction (request): 
    return render(request, 'nft-live-auction.html')

def nft_marketplace (request): 
    return render(request, 'nft-marketplace.html')

def nft_wallet_integration (request): 
    return render(request, 'nft-wallet-integration.html')

def object_fit (request): 
    return render(request, 'object-fit.html')

def offcanvas (request): 
    return render(request, 'offcanvas.html')

def orders_details (request): 
    return render(request, 'orders-details.html')

def orders (request): 
    return render(request, 'orders.html')

def pagination (request): 
    return render(request, 'pagination.html')

def placeholders (request): 
    return render(request, 'placeholders.html')

def popovers (request): 
    return render(request, 'popovers.html')

def position (request): 
    return render(request, 'position.html')

def pricing (request): 
    return render(request, 'pricing.html')

def product_details (request): 
    return render(request, 'product-details.html')

def products (request): 
    return render(request, 'products.html')

def profile_settings (request): 
    return render(request, 'profile-settings.html')

def profile (request): 
    return render(request, 'profile.html')

def progress (request): 
    return render(request, 'progress.html')

def projects_create (request): 
    return render(request, 'projects-create.html')

def projects_list (request): 
    return render(request, 'projects-list.html')

def projects_overview (request): 
    return render(request, 'projects-overview.html')

def quill_editor (request): 
    return render(request, 'quill-editor.html')

def ratings (request): 
    return render(request, 'ratings.html')

def reset_password_basic (request): 
    return render(request, 'reset-password-basic.html')

def reset_password_cover (request): 
    return render(request, 'reset-password-cover.html')

def ribbons (request): 
    return render(request, 'ribbons.html')

def scrollspy (request): 
    return render(request, 'scrollspy.html')

def search_results (request): 
    return render(request, 'search-results.html')

def sign_in_basic (request): 
    return render(request, 'sign-in-basic.html')

def sign_in_cover (request): 
    return render(request, 'sign-in-cover.html')

def sign_up_basic (request): 
    return render(request, 'sign-up-basic.html')

def sign_up_cover (request): 
    return render(request, 'sign-up-cover.html')

def sortable_list (request): 
    return render(request, 'sortable-list.html')

def spinners (request): 
    return render(request, 'spinners.html')

def sweet_alerts (request): 
    return render(request, 'sweet-alerts.html')

def swiperjs (request): 
    return render(request, 'swiperjs.html')

def tables (request): 
    return render(request, 'tables.html')

def task_kanban_board (request): 
    return render(request, 'task-kanban-board.html')

def task_list_view (request): 
    return render(request, 'task-list-view.html')

def team (request): 
    return render(request, 'team.html')

def terms_conditions (request): 
    return render(request, 'terms-conditions.html')

def testimonials (request): 
    return render(request, 'testimonials.html')

def timeline (request): 
    return render(request, 'timeline.html')

def to_do_list (request): 
    return render(request, 'to-do-list.html')

def toasts (request): 
    return render(request, 'toasts.html')

def tooltips (request): 
    return render(request, 'tooltips.html')

def tour (request): 
    return render(request, 'tour.html')

def two_step_verification_basic (request): 
    return render(request, 'two-step-verification-basic.html')

def two_step_verification_cover (request): 
    return render(request, 'two-step-verification-cover.html')

def typography (request): 
    return render(request, 'typography.html')

def under_maintenance (request): 
    return render(request, 'under-maintenance.html')

def vector_maps (request): 
    return render(request, 'vector-maps.html')

def widgets (request): 
    return render(request, 'widgets.html')