import React from "react";

const CardLayout = (props) => {
  return (
    <div className=" w-fit gap-5 ml-10 overflow-hidden flex flex-col relative hover:scale-105 duration-300 ">
      <div className="absolute  rounded-xl h-full overflow-hidden p-5 z-30 text-white flex flex-col justify-center gap-3 ">
        <p className="font-bold text-5xl">{props.mainText}</p>
        <p>{props.subText}</p>
        <button className="bg-white text-black h-10 rounded-lg hover:bg-orange-400 hover:text-white ">
          Order Now
        </button>
      </div>
      <div className="bg-black">
        <img
          src={props.img}
          alt=""
          className="w-[400px] opacity-50  h-auto object-cover rounded-sm "
        />
      </div>
    </div>
  );
};

export default CardLayout;
