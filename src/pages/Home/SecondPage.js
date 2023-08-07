import React, { useEffect } from "react";
import rackss from "../../assests/rackss.png";
import rackrack from "../../assests/rackrack.jpg";
import it from "../../assests/it.jpg";
import fibers from "../../assests/fibers.jpg";
import "../../styles/SecondPage.css";

const SecondPage = () => {
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
      <p className="text-white text-4xl mt-[100px] mb-[30px] w-[600px] ml-[450px] p-6 font-semibold border  border-r-amber-300  shadow-2xl rounded-lg animate">
        Infrastructure and Solutions Division
      </p>
      <div>
        <p className="text-white w-[900px] items-center ml-[320px] text-ellipsis   text-lg animate">
          An exclusive division offering turnkey corporate Elec tric solutions,
          we deploy and deliver optimizing solution coverage network, VOIP, IPTV
          Fire Alarm Access Control CCTV and public Address over company
          network, Our engineers, in this division are dedi cated to meet
          customer's needs in offering a wide array of innovative Electric
          solution at the best price p erformance. This division is also
          responsible for providing sales & customer services to Enterprise
          customers with various offerings including Servers, Workstations and
          all related software, devices & peripherals. The division is operated
          by experienced professionals in pre-sales and after-sales
          representative s to serve our customers in excellence and provide them
          with the up-to-date solutions that meet their requirements.
        </p>
      </div>

      <div className="images-container  grid grid-cols-2  items-center w-[700px] ml-[400px] mb-[50px] mt-[50px] ">
        <img src={rackrack} className="h-auto max-w-xs animate" alt="Ll" />

        <img src={it} className="h-auto max-w-xs animate" alt="dd " />
        <img src={rackss} className="h-auto max-w-xs animate" alt="rr" />
        <img src={fibers} className="h-auto max-w-xs animate" alt="ff" />
      </div>
    </div>
  );
};

export default SecondPage;
