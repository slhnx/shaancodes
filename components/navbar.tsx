"use client";
import { useState } from "react";
import {
  Navbar as NavWrapper,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Skills",
      link: "#my-skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Work Experiences",
      link: "#experiences",
    },
    {
      name: "Blogs",
      link: "#blogs",
    },
    {
      name: "Contact",
      link: "#about",
    },
  ];

  return (
    <NavWrapper className="w-[80%] xl:w-[50%] mx-auto">
      <NavBody className="relatize z-50">
        <NavbarLogo />
        <ThemeToggle />
        <NavItems className="ml-auto" items={navItems} />
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <ThemeToggle />
        </MobileNavMenu>
      </MobileNav>
    </NavWrapper>
  );
};

export default Navbar;
