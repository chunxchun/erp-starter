import { ReactNode } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
    </>
  );
};

export default MainLayout;
