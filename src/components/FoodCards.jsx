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
      food: "Burger",
      rate: "$75",
    },
    {
      img: BurgerOne,
      food: "Burger",
      rate: "$100",
    },
    {
      img: pizzaOne,
      food: "Pizza",
      rate: "$150",
      
    },
    {
      img: ChickenFive,
      food: "Chicken",
      rate: "$200",
    },
    {
      img: frienchFries,
      food: "Friench-Fries",
      rate: "$150",
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
