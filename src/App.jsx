import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection";
import ItemCards from "./components/ItemCards";
import FoodCategories from './components/FoodCategories';
import FoodCards from './components/FoodCards';

function App() {
  return (
    <div className='p-5'>
      <Navbar />
      <HeroSection />
      <ItemCards />
      <FoodCategories/>
      <FoodCards />
      
    </div>
  );
}
export default App;
