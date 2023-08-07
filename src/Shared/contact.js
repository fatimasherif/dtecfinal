import React from "react";
import "../styles/ContactUs.css";

const Contact = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-200 to-blue-600">
      <div class="pix-header-desktop block sticky top-0 bg-light-opacity-6 bg-gray-300">
        <div class="pix-header-border bg-gray-300 h-px"></div>
        <div class="container-xl bg-gray-300">
          <div class="flex flex-wrap items-center justify-between w-full py-5 bg-gray-300">
            <div class="flex items-center">
              <span
                href="tel:+202-299999"
                class="inline-flex items-center text-sm font-bold text-body-default py-5 px-2 md:px-5"
              >
                <i class="pixicon-phone text-18 mr-2"></i> +202-22479101
              </span>
              <div class=" md:block ml-2">
                <div class="h-px bg-gray-300 w-px"></div>
              </div>
              <div class="inline-flex items-center text-sm font-bold text-body-default py-5 px-2 md:px-5">
                <i class="pixicon-map-pin-1-circle text-18 mr-2"></i> Cairo,
                Egypt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
