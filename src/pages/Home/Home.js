import React from "react";
import FirstSlider from "./FirstSlider";
import SecondPage from "./SecondPage";
import Thirdpage from "./Thirdpage";

const Home = () => {
  return (
    <div className="Container bg-gradient-to-br  from-blue-200 to-blue-600">
      <FirstSlider />
      <SecondPage />
      <Thirdpage />
    </div>
  );
};

export default Home;
