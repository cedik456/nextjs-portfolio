"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex items-center justify-center mt-10">
      <div className="flex bg-[#303030]/60 backdrop-blur-md px-2 py-2 rounded-full shadow-md">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={` text-sm text-gray-400 transition-all duration-300 px-3 py-1   ${
                isActive ? "bg-[#424242] rounded-full text-white " : ""
              }  `}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
