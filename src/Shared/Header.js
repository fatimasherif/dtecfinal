import React from "react";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import DropdownMenu from "../Components/Dropdown";
import Partners from "../pages/Partners";
import origi from "../assests/origi.mp4";
const Header = () => {
  return (
    <div>
      <div className="header-top h-[40px] bg-gradient-to-l from-blue-800 to-blue-300 w-full mt-0 block">
        <Link to={"/contact"} className="right">
          Contact Us{" "}
        </Link>
      </div>
      <header>
        <nav
          className="fixed top-0 w-full bg-white  opacity-85
          transition-opacity  duration-500 ease-in-out z-50"
        >
          <div className="  flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to={"/"} className="flex p-0 m-0 items-center">
              <video loop autoPlay src={origi} className="  p-0 m-0  w-44" />
            </Link>
            <div className="flex items-center lg:order-2">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <div className="inline-flex px-5 self-stretch relative mx-3">
                <div className="bg-gray-2 border-b-2 border-gray-300"></div>
              </div>
              <ul className="flex flex-col mt-4 absolute  no-underline right-52 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to={"/"}
                    className="block hover:bg-yellow-100 p-4 py-2 no-underline pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    <span className=" font-bold text-justify     text-lg font-serif text-blue-900 ">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <DropdownMenu />
                </li>

                <li>
                  <Partners />
                </li>

                <li>
                  <Link
                    to={"/company"}
                    className="block  hover:bg-yellow-100 p-4 py-2 pr-4 pl-3 no-underline text-gray-700 border-b border-gray-100 "
                  >
                    <span className=" font-bold text-justify font-serif   text-lg text-blue-900 ">
                      Company
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="block hover:bg-yellow-100 p-4 py-2 no-underline pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    <span className=" font-bold text-justify font-serif   text-xl text-blue-900 ">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="block hover:bg-yellow-100 p-4 py-2 no-underline pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    <span className=" font-bold text-justify font-serif   text-lg text-blue-900 ">
                      Contact Us
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
