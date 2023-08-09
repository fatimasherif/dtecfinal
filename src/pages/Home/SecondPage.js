import React, { useEffect } from "react";
import rackss from "../../assests/rackss.png";
import rackrack from "../../assests/rackrack.jpg";
import it from "../../assests/it.jpg";
import fibers from "../../assests/fibers.jpg";
import "../../styles/SecondPage.css";

const SecondPage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
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
    <div className="items-center">
      <p className="text-white text-4xl mt-10 mb-6 px-6 font-semibold border border-r-amber-300 shadow-2xl rounded-lg animate">
        Infrastructure and Solutions Division
      </p>
      <div>
        <p className="text-white max-w-[90%] mx-auto text-ellipsis text-lg px-6 animate">
          An exclusive division offering turnkey corporate Electric solutions,
          we deploy and deliver optimizing solution coverage network, VOIP, IPTV
          Fire Alarm Access Control CCTV and public Address over company
          network, Our engineers, in this division are dedicated to meet
          customer's needs in offering a wide array of innovative Electric
          solution at the best price performance. This division is also
          responsible for providing sales & customer services to Enterprise
          customers with various offerings including Servers, Workstations and
          all related software, devices & peripherals. The division is operated
          by experienced professionals in pre-sales and after-sales
          representatives to serve our customers in excellence and provide them
          with the up-to-date solutions that meet their requirements.
        </p>
      </div>

      <div className="images-container grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[90%] mx-auto mt-10 mb-10">
        <img src={rackrack} className="h-auto max-w-full animate" alt="Ll" />

        <img src={it} className="h-auto max-w-full animate" alt="dd " />
        <img src={rackss} className="h-auto max-w-full animate" alt="rr" />
        <img src={fibers} className="h-auto max-w-full animate" alt="ff" />
      </div>
    </div>
  );
};

export default SecondPage;
