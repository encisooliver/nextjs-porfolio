'use client';

import React, { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-white dark:bg-dark`}>
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="/logo.png"
                alt="logo"
                height={100}
                className="hidden dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative h-btn my-[6px] block h-[2px] w-[30px] dark:bg-block"></span>
                <span className="relative h-btn my-[6px] block h-[2px] w-[30px] dark:bg-block"></span>
                <span className="relative h-btn my-[6px] block h-[2px] w-[30px] dark:bg-block"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg  bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="text-gray-500 block lg:flex">
                  <ListItem NavLink="/projects">Projects</ListItem>
                  <ListItem NavLink="/projects">Services</ListItem>
                  <ListItem NavLink="/skills">Skills</ListItem>
                  <ListItem NavLink="/contact">Contact</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-gray-500"
              >
                Sign in
              </a>

              {/* <a
                href="/#"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-gray-500 hover:bg-primary/90"
              >
                Sign Up
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-gray-500 hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
