/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import './App.css';
import MyContext from './context/FoodContext';
import Home from './Home/Home';
// import data from './data/foodData.json';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodEdit, setFoodEdit] = useState({
    name: '',
    src: '',
    recipe: '',
  });

  // useEffect(() => {
  //   window.localStorage.setItem('foodData', JSON.stringify(data));
  // }, [foodData]);

  useEffect(() => {
    const dataitems = JSON.parse(localStorage.getItem('foodData'));
    setFoodData(dataitems);
  }, []);

  return (
    <MyContext.Provider
      value={{ foodData, setFoodData, foodEdit, setFoodEdit }}
    >
      <Home />
    </MyContext.Provider>
  );
}

export default App;
