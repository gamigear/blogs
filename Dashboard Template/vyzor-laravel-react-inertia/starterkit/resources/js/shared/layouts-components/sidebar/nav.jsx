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
       ]
    },
    {
        menutitle: 'WEB APPS'
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
                icon: Svgicons.Erroricon, title: "Error", type: "sub", active: false, selected: false, dirchange: false, children: [
                    { path: `${__APP_BASE_PATH__}/pages/error/404-error`, type: "link", active: false, selected: false, dirchange: false, title: "404-Error" },
                ]
            },
      ]
    },
]
