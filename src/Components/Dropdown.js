import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dropdown.css";
import { useEffect } from "react";
function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const handleHover = () => {
    setIsOpen(true);
    clearTimeout(timeoutId);
  };

  const handleHoverExit = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 700);
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
        <span className=" font-bold text-justify font-serif  text-lg text-blue-900 ">
          Products
        </span>
      </button>

      {isOpen && (
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
          className="  opacity-90 absolute top-full left-1/2 transform -translate-x-1/2  items-center  mt-2 bg-white rounded-md shadow-lg"
        >
          <div
            className="py-1 ml-[20px] w-[900px]  h-[]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <ul>
              <span className=" font-bold  text-2xl text-blue-900 ml-0 mt-6  mr-[800px]">
                Passive
              </span>

              <div className="container grid grid-cols-5 gap-4 pt-6">
                <div className=" items-center w-">
                  <h6 className=" text-xl text-black"> Corning</h6>

                  <li>
                    <Link
                      to="https://www.corning.com/optical-communications/emea/en/search-results.html?microsite=true&productsSearchState=&resourcesSearchState=&relatedContentSearchState=&utm_source=&utm_medium=&initialResultType=products&searchText=copper%20systems&search-initialcatalog=Optical%20Communications&search-region=EMEA"
                      className=" no-underline block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Copper System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "https://www.corning.com/optical-communications/emea/en/search-results.html?microsite=true&productsSearchState=&resourcesSearchState=&relatedContentSearchState=&utm_source=&utm_medium=&initialResultType=products&searchText=fiber%20systems&search-initialcatalog=Optical%20Communications&search-region=EMEA"
                      }
                      className="block no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Fiber System
                    </Link>
                  </li>
                </div>
                <ul>
                  <h6 className=" text-xl text-black"> CommScope</h6>

                  <li>
                    <Link
                      to="https://www.commscope.com/search/?searchquery=copper%20systems&analytics=searchFromLink"
                      className=" no-underline block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Copper System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "https://www.commscope.com/product-type/networking-systems/structured-cabling/systimax/fiber-structured-cabling/"
                      }
                      className="block no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Fiber SYSTIMAX System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "https://www.commscope.com/product-type/networking-systems/structured-cabling/netconnect/fiber-structured-cabling/"
                      }
                      className="block no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Fiber NETCONNECT System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "https://www.commscope.com/product-type/networking-systems/automated-infrastructure-management/system-software/"
                      }
                      className="block no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Intelligent System
                    </Link>
                  </li>
                </ul>
                <ul>
                  <h6 className=" text-xl text-black"> Conteg</h6>

                  <li>
                    <Link
                      to="https://www.conteg.com/products-group/racks-and-frames"
                      className=" no-underline block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      IT Rack Cabinet
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"https://www.conteg.com/data-centers"}
                      className="block no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Data Center Solutions
                    </Link>
                  </li>
                </ul>
                <ul>
                  <h6 className="  text-xl text-black "> Canovate</h6>

                  <li>
                    <Link
                      to="https://canovate.com/en/racks-cabinets/"
                      className=" no-underline block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      IT Rack Cabinet
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"https://canovate.com/en/?s=pdus"}
                      className="block no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Pdus
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"https://canovate.com/en/data-centers"}
                      className="block no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Data Center Solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
            <ul>
              <span className=" font-bold  text-2xl text-blue-900 ml-0  mr-[800px]">
                Active
              </span>

              <div className=" ml-20 container grid grid-cols-5 gap-4 pt-6">
                <div className=" items-center ">
                  <h6 className=" text-xl text-black"> CCTV</h6>

                  <li>
                    <Link
                      to="https://sustainability.honeywell.com/us/en/home"
                      className=" no-underline block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Honeywell
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"https://www.axis.com/en-nz"}
                      className="block no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Axis
                    </Link>
                  </li>
                </div>
                <ul>
                  <h6 className=" text-xl text-black"> Routing&Switching</h6>

                  <li>
                    <Link
                      to="https://www.cisco.com/c/en_eg/index.html"
                      className=" no-underline block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Cisco
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"https://www.hp.com/us-en/home.html"}
                      className="block no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      HP
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default DropdownMenu;
