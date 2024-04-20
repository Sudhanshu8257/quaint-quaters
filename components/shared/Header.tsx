"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Route } from "@/index";

const Header = () => {
  const pathname = usePathname();
  const routes : Route[] = [
    { id: 1, route: "/quotes", label: "Quotes" },
    { id: 2, route: "/proverbs", label: "Proverbs" },
    { id: 3, route: "/dialogues", label: "Dialogues" },
  ];
  return (
    <nav className="bg-white w-full rounded-md sticky top-4 min-h-16 py-2 px-4 flex items-center justify-between">
      <Link href={"/"} className="text-primary text-lg font-black ">
        QuaintQuarters
      </Link>
      <div className="flex items-center justify-center gap-4 max-md:hidden">
        {routes?.map((route) => (
          <Link
            key={route.id}
            className={`${
              pathname === route.route ? "font-black" : "font-semibold"
            }  capitalize`}
            href={route.route}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          {routes?.map((route) => (
            <SheetClose
              asChild
              key={route.id}
              className="flex flex-col mt-4 gap-4"
            >
              <Link
                className={`${
                  pathname === route.route ? "font-black" : "font-semibold"
                }  capitalize`}
                href={route.route}
              >
                {route.label}
              </Link>
            </SheetClose>
          ))}
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Header;
