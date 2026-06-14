'use client';

import { HOME_ROUTE, navMenu } from '@/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FiShoppingCart, FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
  const pathName = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="sticky top-0 z-20 w-full shadow bg-background border-b border-light">
      <div className="max-w-7xl flex items-center justify-between mx-auto p-4">

        {/* Logo */}
        <Link href={HOME_ROUTE} className="text-2xl font-bold text-primary">
          Shop<span className="text-primary-dark">X</span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navMenu.map((menu) => {
            const isActive =
              pathName === menu.route ||
              (menu.route !== HOME_ROUTE && pathName.startsWith(menu.route));

            return (
              <li key={menu.route}>
                <Link
                  href={menu.route}
                  className={`transition ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {menu.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          {/* Cart Button */}
          <button className="relative bg-primary hover:bg-primary-dark text-white p-2 rounded-lg transition">
            <FiShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-secondary text-xs text-black px-1.5 rounded-full">
              0
            </span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="bg-dark hover:bg-primary-dark text-white p-2 rounded-lg transition"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Login */}
          <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;