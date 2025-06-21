import React from "react";
import { MenuItem } from "@/types";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Separator } from "../ui/separator";
import { BorderBeam } from "../magicui/border-beam";

type Props = {
  navMenu: MenuItem[];
};

const MobileMenu = ({ navMenu }: Props) => {
  return (
    <div>
      <ul className="mb-3">
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    asChild
                    variant={"ghost"}
                    className="w-full justify-between"
                  >
                    <span className="flex items-center justify-between w-full">
                      {label}
                      <ChevronsUpDown className="ml-2" />
                    </span>
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="ps-2">
                  <ul className="border-l border-l-muted-foreground/20">
                    {submenu.map(({ href, label }, index) => (
                      <li key={index}>
                        <Button
                          asChild
                          variant={"ghost"}
                          className="w-full justify-start text-muted-foreground hover:bg-transparent"
                        >
                          <a href={href}>{label}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                asChild
                variant={"ghost"}
                className="w-full justify-start"
              >
                <a href={href}>{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>

      <Separator />

      <div className="flex items-center justify-center gap-2 mt-2">
        <Button variant={"outline"} className="">
          Sign in
        </Button>
        <Button className="">Get Started</Button>
      </div>
    </div>
  );
};

export default MobileMenu;
