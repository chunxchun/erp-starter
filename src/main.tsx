import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./i18n";
import ListRole from "./pages/roles/ListRole.tsx";
import CreateRole from "./pages/roles/CreateRole.tsx";
import EditRole from "./pages/roles/EditRole.tsx";

import ListEmployee from "./pages/employees/ListEmployee.tsx";
import CreateEmployee from "./pages/employees/CreateEmployee.tsx";
import EditEmployee from "./pages/employees/EditEmployee.tsx";
import ListPosition from "./pages/positions/ListPosition.tsx";
import CreatePosition from "./pages/positions/CreatePosition.tsx";
import EditPosition from "./pages/positions/EditPosition.tsx";
import ListPayroll from "./pages/payrolls/ListPayroll.tsx";
import CreatePayroll from "./pages/payrolls/CreatePayroll.tsx";
import EditPayroll from "./pages/payrolls/EditPayroll.tsx";
import ListLeave from "./pages/leaves/ListLeave.tsx";
import CreateLeave from "./pages/leaves/CreateLeave.tsx";
import EditLeave from "./pages/leaves/EditLeave.tsx";
import ListDepartment from "./pages/departments/ListDepartment.tsx";
import CreateDepartment from "./pages/departments/CreateDepartment.tsx";
import EditDepartment from "./pages/departments/EditDepartment.tsx";
import ListTimesheet from "./pages/timesheets/ListTimesheet.tsx";
import CreateTimesheet from "./pages/timesheets/CreateTimesheet.tsx";
import EditTimesheet from "./pages/timesheets/EditTimesheet.tsx";
import ShowEmployee from "./pages/employees/ShowEmployee.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "roles",
        children: [
          { path: "list", element: <ListRole /> },
          { path: "create", element: <CreateRole /> },
          { path: "edit/:id", element: <EditRole /> },
        ],
      },
      {
        path: "employees",
        children: [
          { path: "list", element: <ListEmployee /> },
          { path: "create", element: <CreateEmployee /> },
          { path: "edit/:id", element: <EditEmployee /> },
          { path: ":id", element: <ShowEmployee /> },
        ],
      },
      {
        path: "departments",
        children: [
          { path: "list", element: <ListDepartment /> },
          { path: "create", element: <CreateDepartment /> },
          { path: "edit/:id", element: <EditDepartment /> },
        ],
      },
      {
        path: "positions",
        children: [
          { path: "list", element: <ListPosition /> },
          { path: "create", element: <CreatePosition /> },
          { path: "edit/:id", element: <EditPosition /> },
        ],
      },
      {
        path: "payrolls",
        children: [
          { path: "list", element: <ListPayroll /> },
          { path: "create", element: <CreatePayroll /> },
          { path: "edit/:id", element: <EditPayroll /> },
        ],
      },
      {
        path: "leaves",
        children: [
          { path: "list", element: <ListLeave /> },
          { path: "create", element: <CreateLeave /> },
          { path: "edit/:id", element: <EditLeave /> },
        ],
      },
      {
        path: "timesheets",
        children: [
          { path: "list", element: <ListTimesheet /> },
          { path: "create", element: <CreateTimesheet /> },
          { path: "edit/:id", element: <EditTimesheet /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
