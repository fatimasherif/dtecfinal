import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dropdown.css";

function Partners() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const handleHover = () => {
    setIsOpen(true);
    clearTimeout(timeoutId);
  };

  const handleHoverExit = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 1000);
    setTimeoutId(id);
  };
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);
  return (
    <div className="relative ">
      <button
        className="px-4 py-2  text-gray-700 rounded-md hover:bg-yellow-100 focus:outline-none "
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
      >
        <span className=" font-bold text-justify font-serif     text-blue-900 text-lg">
          Partners
        </span>
      </button>

      {isOpen && (
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
          className="  opacity-100 items-center absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-md shadow-lg"
        >
          <div
            className="py-1 flex w-auto "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="container  pt-6">
              <div className=" items-center ">
                <ul className="items-center p-3">
                  <li className="mb-2 border-2 p-2  rounded-md border-gray-600 ">
                    <Link
                      className=" no-underline text-black"
                      to="https://www.commscope.com/"
                    >
                      Commscope
                    </Link>
                  </li>

                  <li className="mb-2 border-2 p-2   border-gray-600 rounded-md">
                    <Link
                      className=" no-underline  text-black"
                      to="https://www.corning.com/"
                    >
                      Corning
                    </Link>
                  </li>
                  <li className="mb-2 border-2 p-2   border-gray-600 rounded-md">
                    <Link
                      className=" no-underline  text-black"
                      to="https://www.conteg.com/"
                    >
                      Conteg
                    </Link>
                  </li>
                  <li className="mb-2 border-2 p-2   border-gray-600 rounded-md">
                    <Link
                      className=" no-underline  text-black"
                      to="https://canovate.com/en/home/"
                    >
                      Canovate
                    </Link>
                  </li>

                  <li className="mb-2 border-2 p-2   border-gray-600 rounded-md">
                    <Link
                      className=" no-underline  text-black"
                      to="https://www.cisco.com/c/en_eg/index.html"
                    >
                      Cisco
                    </Link>
                  </li>
                  <li className="mb-2 border-2 p-2   border-gray-600  rounded-md">
                    <Link
                      className=" no-underline  text-black"
                      to="https://www.hp.com/us-en/home.html"
                    >
                      Hp
                    </Link>
                  </li>

                  <li className="mb-2 border-2 p-2   border-gray-600  rounded-md">
                    <Link
                      className=" no-underline  text-black"
                      to="https://www.axis.com/en-vn?gclid=Cj0KCQjwoK2mBhDzARIsADGbjerNyLzm97OE5CEQJhFPlv3B_MitUUf1zbwoNtzgBzBO1cnHOtoyuDgaAnv8EALw_wcB"
                    >
                      Axis
                    </Link>
                  </li>
                  <li className="mb-2 border-2 p-2   border-gray-600 rounded-md ">
                    <Link
                      className=" no-underline  text-black"
                      to="https://www.honeywell.com/us/en"
                    >
                      Honeywell
                    </Link>
                  </li>
                  <li className="mb-2 border-2 p-2   border-gray-600 rounded-md ">
                    <Link
                      className=" no-underline  text-black"
                      to="https://www1.euro.dell.com/ae/ar/gen/df.aspx?refid=df&s=gen"
                    >
                      DELL
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Partners;
