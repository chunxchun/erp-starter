import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const { t } = useTranslation("sidebar");
  const [open, setOpen] = useState(false);
  const closeSheet = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">{t("menu")}</Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>{t(`title`)}</SheetTitle>
          <SheetDescription>{t(`desc`)}</SheetDescription>
        </SheetHeader>

        <Accordion type="single" collapsible>
          {/* roles */}
          <AccordionItem value="roles">
            <AccordionTrigger>{t("roles")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/roles/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/roles/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* employees */}
          <AccordionItem value="employees">
            <AccordionTrigger>{t("employees")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/employees/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/employees/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* departments */}
          <AccordionItem value="departments">
            <AccordionTrigger>{t("departments")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/departments/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/departments/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* positions */}
          <AccordionItem value="positions">
            <AccordionTrigger>{t("positions")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/positions/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/positions/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* payrolls */}
          <AccordionItem value="payrolls">
            <AccordionTrigger>{t("payrolls")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/payrolls/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/payrolls/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* leaves */}
          <AccordionItem value="leaves">
            <AccordionTrigger>{t("leaves")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/leaves/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/leaves/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* timesheets */}
          <AccordionItem value="timesheets">
            <AccordionTrigger>{t("timesheets")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/timesheets/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/timesheets/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* warehouses */}
          <AccordionItem value="warehouses">
            <AccordionTrigger>{t("warehouses")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/warehouses/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/warehouses/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* products */}
          <AccordionItem value="products">
            <AccordionTrigger>{t("products")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/products/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/products/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* brands */}
          <AccordionItem value="brands">
            <AccordionTrigger>{t("brands")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/brands/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/brands/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* categories */}
          <AccordionItem value="categories">
            <AccordionTrigger>{t("categories")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/categories/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/categories/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* logistics */}
          <AccordionItem value="logistics">
            <AccordionTrigger>{t("logistics")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/logistics/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/logistics/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* sales */}
          <AccordionItem value="sales">
            <AccordionTrigger>{t("sales")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/sales/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/sales/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* purchases */}
          <AccordionItem value="purchases">
            <AccordionTrigger>{t("purchases")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/purchases/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/purchases/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* customers */}
          <AccordionItem value="customers">
            <AccordionTrigger>{t("customers")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/customers/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/customers/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* suppliers */}
          <AccordionItem value="suppliers">
            <AccordionTrigger>{t("suppliers")}</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/suppliers/list">{t("list")}</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/suppliers/create">{t("create")}</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="flex" variant={"link"} onClick={closeSheet}>
              <Link to="/settings">{t("settings")}</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
