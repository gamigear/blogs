

import * as Svgicons from "./menusvg-icons";

const badgePrimary = `<span class="badge bg-primary ms-2">9</span>`
const badgeSucccess = `<span class="badge bg-success-transparent ms-2">6</span>`
const badgeWarning = `<span class="badge bg-warning-transparent ms-2">5</span>`
const badgeInfo = `<span class="badge bg-info-transparent ms-2">4</span>`
const badgedanger = `<span class="badge bg-danger-transparent ms-2">6</span>`
const badgeSuccess = `<span class="badge bg-success-transparent ms-2">8</span>`
export const menuData = [

  {
    menutitle: 'MAIN'
  },
  {
    title: "Dashboards", icon: Svgicons.Dashboardicon, type: "sub", active: false, dirchange: false, children: [

      { path: "/dashboards/sales", icon: Svgicons.Salesicon, type: "link", active: false, selected: false, dirchange: false, title: "Sales" },
    ]
  },

  {
    title: "Nested Menu", icon: Svgicons.Nestedmenuicon, selected: false, active: false, dirchange: false, type: "sub", children: [

      { path: "", title: "Nested-1", icon: Svgicons.Nested1icon, type: "empty", active: false, selected: false, dirchange: false },
      {
        title: "Nested-2", icon: Svgicons.Nested2icon, type: "sub", active: false, selected: false, dirchange: false, children: [

          { path: "", type: "empty", active: false, selected: false, dirchange: false, title: "Nested-2-1" },
          { path: "", type: "empty", ctive: false, selected: false, dirchange: false, title: "Nested-2-2" },
          { path: "", type: "empty", active: false, selected: false, dirchange: false, title: "Nested-2-3" },

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

          { path: "/pages/error/401-error", type: "link", active: false, selected: false, dirchange: false, title: "401-Error" },
          { path: "/pages/error/404-error", type: "link", active: false, selected: false, dirchange: false, title: "404-Error" },
          { path: "/pages/error/500-error", type: "link", active: false, selected: false, dirchange: false, title: "500-Error" },
        ]
      },
    ]
  },
]