import React from "react";
import "../../styles/Company.css";
import finalvid from "../../assests/finalvid.mp4";

const Company = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-200 to-blue-600">
      <div className="container ">
        <div className="">
          <h2 className="  border p-3 w-[300px]   shadow-lg bg-blue-100 ml-[500px]  font-bold text-blue-900  mt-[40px] mb-6">
            Our History
          </h2>
        </div>
        <div>
          <video
            src={finalvid}
            autoPlay
            loop
            muted
            controls={false}
            className="w-[1000px] h-auto mx-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
