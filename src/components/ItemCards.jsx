import React from "react";
import CardLayout from "../Layouts/CardLayout";
import BurgerCardOneImg from "../Images/cardBurder-one.jpg";
import BurgerCardTwoImg from "../Images/cardBurgerTwo.jpg";
import BurgerCardThirdImg from "../Images/cardBurder-three.jpg";

const ItemCards = () => {
  const prod = [
    {
      mainText: "Burger ",
      subText: "Yummy & Woowww",
      img: BurgerCardOneImg,
    },
    {
      mainText: "Sec-Burger ",
      subText: "Woowwwww",
      img: BurgerCardTwoImg,
    },
    {
      mainText: "Third-Burger",
      subText: "Yumm-Yumm",
      img: BurgerCardThirdImg,
    },
  ];

  return (
    <div className="flex gap-10 p-5 ">
      {prod.map((e) => {
        return (
          <CardLayout mainText={e.mainText} subText={e.subText} img={e.img} />
        );
      })}
    </div>
  );
};
export default ItemCards;
