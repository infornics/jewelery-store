"use client";

import Image from "next/image";

// icons
import { HiMenu } from "react-icons/hi";

// shadcn
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex p-3 justify-between items-center">
      <Image
        src="/graphics/logo-no-bg.png"
        alt="logo"
        width={500}
        height={500}
        className="h-10 w-fit"
      />

      <Sheet>
        <SheetTrigger>
          <HiMenu className="text-3xl border-2 rounded text-gray-400" />
        </SheetTrigger>
        <SheetContent className="flex flex-col px-0 py-20">
          {navItems.map((item) => (
            <SheetClose asChild key={item.title}>
              <Link href={item.href} className="px-10">
                {item.title}
              </Link>
            </SheetClose>
          ))}
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
