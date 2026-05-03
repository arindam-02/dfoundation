"use client";
import { navLinks } from "@/app/utils/constants";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo/logo.png";
import CustomButton from "./CustomButton";
import ToggleMenuBtn from "./ToggleMenuBtn";

const Navbar = () => {
  return (
    <>
      <header className="w-full mx-auto sticky top-0 z-50  border-b backdrop-blur-2xl bg-background/50 ">
        <div className="flex items-center justify-between md:w-10/12 mx-auto">
          <Link href="/">
            <Image src={Logo} alt="logo" width={120} height={120} />
          </Link>

          <div className="flex justify-center items-center gap-7">
            {/* Desktop Navigations */}
            <nav className="hidden md:flex gap-4">
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* Donate button */}
            <CustomButton title={"Donate Now"} url={"/donate"} />

            {/* Mobile menu Button */}
            <ToggleMenuBtn />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
