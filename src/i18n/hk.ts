import { navbar } from "./resources/hk/navbar";
import { sidebar } from "./resources/hk/sidebar";

import { roles } from "./resources/hk/roles";
import { employees } from "./resources/hk/employees";
import { departments } from "./resources/hk/departments";
import { positions } from "./resources/hk/positions";
import { payrolls } from "./resources/hk/payrolls";
import { leaves } from "./resources/hk/leaves";
import { timesheets } from "./resources/hk/timesheets";

import { warehouses } from "./resources/hk/warehouses";
import { products } from "./resources/hk/products";
import { brands } from "./resources/hk/brands";
import { categories } from "./resources/hk/categories";
import { logistics } from "./resources/hk/logistics";
import { sales } from "./resources/hk/sales";
import { purchases } from "./resources/hk/purchases";
import { suppliers } from "./resources/hk/suppliers";
import { customers } from "./resources/hk/customers";

// import { reports } from "./resources/hk/reports";

export const hk = {
  translation: {
    Welcome: "歡迎使用 React 和 react-i18next",
    Button: "按鈕",
  },
  landing: {
    title: "歡迎使用 ERP 系統",
    desc: "現代化雲端系統，用於管理公司內部事務",
  },
  navbar: navbar,
  sidebar: sidebar,
  // resources
  roles: roles,
  employees: employees,
  departments: departments,
  positions: positions,
  payrolls: payrolls,
  leaves: leaves,
  timesheets: timesheets,
  warehouses: warehouses,
  products: products,
  brands: brands,
  categories: categories,
  logistics: logistics,
  sales: sales,
  purchases: purchases,
  suppliers: suppliers,
  customers: customers,

  select_form: {
    placeholder: "請選擇",
  },

  sign_out_button: { sign_out: "登出" },
};
