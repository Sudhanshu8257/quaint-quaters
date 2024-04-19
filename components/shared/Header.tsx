"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const navLinks = (
    <>
      <Link
        className={`${
          pathname === "/quotes" ? "font-black" : "font-semibold"
        } `}
        href={"/quotes"}
      >
        Quotes
      </Link>
      <Link
        className={`${
          pathname === "/proverbs" ? "font-black" : "font-semibold"
        } `}
        href={"/proverbs"}
      >
        Proverbs
      </Link>
      <Link
        className={`${
          pathname === "/dialogues" ? "font-black" : "font-semibold"
        } `}
        href={"/dialogues"}
      >
        Dialogues
      </Link>
    </>
  );

  return (
    <nav className="bg-white w-full rounded-md sticky top-4 min-h-16 py-2 px-4 flex items-center justify-between">
      <Link href={"/"} className="text-primary text-lg font-black ">
        QuaintQuarters
      </Link>
      <div className="flex items-center justify-center gap-4 max-md:hidden">
        {navLinks}
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col mt-4 gap-4">{navLinks}</div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Header;
