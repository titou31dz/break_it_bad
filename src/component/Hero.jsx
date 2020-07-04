import React from "react";
import hero from "../ui/assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "70vh",
        }}
      ></div>
    </div>
  );
};

export default Hero;
