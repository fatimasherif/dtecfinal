import React, { useEffect } from "react";
import whatis from "../../assests/whatis.jpg";
import tele from "../../assests/tele.jpg";
import "../../styles/Thirdpage.css";
const ThirdPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate");
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      elements.forEach((el) => {
        const elTop = el.getBoundingClientRect().top;

        if (elTop < windowHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        <p className="text-white text-4xl mt-[100px] mb-[30px] w-[600px] ml-[450px] p-6 font-semibold border  border-r-amber-300  shadow-2xl rounded-lg animate">
          Digital Solutions Designed for Your Business
        </p>
        <p className="text-white w-[900px] items-center ml-[320px] text-ellipsis   text-lg animate">
          We'll work with you to create and install NEC digital si gnage
          solutions that perfectly match your marketing needs, target audience
          and environment. Every organization is unique, and we're here to help
          yours every step of the way.
        </p>
        <img src={whatis} className="ml-[400px] animate" />
      </div>
      <div>
        <p className="text-white text-4xl mt-[100px] mb-[30px] w-[600px] ml-[450px] p-6 font-semibold border  border-r-amber-300  shadow-2xl rounded-lg animate">
          Telecom Survey, Design and Implementation Division
        </p>
        <p className="text-white w-[900px] items-center ml-[320px] text-ellipsis   text-lg animate">
          DTEC is an approved contractor for the implementation many projects
          with Telecom companies. DTEC has installed and upgraded hundreds of
          sites in the Fixed Access Network all over the country.
        </p>
        <img src={tele} className="ml-[350px] h-[350px] w-[850px] animate" />
      </div>
    </div>
  );
};

export default ThirdPage;
