import React from "react";
import FirstSlider from "./FirstSlider";
import SecondPage from "./SecondPage";
import Thirdpage from "./Thirdpage";

const Home = () => {
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
  return (
    <div
      responsive={responsive}
      className="Container bg-gradient-to-br  from-blue-200 to-blue-600"
    >
      <FirstSlider />
      <SecondPage />
      <Thirdpage />
    </div>
  );
};

export default Home;
