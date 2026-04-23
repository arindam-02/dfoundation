"use client";

import { navLinks } from "@/app/Utils/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "./CustomButton";

const ToggleMenuBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="md:hidden p-10"
        aria-label="toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* {isOpen && ( */}
      <nav
        className={`md:hidden pb-4 space-y-2 absolute left-0 top-26 flex flex-col bg-amber-100  h-screen overflow-hidden transition-all duration-300 ease-in-out min-w-full items-center
        ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-screen"
            : "opacity-0 -translate-y-5 max-h-0 pointer-events-none"
        }
      `}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mt-4 px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors bg-amber-200 min-w-1/2 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {/* )} */}
    </div>
  );
};

export default ToggleMenuBtn;
