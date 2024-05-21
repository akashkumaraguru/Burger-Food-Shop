import FoodItemsLayout from '../Layouts/FoodItemsLayout';
import pizzaOne from '../Images/pizzaOne.jpg';
import BurgerOne from '../Images/BurgerOne.jpg';
import ChickenFive from '../Images/ChickenFive.jpg';
import frienchFries from '../Images/frienchFries.jpg';

const FoodCards = () => {
  const foodItems = [
    {
      img: pizzaOne,
      food: "Pizza",
      rate: "$50",
    },
    {
      img: BurgerOne,
      food: "new Burger",
      rate: "$75",
    },
    {
      img: BurgerOne,
      food: "Burger",
      rate: "$50",
    },
    {
      img: pizzaOne,
      food: "Spicy Pizza",
      rate: "$70",
      
    },
    {
      img: ChickenFive,
      food: "Chicken",
      rate: "$100",
    },
    {
      img: frienchFries,
      food: "Friench-Fries",
      rate: "$50",
    },
  ];

  return (
    <div className=" flex flex-wrap  ">
     {
      foodItems.map((e => {
       return <FoodItemsLayout img={e.img} food={e.food} rate={e.rate} />;
      }))
     }
    </div>
  );
};

export default FoodCards;
