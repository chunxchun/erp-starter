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
