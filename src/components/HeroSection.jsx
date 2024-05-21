import React from "react";
import BurgerImage from "../Images/pexels-valeriya-1639562.jpg";
const HeroSection = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      <div className="max-h[500] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-9xl ml-9 ">
            The <span className="text-orange-500">Best</span>{" "}
          </h1>
          <h1 className="px-4 text-9xl ml-9 text-orange-500">
            Food <span className="text-white">Delivery</span>{" "}
          </h1>
        </div>
        <img
          src={BurgerImage}
          alt="Burger image"
          className="w-full max-h-[500px] object-cover rounded-md "
        />
      </div>
    </div>
  );
};

export default HeroSection;
