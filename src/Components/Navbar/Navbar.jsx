/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 p-2">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-24 items-center justify-between">
            <NavLink to="/" className="text-white text-4xl font-bold">
              Start Framework
            </NavLink>
            <div className="flex ml-5 sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-teal-600 px-3 py-2 rounded-md font-medium"
                        : "text-white  px-3 py-2 rounded-md font-medium"
                    }
                    aria-current="page"
                  >
                    ABOUT
                  </NavLink>
                  <NavLink
                    to="portfolio"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-teal-600 px-3 py-2 rounded-md font-medium"
                        : "text-white  px-3 py-2 rounded-md font-medium"
                    }
                  >
                    PORTFOLIO
                  </NavLink>
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-teal-600 px-3 py-2 rounded-md font-medium"
                        : "text-white  px-3 py-2 rounded-md font-medium"
                    }
                  >
                    CONTACT
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
