import React from 'react';
import './App.css';
import Home from './Home/Home';
import FOOD_DATA from './data/foodData.json';
import { getFromLocalStorage, saveToLocalStorage } from './services/utils';

if (!getFromLocalStorage('foodData')) saveToLocalStorage('foodData', FOOD_DATA);
function App() {
  return <Home />;
}

export default App;
