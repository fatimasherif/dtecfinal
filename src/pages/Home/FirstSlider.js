import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./Layout";
import "../../styles/FirstSlider.css";
import { Link } from "react-router-dom";
import background from "../../assests/background.jpg";
import cctv2 from "../../assests/cctv2.jpg";
import wireless from "../../assests/wireless.jpg";
import dddata from "../../assests/dddata.jpg";
import dd from "../../assests/dd.jpg";

const FirstSlider = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    classNameName: "theclassName",
  };

  return (
    <div>
      <Layout>
        <section>
          <div
            id="slider-container"
            className={`w-[1200px] mx-auto mt-[100px] ${show ? "show" : ""}`}
          >
            <Slider {...settings}>
              <div className="relative">
                <div>
                  <img
                    src={wireless}
                    className="shadow-2xl drop-shadow-xl w-full  p-6 rounded-lg  gap-2 transition duration-500 ease-in-out transform hover:scale-105 hover:blur-xs"
                  />
                </div>
                <h2 className=" enwan mt-2 ">
                  Networks solutions: LAN, WAN & Wireless Solutions
                </h2>
                <p className="next text-blue-900  font-bold mb-2">
                  We will recommend the optimal LAN and WAN solution for your
                  organization through our industry-leading partners. Our
                  technical and support teams will then walk you through the
                  network design, installation, and post-deployment processes.
                </p>
              </div>
              <div>
                <div>
                  <img
                    src={dd}
                    className="shadow-2xl drop-shadow-xl w-full  h-[455px]  p-6 rounded-lg  gap-2 transition duration-500 ease-in-out transform hover:scale-105 hover:blur-xs"
                  />
                </div>
                <h2 className=" enwan mt-2 ">
                  Data Center Solutions, Data Storage & Backup Systems
                </h2>
                <p className="next text-blue-900  font-bold mb-2">
                  We provide data center backup solutions that help your
                  business prevent important data loss by providing data
                  storage, replication, archiving, backup, and migration
                  capabilities.
                </p>

                <Link></Link>
              </div>
              <div>
                <img
                  src={cctv2}
                  className="shadow-2xl drop-shadow-xl w-full  p-6 rounded-lg  gap-2 transition duration-500 ease-in-out transform hover:scale-105 hover:blur-xs"
                />
                <h2 className=" enwan  mt-2">
                  Security Solutions, CCTV & Access Systems
                </h2>
                <p className=" next  text-xlg text-blue-900 font-bold">
                  Our extensive selection of CCTV systems provides you with
                  everything you need for physical security . Because we
                  understand how vital it is to protect your property, we try to
                  provide cutting-edge surveillance technology and experienced
                  guidance to all companies.
                </p>
              </div>
            </Slider>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default FirstSlider;
