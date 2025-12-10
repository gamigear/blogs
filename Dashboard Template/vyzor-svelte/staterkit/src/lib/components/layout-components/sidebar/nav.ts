

import * as Svgicons from "./menusvg-icons";
export const menuData: any = [

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

          { path: "/error/401-error", type: "link", active: false, selected: false, dirchange: false, title: "401-Error" },
          { path: "/error/404-error", type: "link", active: false, selected: false, dirchange: false, title: "404-Error" },
          { path: "/error/500-error", type: "link", active: false, selected: false, dirchange: false, title: "500-Error" },
        ]
      },
    ]
  },
]