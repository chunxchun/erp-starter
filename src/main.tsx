import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./i18n";

import { CreateRole, EditRole, ListRole, ShowRole } from "./pages/roles";
import {
  CreateEmployee,
  EditEmployee,
  ListEmployee,
  ShowEmployee,
} from "./pages/employees";
import {
  CreateDepartment,
  EditDepartment,
  ListDepartment,
  ShowDepartment,
} from "./pages/departments";
import {
  CreatePosition,
  EditPosition,
  ListPosition,
  ShowPosition,
} from "./pages/positions";
import { CreateJob, EditJob, ListJob, ShowJob } from "./pages/jobs";
import { CreateLeave, EditLeave, ListLeave, ShowLeave } from "./pages/leaves";
import {
  CreateTimesheet,
  EditTimesheet,
  ListTimesheet,
  ShowTimesheet,
} from "./pages/timesheets";
import {
  CreatePayroll,
  EditPayroll,
  ListPayroll,
  ShowPayroll,
} from "./pages/payrolls";
// import { Settings } from "./pages/settings";
import Settings from "./pages/Settings.tsx";
import Landing from "./pages/Landing.tsx";
import CreateWarehouse from "./pages/warehouses/CreateWarehouse.tsx";
import EditWarehouse from "./pages/warehouses/EditWarehouse.tsx";
import ListWarehouse from "./pages/warehouses/ListWarehouse.tsx";
import ShowWarehouse from "./pages/warehouses/ShowWarehouse.tsx";
import CreateProduct from "./pages/products/CreateProduct.tsx";
import EditProduct from "./pages/products/EditProduct.tsx";
import ListProduct from "./pages/products/ListProduct.tsx";
import ShowProduct from "./pages/products/ShowProduct.tsx";
import CreateCategory from "./pages/categories/CreateCategory.tsx";
import EditCategory from "./pages/categories/EditCategory.tsx";
import ListCategory from "./pages/categories/ListCategory.tsx";
import ShowCategory from "./pages/categories/ShowCategory.tsx";
import CreateBrand from "./pages/brands/CreateBrand.tsx";
import EditBrand from "./pages/brands/EditBrand.tsx";
import ListBrand from "./pages/brands/ListBrand.tsx";
import ShowBrand from "./pages/brands/ShowBrand.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "landing", element: <Landing /> },
      {
        path: "roles",
        children: [
          { path: "create", element: <CreateRole /> },
          { path: "edit/:id", element: <EditRole /> },
          { path: "list", element: <ListRole /> },
          { path: ":id", element: <ShowRole /> },
        ],
      },
      {
        path: "employees",
        children: [
          { path: "create", element: <CreateEmployee /> },
          { path: "edit/:id", element: <EditEmployee /> },
          { path: "list", element: <ListEmployee /> },
          { path: ":id", element: <ShowEmployee /> },
        ],
      },
      {
        path: "departments",
        children: [
          { path: "create", element: <CreateDepartment /> },
          { path: "edit/:id", element: <EditDepartment /> },
          { path: "list", element: <ListDepartment /> },
          { path: ":id", element: <ShowDepartment /> },
        ],
      },
      {
        path: "positions",
        children: [
          { path: "create", element: <CreatePosition /> },
          { path: "edit/:id", element: <EditPosition /> },
          { path: "list", element: <ListPosition /> },
          { path: ":id", element: <ShowPosition /> },
        ],
      },
      {
        path: "jobs",
        children: [
          { path: "create", element: <CreateJob /> },
          { path: "edit/:id", element: <EditJob /> },
          { path: "list", element: <ListJob /> },
          { path: ":id", element: <ShowJob /> },
        ],
      },
      {
        path: "payrolls",
        children: [
          { path: "create", element: <CreatePayroll /> },
          { path: "edit/:id", element: <EditPayroll /> },
          { path: "list", element: <ListPayroll /> },
          { path: ":id", element: <ShowPayroll /> },
        ],
      },
      {
        path: "leaves",
        children: [
          { path: "create", element: <CreateLeave /> },
          { path: "edit/:id", element: <EditLeave /> },
          { path: "list", element: <ListLeave /> },
          { path: ":id", element: <ShowLeave /> },
        ],
      },
      {
        path: "timesheets",
        children: [
          { path: "create", element: <CreateTimesheet /> },
          { path: "edit/:id", element: <EditTimesheet /> },
          { path: "list", element: <ListTimesheet /> },
          { path: ":id", element: <ShowTimesheet /> },
        ],
      },
      {
        path: "warehouses",
        children: [
          { path: "create", element: <CreateWarehouse /> },
          { path: "edit/:id", element: <EditWarehouse /> },
          { path: "list", element: <ListWarehouse /> },
          { path: ":id", element: <ShowWarehouse /> },
        ],
      },
      {
        path: "products",
        children: [
          { path: "create", element: <CreateProduct /> },
          { path: "edit/:id", element: <EditProduct /> },
          { path: "list", element: <ListProduct /> },
          { path: ":id", element: <ShowProduct /> },
        ],
      },
      {
        path: "categories",
        children: [
          { path: "create", element: <CreateCategory /> },
          { path: "edit/:id", element: <EditCategory /> },
          { path: "list", element: <ListCategory /> },
          { path: ":id", element: <ShowCategory /> },
        ],
      },
      {
        path: "brands",
        children: [
          { path: "create", element: <CreateBrand /> },
          { path: "edit/:id", element: <EditBrand /> },
          { path: "list", element: <ListBrand /> },
          { path: ":id", element: <ShowBrand /> },
        ],
      },
      { path: "customers", children: [] },
      { path: "suppliers", children: [] },
      { path: "logistics", children: [] },

      { path: "settings", element: <Settings /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
