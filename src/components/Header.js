'use client';
import { HOME_ROUTE, navMenu } from '@/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Header = () => {
  const pathName = usePathname();

  return (
    <> 
      <nav className=" sticky w-full z-20 top-0 inset-s-0 shadow">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href = {HOME_ROUTE}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
           Logo
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-lg text-sm px-3 py-2 focus:outline-none" 
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:">
              {navMenu.map((menu) => {
                const isActive = pathName == menu.route || (menu.route != HOME_ROUTE && pathName.startsWith(menu.route));
                return (
                <li key={menu.route}>
                <Link
                  href={menu.route} className={`block py-2 px-3 text-heading rounded md:p-0 md:dark:hover:bg-transparent ${isActive ? "text-blue-500":""}`}
                >
                  {menu.label}
                </Link>
              </li>
              )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header