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
        <Button variant="ghost">Menu</Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>{t(`title`)}</SheetTitle>
          <SheetDescription>{t(`desc`)}</SheetDescription>
        </SheetHeader>

        <Accordion type="single" collapsible>

          {/* roles */}
          <AccordionItem value="roles">
            <AccordionTrigger>Roles</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/roles/list">List</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/roles/create">Create</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* employees */}
          <AccordionItem value="employees">
            <AccordionTrigger>Employees</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/employees/list">List</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/employees/create">Create</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* departments */}
          <AccordionItem value="departments">
            <AccordionTrigger>Departments</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/departments/list">List</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/departments/create">Create</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* positions */}
          <AccordionItem value="positions">
            <AccordionTrigger>Positions</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/positions/list">List</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/positions/create">Create</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* payrolls */}
          <AccordionItem value="payrolls">
            <AccordionTrigger>Payrolls</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/payrolls/list">List</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/payrolls/create">Create</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* leaves */}
          <AccordionItem value="leaves">
            <AccordionTrigger>Leaves</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/leaves/list">List</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/leaves/create">Create</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* timesheets */}
          <AccordionItem value="timesheets">
            <AccordionTrigger>Timesheets</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-center">
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/timesheets/list">List</Link>
              </Button>
              <Button variant={"link"} onClick={closeSheet}>
                <Link to="/timesheets/create">Create</Link>
              </Button>
            </AccordionContent>
          </AccordionItem>
          
        </Accordion>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
