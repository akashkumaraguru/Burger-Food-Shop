import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection";
import ItemCards from "./components/ItemCards";

function App() {
  return (
    <div className='p-5'>
      <Navbar />
      <HeroSection />

      <ItemCards />
    </div>
  );
}
export default App;
