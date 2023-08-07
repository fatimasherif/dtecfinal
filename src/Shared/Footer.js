import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 z-20 w-full p-4 opacity-90 bg-blue-800 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className=" text-white font-bold text-xl sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link to={"/"} className="hover:underline">
          DTEC
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link
            to={"/about"}
            className="mr-4 hover:underline md:mr-6 text-yellow-400 no-underline text-lg"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to={"/contact"}
            className="mr-4 hover:underline md:mr-6 text-yellow-400 no-underline text-lg"
          >
            Contact US
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
