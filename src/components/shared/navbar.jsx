"use client";

import logo from "@/assets/logo2.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import  {navLinks}  from "@/constant";

/**
 * A functional component representing a navigation bar.
 * @returns {JSX.Element} - The JSX element representing the navigation bar.
 */
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 h-24 border-gray-200 bg-background text-slate-800">
      <div className="mx-auto flex max-h-96 max-w-screen-xl flex-wrap items-center justify-between px-2 pt-2 md:px-0">
        <a href="" className="flex items-center">
          <Image
            src={logo}
            height={75}
            className="m-0"
            alt="Health Optima"
            loading="lazy"
          />
          <h2 className="text-green">Chikitsa Sahaayak</h2>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setIsOpen(!isOpen)} //  Event handler for a click event that toggles the value of isOpen.
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary hover:bg-background/75 focus:outline-none focus:ring-2 focus:ring-primary dark:text-background/75 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-2 md:p-0 ">
            {
              navLinks.map((nav) => (
                <li key={nav.id}>
                  <Link
                    href={`/${nav.id === 'contact' ? "#contact" : nav.id === 'chat'? "#chat": `${nav.id}`}`}
                    className="duration-250 relative block cursor-pointer
                    px-4
                    py-2
                    transition-all
                    before:absolute
                    before:-bottom-0.5
                    before:left-1/2
                    before:h-1
                    before:w-0
                    before:-translate-x-1/2
                    before:rounded-full
                    before:bg-gradient-to-r
                    before:from-blue-600
                    before:via-blue-400
                    before:to-blue-500
                    before:opacity-0
                    before:transition-all
                    before:duration-500
                    before:content-['']
                    hover:text-blue-900
                    hover:before:w-3/4
                    hover:before:opacity-100"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))
            }
           
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 mt-3 flex w-full flex-col bg-background px-3 py-4 text-center text-base font-semibold md:hidden">
          {
            navLinks.map((nav) => (
              <Link
                href={`/${nav.id === 'contact' ? "#contact" : nav.id === 'chat'? "#chat": `${nav.id}`}`}
                onClick={() => setIsOpen(false)}
                key={nav.id}
                className="block py-2 pl-3 pr-4 hover:rounded hover:bg-green-300 hover:text-green-900"
              >
                {nav.title}
              </Link>
            ))
          }
         
        </div>
      )}
    </nav>
  );
};

export default NavBar;