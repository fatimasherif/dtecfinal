import React from "react";
import "../../styles/Company.css";
import finalvid from "../../assests/finalvid.mp4";

const Company = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-200 to-blue-600">
      <div className="container  items-center p-24 ">
        <div className="items-center text-center pt-2">
          <p className="text-white text-4xl mt-10 mb-6 px-6 font-bold  p-5  border border-r-amber-300 shadow-2xl rounded-lg  max-w-[90%] mx-auto">
            Our History
          </p>
          <div>
            <video
              src={finalvid}
              autoPlay
              loop
              muted
              controls={false}
              className="w-full h-auto mx-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
