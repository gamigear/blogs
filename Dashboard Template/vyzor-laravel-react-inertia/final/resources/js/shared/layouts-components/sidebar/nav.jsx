import SpkBadge from "../../@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
import * as Svgicons from "./menusvg-icons";

const badgePrimary = <SpkBadge variant="" Customclass="bg-primary-transparent ms-2">9</SpkBadge>
const badgeSucccess = <SpkBadge variant="" Customclass="bg-success-transparent ms-2">6</SpkBadge>
const badgeWarning = <SpkBadge variant="" Customclass="bg-warning-transparent ms-2">5</SpkBadge>
const badgeInfo = <SpkBadge variant="" Customclass="bg-info-transparent ms-2">4</SpkBadge>
const badgedanger = <SpkBadge variant="" Customclass="bg-danger-transparent ms-2">6</SpkBadge>
const badgeSuccess = <SpkBadge variant="" Customclass="bg-success-transparent ms-2">8</SpkBadge>

export const MENUITEMS = [

    {
        menutitle: 'MAIN'
    },
    {
        title: "Dashboards", icon: Svgicons.Dashboardicon, type: "sub", active: false, dirchange: false, children: [

            { path: `${__APP_BASE_PATH__}/dashboards/sales`, icon: Svgicons.Salesicon, type: "link", active: false, selected: false, dirchange: false, title: "Sales" },
            { path: `${__APP_BASE_PATH__}/dashboards/analytics`, icon: Svgicons.Analyticsicon, type: "link", active: false, selected: false, dirchange: false, title: "Analytics" },

            {
                title: "Ecommerce", type: "sub", badgetxt: badgePrimary, icon: Svgicons.Ecommerceicon, active: false, dirchange: false, children: [
                    { path: `${__APP_BASE_PATH__}/dashboards/ecommerce/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${__APP_BASE_PATH__}/dashboards/ecommerce/products`, type: "link", active: false, selected: false, dirchange: false, title: "Products" },
                    { path: `${__APP_BASE_PATH__}/dashboards/ecommerce/product-details`, type: "link", active: false, selected: false, dirchange: false, title: "Product Details" },
                    { path: `${__APP_BASE_PATH__}/dashboards/ecommerce/cart`, type: "link", active: false, selected: false, dirchange: false, title: "Cart" },
                    { path: `${__APP_BASE_PATH__}/dashboards/ecommerce/checkout`, type: "link", active: false, selected: false, dirchange: false, title: "Checkout" },
                    { path: `${__APP_BASE_PATH__}/dashboards/ecommerce/customers`, type: "link", active: false, selected: false, dirchange: false, title: "Customers" },
                    { path: `${__APP_BASE_PATH__}/dashboards/ecommerce/orders`, type: "link", active: false, selected: false, dirchange: false, title: "Orders" },
                    { path: `${__APP_BASE_PATH__}/dashboards/ecommerce/order-details`, type: "link", active: false, selected: false, dirchange: false, title: "Order Details" },
                    { path: `${__APP_BASE_PATH__}/dashboards/ecommerce/add-product`, type: "link", active: false, selected: false, dirchange: false, title: "Add Product" },

                ]
            },
            {
                title: "Crypto", type: "sub", badgetxt: badgeSucccess, icon: Svgicons.Cryptoicon, active: false, selected: false, dirchange: false, children: [

                    { path: `${__APP_BASE_PATH__}/dashboards/crypto/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${__APP_BASE_PATH__}/dashboards/crypto/transactions`, type: "link", active: false, selected: false, dirchange: false, title: "Transactions" },
                    { path: `${__APP_BASE_PATH__}/dashboards/crypto/currency-exchange`, type: "link", active: false, selected: false, dirchange: false, title: "Currency Exchange" },
                    { path: `${__APP_BASE_PATH__}/dashboards/crypto/buy-sell`, type: "link", active: false, selected: false, dirchange: false, title: "Buy & Sell" },
                    { path: `${__APP_BASE_PATH__}/dashboards/crypto/market-cap`, type: "link", active: false, selected: false, dirchange: false, title: "Marketcap" },
                    { path: `${__APP_BASE_PATH__}/dashboards/crypto/wallet`, type: "link", active: false, selected: false, dirchange: false, title: "Wallet" },

                ],
            },
            {
                title: "CRM", type: "sub", badgetxt: badgeWarning, icon: Svgicons.Crmicon, active: false, selected: false, dirchange: false, children: [

                    { path: `${__APP_BASE_PATH__}/dashboards/crm/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${__APP_BASE_PATH__}/dashboards/crm/contacts`, type: "link", active: false, selected: false, dirchange: false, title: "Contacts" },
                    { path: `${__APP_BASE_PATH__}/dashboards/crm/companies`, type: "link", active: false, selected: false, dirchange: false, title: "Companies" },
                    { path: `${__APP_BASE_PATH__}/dashboards/crm/deals`, type: "link", active: false, selected: false, dirchange: false, title: "Deals" },
                    { path: `${__APP_BASE_PATH__}/dashboards/crm/leads`, type: "link", active: false, selected: false, dirchange: false, title: " Leads" },

                ],
            },
            {
                title: "Projects", type: "sub", badgetxt: badgeInfo, icon: Svgicons.Projectsicon, active: false, selected: false, dirchange: false, children: [

                    { path: `${__APP_BASE_PATH__}/dashboards/projects/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${__APP_BASE_PATH__}/dashboards/projects/projects-list`, type: "link", active: false, selected: false, dirchange: false, title: "Projects List" },
                    { path: `${__APP_BASE_PATH__}/dashboards/projects/project-overview`, type: "link", active: false, selected: false, dirchange: false, title: "Project Overview" },
                    { path: `${__APP_BASE_PATH__}/dashboards/projects/create-project`, type: "link", active: false, selected: false, dirchange: false, title: "Create Project" },

                ],
            },
            { path: `${__APP_BASE_PATH__}/dashboards/hrm`, type: "link", icon: Svgicons.Hrmicon, active: false, selected: false, dirchange: false, title: "HRM" },
            { path: `${__APP_BASE_PATH__}/dashboards/courses`, type: "link", active: false, icon: Svgicons.Courseicon, selected: false, dirchange: false, title: "Courses" },
            { path: `${__APP_BASE_PATH__}/dashboards/stocks`, type: "link", active: false, icon: Svgicons.Stockicon, selected: false, dirchange: false, title: "Stocks" },
            {
                title: "NFT", type: "sub", badgetxt: badgedanger, active: false, icon: Svgicons.Nfticon, selected: false, dirchange: false, children: [

                    { path: `${__APP_BASE_PATH__}/dashboards/nft/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${__APP_BASE_PATH__}/dashboards/nft/market-place`, type: "link", active: false, selected: false, dirchange: false, title: "Market Place" },
                    { path: `${__APP_BASE_PATH__}/dashboards/nft/nft-details`, type: "link", active: false, selected: false, dirchange: false, title: "NFT Details" },
                    { path: `${__APP_BASE_PATH__}/dashboards/nft/create-nft`, type: "link", active: false, selected: false, dirchange: false, title: "Create NFT" },
                    { path: `${__APP_BASE_PATH__}/dashboards/nft/wallet-integration`, type: "link", active: false, selected: false, dirchange: false, title: " Wallet Integration" },
                    { path: `${__APP_BASE_PATH__}/dashboards/nft/live-auction`, type: "link", active: false, selected: false, dirchange: false, title: "Live Auction" },

                ],
            },
            {
                title: "Jobs", type: "sub", badgetxt: badgeSuccess, active: false, icon: Svgicons.Jobsicon, selected: false, children: [

                    { path: `${__APP_BASE_PATH__}/dashboards/jobs/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${__APP_BASE_PATH__}/dashboards/jobs/job-details`, type: "link", active: false, selected: false, dirchange: false, title: "Job Details" },
                    { path: `${__APP_BASE_PATH__}/dashboards/jobs/search-company`, type: "link", active: false, selected: false, dirchange: false, title: "Search Company" },
                    { path: `${__APP_BASE_PATH__}/dashboards/jobs/search-jobs`, type: "link", active: false, selected: false, dirchange: false, title: "Search Jobs" },
                    { path: `${__APP_BASE_PATH__}/dashboards/jobs/job-post`, type: "link", active: false, selected: false, dirchange: false, title: " Job Post" },
                    { path: `${__APP_BASE_PATH__}/dashboards/jobs/jobs-list`, type: "link", active: false, selected: false, dirchange: false, title: " Jobs List" },
                    { path: `${__APP_BASE_PATH__}/dashboards/jobs/search-candidate`, type: "link", active: false, selected: false, dirchange: false, title: " Search Candidate" },
                    { path: `${__APP_BASE_PATH__}/dashboards/jobs/candidate-details`, type: "link", active: false, selected: false, dirchange: false, title: "Candidate Details" },

                ],
            },
            { path: `${__APP_BASE_PATH__}/dashboards/podcast`, type: "link", icon: Svgicons.Podcasticon, active: false, selected: false, dirchange: false, title: "Podcast" },
            { path: `${__APP_BASE_PATH__}/dashboards/social-media`, type: "link", icon: Svgicons.Socialicon, active: false, selected: false, dirchange: false, title: "Social Media" },
            { path: `${__APP_BASE_PATH__}/dashboards/school`, type: "link", icon: Svgicons.Schoolicon, active: false, selected: false, dirchange: false, title: "School" },
            { path: `${__APP_BASE_PATH__}/dashboards/medical`, type: "link", icon: Svgicons.Medicalicon, active: false, selected: false, dirchange: false, title: "Medical" },
            { path: `${__APP_BASE_PATH__}/dashboards/pos-system`, type: "link", icon: Svgicons.Posicon, active: false, selected: false, dirchange: false, title: "POS System" },
        ]
    },

    {
        menutitle: 'WEB APPS'
    },

    {
        title: "Applications", icon: Svgicons.Applicationicon, type: "sub", active: false, selected: false, dirchange: false, children: [

            { path: `${__APP_BASE_PATH__}/applications/chat`, icon: Svgicons.Chaticon, type: "link", active: false, selected: false, dirchange: false, title: "Chat" },
            {
                title: "Email", type: "sub", icon: Svgicons.Emailicon, active: false, children: [

                    { path: `${__APP_BASE_PATH__}/applications/email/mail-app`, type: "link", active: false, selected: false, dirchange: false, title: "Mail-App" },
                    { path: `${__APP_BASE_PATH__}/applications/email/mail-settings`, type: "link", active: false, selected: false, dirchange: false, title: "Mail-Settings" },

                ]
            },
            { path: `${__APP_BASE_PATH__}/applications/file-manager`, icon: Svgicons.Fileicon, type: "link", active: false, selected: false, dirchange: false, title: "File Manager" },
            { path: `${__APP_BASE_PATH__}/applications/full-calendar`, icon: Svgicons.Fullicon, type: "link", active: false, selected: false, dirchange: false, title: "Full Calendar" },
            { path: `${__APP_BASE_PATH__}/applications/gallery`, type: "link", icon: Svgicons.Galleryicon, active: false, selected: false, dirchange: false, title: "Gallery" },
            { path: `${__APP_BASE_PATH__}/applications/sweet-alerts`, type: "link", icon: Svgicons.Sweeticon, active: false, selected: false, dirchange: false, title: "Sweet Alerts" },
            {
                title: "Task", type: "sub", icon: Svgicons.Taskicon, active: false, selected: false, dirchange: false, doublToggle: false, children: [

                    { path: `${__APP_BASE_PATH__}/applications/task/kanban-board`, type: "link", active: false, selected: false, dirchange: false, title: "Kanban Board" },
                    { path: `${__APP_BASE_PATH__}/applications/task/list-view`, type: "link", active: false, selected: false, dirchange: false, title: "List View" },

                ]
            },
            { path: `${__APP_BASE_PATH__}/applications/to-do-list`, icon: Svgicons.Todoicon, type: "link", active: false, selected: false, dirchange: false, title: "To Do List" },
        ],
    },

    {
        title: "Nested Menu", icon: Svgicons.Nestedmenuicon, selected: false, active: false, dirchange: false, type: "sub", children: [

            { path: `${__APP_BASE_PATH__}/`, title: "Nested-1", icon: Svgicons.Nested1icon, type: "empty", active: false, selected: false, dirchange: false },
            {
                title: "Nested-2", icon: Svgicons.Nested2icon, type: "sub", active: false, selected: false, dirchange: false, children: [

                    { path: `${__APP_BASE_PATH__}/`, type: "empty", active: false, selected: false, dirchange: false, title: "Nested-2.1" },
                    {
                        title: "Nested-2.2", path: `${__APP_BASE_PATH__}/`, type: "sub", ctive: false, selected: false, dirchange: false, children: [
                            { path: `${__APP_BASE_PATH__}/`, type: "empty", active: false, selected: false, dirchange: false, title: "Nested-2.2.1" },
                            { path: `${__APP_BASE_PATH__}/`, type: "empty", active: false, selected: false, dirchange: false, title: "Nested-2.2.2" },
                        ]
                    },

                ],
            },

        ],
    },

    {
        menutitle: 'PAGES'
    },

    {
        icon: Svgicons.Pagesicon, title: "Pages", type: "sub", active: false, dirchange: false, children: [
            {
                icon: Svgicons.Authenticationicon, title: " Authentication", type: "sub", active: false, selected: false, dirchange: false, children: [
                    { path: `${__APP_BASE_PATH__}/pages/authentication/coming-soon`, type: "link", active: false, selected: false, title: "Coming Soon" },

                    {
                        title: "Create Password", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${__APP_BASE_PATH__}/pages/authentication/create-password/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${__APP_BASE_PATH__}/pages/authentication/create-password/cover`, type: "link", active: false, selected: false, title: "Cover" },
                        ],
                    },
                    {
                        title: "Lock Screen", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${__APP_BASE_PATH__}/pages/authentication/lock-screen/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${__APP_BASE_PATH__}/pages/authentication/lock-screen/cover`, type: "link", active: false, selected: false, title: "Cover" },
                        ],
                    },
                    {
                        title: "Reset Password", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${__APP_BASE_PATH__}/pages/authentication/reset-password/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${__APP_BASE_PATH__}/pages/authentication/reset-password/cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
                        ],
                    },
                    {
                        title: "Sign Up", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${__APP_BASE_PATH__}/pages/authentication/sign-up/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${__APP_BASE_PATH__}/pages/authentication/sign-up/cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
                        ],
                    },
                    {
                        title: "Sign In", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${__APP_BASE_PATH__}/pages/authentication/sign-in/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${__APP_BASE_PATH__}/pages/authentication/sign-in/cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
                        ],
                    },
                    {
                        title: "Two Step Verification", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${__APP_BASE_PATH__}/pages/authentication/two-step-verification/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${__APP_BASE_PATH__}/pages/authentication/two-step-verification/cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
                        ],
                    },
                    { path: `${__APP_BASE_PATH__}/pages/authentication/under-maintainance`, type: "link", active: false, selected: false, dirchange: false, title: "Under Maintainance" },
                ]
            },
            {
                icon: Svgicons.Erroricon, title: "Error", type: "sub", active: false, selected: false, dirchange: false, children: [

                    { path: `${__APP_BASE_PATH__}/pages/error/401-error`, type: "link", active: false, selected: false, dirchange: false, title: "401-Error" },
                    { path: `${__APP_BASE_PATH__}/pages/error/404-error`, type: "link", active: false, selected: false, dirchange: false, title: "404-Error" },
                    { path: `${__APP_BASE_PATH__}/pages/error/500-error`, type: "link", active: false, selected: false, dirchange: false, title: "500-Error" },
                ]
            },
            {
                title: "Blog", icon: Svgicons.Blogicon, type: "sub", active: false, dirchange: false, children: [
                    { path: `${__APP_BASE_PATH__}/pages/blog/blog`, type: "link", active: false, selected: false, dirchange: false, title: "Blog" },
                    { path: `${__APP_BASE_PATH__}/pages/blog/blog-details`, type: "link", active: false, selected: false, dirchange: false, title: "Blog-Details" },
                    { path: `${__APP_BASE_PATH__}/pages/blog/create-blog`, type: "link", active: false, selected: false, dirchange: false, title: "Create-Blog" },
                ]
            },
            { path: `${__APP_BASE_PATH__}/pages/empty`, icon: Svgicons.Emptyicon, type: "link", active: false, selected: false, dirchange: false, title: "Empty", },
            {
                title: "Forms", icon: Svgicons.Formsicon, type: "sub", active: false, selected: false, dirchange: false, children: [

                    { path: `${__APP_BASE_PATH__}/pages/forms/form-advanced`, type: "link", active: false, selected: false, dirchange: false, title: "Form Advanced" },

                    {
                        title: "Form Elements", type: "sub", menusub: true, active: false, selected: false, dirchange: false, children: [
                            { path: `${__APP_BASE_PATH__}/pages/forms/form-elements/inputs`, type: "link", active: false, selected: false, dirchange: false, title: "Inputs" },
                            { path: `${__APP_BASE_PATH__}/pages/forms/form-elements/checks-radios`, type: "link", active: false, selected: false, dirchange: false, title: "Checks & Radios " },
                            { path: `${__APP_BASE_PATH__}/pages/forms/form-elements/input-group`, type: "link", active: false, selected: false, dirchange: false, title: "Input Group" },
                            { path: `${__APP_BASE_PATH__}/pages/forms/form-elements/form-select`, type: "link", active: false, selected: false, dirchange: false, title: "Form Select" },
                            { path: `${__APP_BASE_PATH__}/pages/forms/form-elements/range-slider`, type: "link", active: false, selected: false, dirchange: false, title: "Range Slider" },
                            { path: `${__APP_BASE_PATH__}/pages/forms/form-elements/input-masks`, type: "link", active: false, selected: false, dirchange: false, title: "Input Masks" },
                            { path: `${__APP_BASE_PATH__}/pages/forms/form-elements/file-uploads`, type: "link", active: false, selected: false, dirchange: false, title: "File Uploads" },
                            { path: `${__APP_BASE_PATH__}/pages/forms/form-elements/date-time-picker`, type: "link", active: false, selected: false, dirchange: false, title: "Date,Time Picker" },
                            { path: `${__APP_BASE_PATH__}/pages/forms/form-elements/color-picker`, type: "link", active: false, selected: false, dirchange: false, title: "Color Pickers" },

                        ],
                    },
                    { path: `${__APP_BASE_PATH__}/pages/forms/floating-labels`, type: "link", active: false, selected: false, dirchange: false, title: "Floating Labels" },
                    { path: `${__APP_BASE_PATH__}/pages/forms/form-layouts`, type: "link", active: false, selected: false, dirchange: false, title: "Form Layouts" },
                    { path: `${__APP_BASE_PATH__}/pages/forms/form-wizards`, type: "link", active: false, selected: false, dirchange: false, title: "Form Wizards" },
                    { path: `${__APP_BASE_PATH__}/pages/forms/sun-editor`, type: "link", active: false, selected: false, dirchange: false, title: "Sun Editor" },
                    { path: `${__APP_BASE_PATH__}/pages/forms/validation`, type: "link", active: false, selected: false, dirchange: false, title: "Validation" },
                    { path: `${__APP_BASE_PATH__}/pages/forms/select2`, type: "link", active: false, selected: false, dirchange: false, title: "Select2" },
                ],
            },
            { path: `${__APP_BASE_PATH__}/pages/faqs`, icon: Svgicons.Faqsicon, type: "link", active: false, selected: false, dirchange: false, title: "FAQ's" },
            {
                title: "Invoice", type: "sub", icon: Svgicons.Invoiceicon, menusub: true, active: false, selected: false, dirchange: false, children: [
                    { path: `${__APP_BASE_PATH__}/pages/invoice/create-invoice`, type: "link", active: false, selected: false, dirchange: false, title: "Create Invoice" },
                    { path: `${__APP_BASE_PATH__}/pages/invoice/invoice-details`, type: "link", active: false, selected: false, dirchange: false, title: "Invoice Details" },
                    { path: `${__APP_BASE_PATH__}/pages/invoice/invoice-list`, type: "link", active: false, selected: false, dirchange: false, title: "Invoice List" },
                ],
            },
            { path: `${__APP_BASE_PATH__}/pages/landing`, icon: Svgicons.Landingicon, type: "link", active: false, selected: false, dirchange: false, title: "Landing" },
            { path: `${__APP_BASE_PATH__}/pages/pricing`, icon: Svgicons.Pricingicon, type: "link", active: false, selected: false, dirchange: false, title: "Pricing" },
            { path: `${__APP_BASE_PATH__}/pages/profile`, type: "link", icon: Svgicons.Profileicon, active: false, selected: false, dirchange: false, title: "Profile" },
            { path: `${__APP_BASE_PATH__}/pages/profile-settings`, type: "link", icon: Svgicons.Profilesettingicon, active: false, selected: false, dirchange: false, title: "Profile Settings" },
            { path: `${__APP_BASE_PATH__}/pages/testimonials`, type: "link", icon: Svgicons.Testimonialicon, active: false, selected: false, dirchange: false, title: "Testimonials" },
            { path: `${__APP_BASE_PATH__}/pages/search`, type: "link", icon: Svgicons.Searchicon, active: false, selected: false, dirchange: false, title: "Search" },
            { path: `${__APP_BASE_PATH__}/pages/team`, type: "link", icon: Svgicons.Teamicon, active: false, selected: false, dirchange: false, title: "Team", },
            { path: `${__APP_BASE_PATH__}/pages/terms-conditions`, type: "link", icon: Svgicons.Termsicon, active: false, selected: false, dirchange: false, title: "Terms & Conditions" },
            { path: `${__APP_BASE_PATH__}/pages/timeline`, type: "link", icon: Svgicons.Timelineicon, active: false, selected: false, dirchange: false, title: "Timeline" },
        ]
    },

    {
        menutitle: 'GENERAL'
    },

    {
        title: "General", icon: Svgicons.Generalicon, type: "sub", active: false, selected: false, dirchange: false, children: [
            {
                title: "Ui Elements", icon: Svgicons.Elementsicon, type: "sub", active: false, selected: false, dirchange: false, children: [
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/alerts`, type: "link", active: false, selected: false, dirchange: false, title: "Alerts" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/badge`, type: "link", active: false, selected: false, dirchange: false, title: "Badge" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/breadcrumb`, type: "link", active: false, selected: false, dirchange: false, title: "Breadcrumb" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/buttons`, type: "link", active: false, selected: false, dirchange: false, title: "Buttons" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/button-group`, type: "link", active: false, selected: false, dirchange: false, title: "Button Group" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/cards`, type: "link", active: false, selected: false, dirchange: false, title: "Cards" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/dropdowns`, type: "link", active: false, selected: false, dirchange: false, title: "Dropdowns" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/images-figures`, type: "link", active: false, selected: false, dirchange: false, title: "Images & Figures" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/links-interactions`, type: "link", active: false, selected: false, dirchange: false, title: "Links & Interactions" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/list-group`, type: "link", active: false, selected: false, dirchange: false, title: "List Group" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/navs-tabs`, type: "link", active: false, selected: false, dirchange: false, title: "Navs & Tabs" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/object-fit`, type: "link", active: false, selected: false, dirchange: false, title: "Object Fit" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/pagination`, type: "link", active: false, selected: false, dirchange: false, title: "Pagination" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/popovers`, type: "link", active: false, selected: false, dirchange: false, title: "Popovers" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/progress`, type: "link", active: false, selected: false, dirchange: false, title: "Progress" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/spinners`, type: "link", active: false, selected: false, dirchange: false, title: "Spinners" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/toasts`, type: "link", active: false, selected: false, dirchange: false, title: "Toasts" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/tooltips`, type: "link", active: false, selected: false, dirchange: false, title: "Tooltips" },
                    { path: `${__APP_BASE_PATH__}/general/ui-elements/typography`, type: "link", active: false, selected: false, dirchange: false, title: "Typography" },
                ],
            },
            {
                title: "Utilities", icon: Svgicons.Utilitiesicon, type: "sub", active: false, selected: false, dirchange: false, children: [
                    { path: `${__APP_BASE_PATH__}/general/utilities/avatars`, type: "link", active: false, selected: false, dirchange: false, title: "Avatars" },
                    { path: `${__APP_BASE_PATH__}/general/utilities/borders`, type: "link", active: false, selected: false, dirchange: false, title: "Borders" },
                    { path: `${__APP_BASE_PATH__}/general/utilities/breakpoints`, type: "link", active: false, selected: false, dirchange: false, title: "Breakpoints" },
                    { path: `${__APP_BASE_PATH__}/general/utilities/colors`, type: "link", active: false, selected: false, dirchange: false, title: "Colors" },
                    { path: `${__APP_BASE_PATH__}/general/utilities/columns`, type: "link", active: false, selected: false, dirchange: false, title: "Columns" },
                    { path: `${__APP_BASE_PATH__}/general/utilities/css-grid`, type: "link", active: false, selected: false, dirchange: false, title: "Css Grid" },
                    { path: `${__APP_BASE_PATH__}/general/utilities/flex`, type: "link", active: false, selected: false, dirchange: false, title: "Flex" },
                    { path: `${__APP_BASE_PATH__}/general/utilities/gutters`, type: "link", active: false, selected: false, dirchange: false, title: "Gutters" },
                    { path: `${__APP_BASE_PATH__}/general/utilities/helpers`, type: "link", active: false, selected: false, dirchange: false, title: "Helpers" },
                    { path: `${__APP_BASE_PATH__}/general/utilities/position`, type: "link", active: false, selected: false, dirchange: false, title: "Position" },
                    { path: `${__APP_BASE_PATH__}/general/utilities/additional-content`, type: "link", active: false, selected: false, dirchange: false, title: "Additional Content" },

                ],
            },
            {
                title: "Advanced Ui", icon: Svgicons.Advancedicon, type: "sub", active: false, selected: false, dirchange: false, children: [
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/accordions-collapse`, type: "link", active: false, selected: false, dirchange: false, title: "Accordions & Collapse" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/carousel`, type: "link", active: false, selected: false, dirchange: false, title: "Carousel" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/draggable-cards`, type: "link", active: false, selected: false, dirchange: false, title: "Draggable Cards" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/media-player`, type: "link", active: false, selected: false, dirchange: false, title: "Media Player" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/modals-closes`, type: "link", active: false, selected: false, dirchange: false, title: "Modals & Closes" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/navbar`, type: "link", active: false, selected: false, dirchange: false, title: "Navbar" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/offcanvas`, type: "link", active: false, selected: false, dirchange: false, title: "Offcanvas" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/placeholders`, type: "link", active: false, selected: false, dirchange: false, title: "Placeholders" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/ratings`, type: "link", active: false, selected: false, dirchange: false, title: "Ratings" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/ribbons`, type: "link", active: false, selected: false, dirchange: false, title: "Ribbons" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/sortable-js`, type: "link", active: false, selected: false, dirchange: false, title: "Sortable Js" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/swiper-js`, type: "link", active: false, selected: false, dirchange: false, title: "Swiper JS" },
                    { path: `${__APP_BASE_PATH__}/general/advanced-ui/tour`, type: "link", active: false, selected: false, dirchange: false, title: "Tour" },
                ],
            },
        ]
    },

    { path: `${__APP_BASE_PATH__}/widgets`, icon: Svgicons.widgetsicon, title: "Widgets", type: "link", active: false, dirchange: false, selected: false },

    {
        menutitle: 'MAPS & ICONS'
    },

    {
        title: "Maps", icon: Svgicons.Mapsicon, type: "sub", background: "hor-rightangle", active: false, selected: false, dirchange: false, children: [

            { path: `${__APP_BASE_PATH__}/maps/pigeon-maps`, icon: Svgicons.Vectoricon, type: "link", active: false, selected: false, dirchange: false, title: "Pigeon Maps" },
            { path: `${__APP_BASE_PATH__}/maps/leaflet-maps`, icon: Svgicons.Leafleticon, type: "link", active: false, selected: false, dirchange: false, title: "Leaflet Maps" }

        ],
    },

    { path: `${__APP_BASE_PATH__}/icons`, icon: Svgicons.Iconsicon, type: "link", active: false, selected: false, dirchange: false, title: "Icons" },

    {
        menutitle: 'TABLES & CHARTS'
    },

    {
        title: "Charts", icon: Svgicons.Chartsicon, type: "sub", dirchange: false, children: [
            {
                title: "Apex Charts", icon: Svgicons.Apexicon, type: "sub", menusub: true, active: false, selected: false, dirchange: false, children: [

                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/line-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Line Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/area-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Area Charts " },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/column-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Column Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/bar-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Bar Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/mixed-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Mixed Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/range-area-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Range Area Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/timeline-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Timeline Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/funnel-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Funnel Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/candlestick-chart`, type: "link", active: false, selected: false, dirchange: false, title: "CandleStick Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/boxplot-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Boxplot Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/bubble-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Bubble Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/scatter-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Scatter Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/heatmap-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Heatmap Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/treemap-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Treemap Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/pie-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Pie Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/radialbar-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Radialbar Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/radar-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Radar Charts" },
                    { path: `${__APP_BASE_PATH__}/charts/apex-charts/polararea-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Polararea Charts" },
                ],
            },
            { path: `${__APP_BASE_PATH__}/charts/chartjs-charts`, icon: Svgicons.Chartjsicon, type: "link", active: false, selected: false, dirchange: false, title: "Chartjs Charts" },
            { path: `${__APP_BASE_PATH__}/charts/echart-charts`, type: "link", icon: Svgicons.Echartsicon, active: false, selected: false, dirchange: false, title: "Echart Charts" },
        ],
    },

    {
        title: "Tables", icon: Svgicons.Tablesicon, type: "sub", menutitle: "", active: false, selected: false, dirchange: false, children: [

            { path: `${__APP_BASE_PATH__}/tables/tables`, type: "link", icon: Svgicons.Basictableicon, active: false, selected: false, dirchange: false, title: "Tables" },
            { path: `${__APP_BASE_PATH__}/tables/grid-js-tables`, type: "link", icon: Svgicons.Gridjsicon, active: false, selected: false, dirchange: false, title: "Grid JS Tables" },
            { path: `${__APP_BASE_PATH__}/tables/data-tables`, type: "link", icon: Svgicons.Datatablesicon, active: false, selected: false, dirchange: false, title: "Data Tables" },

        ],
    },
]
