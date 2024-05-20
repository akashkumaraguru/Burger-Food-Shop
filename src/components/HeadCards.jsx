import React from "react";

const HeaderCards = (props) => {
  return (
    <div className="max-w-[1640px] p-4 py-12 mx-auto">

      <div className="bg-black w-fit flex flex-col relative">

        <div className="absolute w-[400px] h-full bg-black/50 rounded-xl text-white flex flex-col justify-center p-5 gap-3">
          <p className="font-bold text-5xl">{props.mainText}</p>
          <p>{props.subText}</p>
          <button className="bg-white text-black h-10 rounded-lg hover:bg-orange-400">
            Order Now
          </button>
        </div>
        <img
          src={props.img}
          alt=""
          className="w-[400px] max-h-[300px] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default HeaderCards;
