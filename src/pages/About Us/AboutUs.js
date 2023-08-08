import React from "react";
import back from "../../assests/back.png";

const AboutUs = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${back})`,
        }}
        className="Container-up w-full  "
      >
        <h2 className=" p-24  w-full  font-bold   mt-10  text-5xl text-white text-center">
          WHO WE ARE?
        </h2>
      </div>
      <h6 className="  text-5xl mt-6 bg-gradient-to-r from-yellow-600 to-indigo-800 bg-clip-text  text-transparent">
        About The Company
      </h6>
      <div className="flex  ml-56 p-10">
        <div className="right-container mr-10 w-[500px] border-8 border-blue-400   text-md font-sans my-10 pl-[30px] pt-[30px] pr-[30px] pb-[30px] ">
          <h6 className=" font-bold text-3xl ">Purpose</h6>
          <p className=" font-medium">
            DTEC core business is supplying of integrated solution, DTEC offers
            a wide range of products and customized solution to satisfy a
            variety of business needs and environments, casting a wide net over
            the technology sector. DTEC has partnerships with Cisco, COMMSCOPE,
            NEC, Palo Alto Networks, Dell EMC, HP, Blue Coat, NetApp, Veritas,
            Schneider Electric, APC, Triplite, Axis, Honeywell, Pelco, Aerocont,
            HikVision, ISO NAS, OZAK many others. As DTEC is Telecom Service
            Partner and as DTEC is a registered and approved contractor for
            Telecom companies that can deliver many project types, then DTEC has
            many divisions out of which the Infrastructure and solutions
            division has the business activities that include supply,
            Installation, support and services for large-scale low voltage &
            light current systems.
          </p>
        </div>
        <div className="right-container w-[500px] border-8 ml-10 border-blue-400  text-md font-sans my-10 pl-[30px] pt-[30px] pr-[30px] pb-[30px]">
          <h6 className="font-bold text-3xl">Business</h6>
          <p className=" font-medium">
            DTEC operates in some of the most demanding market environments
            where product resilience and integrity are essential, in our pursuit
            of the best practice , our policy is to deliver customized
            Electrical Solutions on time, to budget, and always meet
            requirements . Our Solutions are always backed up with after sales
            service and training to ensure maximization of customer benefits
            from solutions. To provide full advantage of our services we had
            established services to the local market to enhance our edge and
            offering solution among competitors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
