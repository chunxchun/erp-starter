import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <MainLayout>
      <Button>Test</Button>
      <Outlet />
    </MainLayout>
  );
}

export default App;
