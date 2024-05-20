import React from "react";
import HeadCards from './HeadCards';
import BurgerCardOneImg from "../Images/cardBurder-one.jpg";
import BurgerCardTwoImg from "../Images/cardBurder-two.jpg";
import BurgerCardThirdImg from "../Images/cardBurder-three.jpg";

const MainCardLayout = () => {
  const prod = [
    {
      mainText: "Burger ",
      subText: "Yummy & Woowww"  ,
      img: BurgerCardOneImg 
    },
    {
      mainText: "Second-Burger ",
      subText: "Woowwwww",
      img: BurgerCardTwoImg 
    },
    {
      mainText: "Third-Burger",
      subText: "Yumm-Yumm",
      img: BurgerCardThirdImg 
    }
  ]

  return (
  <div>
    {
        prod.map((e =>{
            return  <HeadCards mainText={e.mainText} subText={e.subText} img={e.img} />
        }))
    }
   
  </div>
  );
};
export default MainCardLayout;
