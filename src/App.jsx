import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Herosec from './components/Herosec';
import MainCardLayout from './components/MainCardLayot';

function App() {
  return (
  <>
  <Navbar />
  <Herosec />
 
  <MainCardLayout />
  </>
  );
};
export default App;
