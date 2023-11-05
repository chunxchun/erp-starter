import { navbar } from "./resources/en/navbar";
import { sidebar } from "./resources/en/sidebar";

import { roles } from "./resources/en/roles";
import { employees } from "./resources/en/employees";
import { departments } from "./resources/en/departments";
import { remunerations } from "./resources/en/remunerations";
import { positions } from "./resources/en/positions";
import { payrolls } from "./resources/en/payrolls";
import { leaves } from "./resources/en/leaves";
import { timesheets } from "./resources/en/timesheets";

import { warehouses } from "./resources/en/warehouses";
import { products } from "./resources/en/products";
import { brands } from "./resources/en/brands";
import { categories } from "./resources/en/categories";
import { logistics } from "./resources/en/logistics";
import { sales } from "./resources/en/sales";
import { purchases } from "./resources/en/purchases";
import { suppliers } from "./resources/en/suppliers";
import { customers } from "./resources/en/customers";
// import { reminders } from "./resources/en/reminders";
// import { reports } from "./resources/en/reports";

export const en = {
  translation: {
    Welcome: "Welcome to React and react-i18next",
    Button: "Button",
  },
  landing: {
    title: "Welcome to ERP System",
    desc: "Modern cloud-based system for managing the company's internal affairs",
  },
  navbar: navbar,
  sidebar: sidebar,
  // resources
  roles: roles,
  employees: employees,
  departments: departments,
  positions: positions,
  remunerations: remunerations,
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
  // reminders: reminders,
  select_form: {
    placeholder: "Please select",
  },

  sign_out_button: { sign_out: "Sign Out" },
};
