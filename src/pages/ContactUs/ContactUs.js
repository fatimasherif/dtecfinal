import React from "react";


import { FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-200 to-blue-600">
      <div className="background">
        <div className="container-contactus">
          <div className="screen mt-[200px]">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact ">
                  <span className=" font-medium">CONTACT INFO :</span>{" "}
                  <div className=" font-medium">Tel : (+202) 24515146</div>
                  <div className=" font-medium">Fax : (+202) 24557205</div>
                  <div className=" font-medium">Mobile : (+2) 01144001046 </div>
                  <div className=" font-medium">
                    Find Us: 3 Ahmed Farid, Al Matar, El Nozha, Cairo
                    Governorate{" "}
                  </div>
                </div>
              </div>
              <div className="screen-body-item mr-[30px]">
                <div className="app-form">
                  <div>
                    <span className="grid">
                      CEO:
                      <a
                        className="no-underline"
                        href="mailto:tamer.ismaeel@dtec-eg.com"
                      >
                        tamer.ismaeel@dtec-eg.com
                      </a>
                    </span>
                  </div>
                  <div>
                    <FaEnvelope />
                    <span className="grid">
                      Technical office manager:
                      <a
                        className="no-underline"
                        href="mailto:ahmed.attia@dtec-eg.com"
                      >
                        ahmed.attia@dtec-eg.com
                      </a>
                    </span>
                  </div>
                  <div>
                    <FaEnvelope />
                    <span className="grid">
                      Account Manager:
                      <a
                        className="no-underline"
                        href="mailto:osama.,twally@dtec-eg.com"
                      >
                        osama.mtwally@dtec-eg.com
                      </a>
                    </span>
                  </div>
                  <div>
                    <FaEnvelope />
                    <span className="grid">
                      Technical Office Engineer:
                      <a
                        className="no-underline"
                        href="mailto:somaya.tamer@dtec-eg.com"
                      >
                        somaya.tamer@dtec-eg.com
                      </a>
                    </span>
                  </div>
                  <FaEnvelope />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
