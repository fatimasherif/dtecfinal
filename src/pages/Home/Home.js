import React from "react";
import FirstSlider from "./FirstSlider";
import SecondPage from "./SecondPage";
import Thirdpage from "./Thirdpage";
import "tailwindcss/tailwind.css";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-600 min-h-screen">
      <div className="container mx-auto px-4">
        <FirstSlider />
        <SecondPage />
        <Thirdpage />
      </div>
    </div>
  );
};

export default Home;
