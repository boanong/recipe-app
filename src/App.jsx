/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import './App.css';
import MyContext from './context/FoodContext';
import Home from './Home/Home';

function App() {
  const [foodData, setFoodData] = useState([
    {
      name: 'Achu',
      src: 'https://legideon.org/admin/pictures/articles/606/78dd4f6928a6ba0ff1a7cf9f0aacceca.jpeg',
      recipe: '',
    },
    {
      name: 'Khati Khati',
      src: 'https://i0.wp.com/afrovitalityeats.com/wp-content/uploads/2019/06/kati-kati-chicken-with-turnip-greens.jpg?resize=695%2C1024&ssl=1',
      recipe: '',
    },
    {
      name: 'Ndole',
      src: ' https://tropicalmarket.net/wp-content/uploads/2020/06/Ndole-Crevettes.jpg',
      recipe: '',
    },
    {
      name: 'Koki',
      src: 'http://cdn.shopify.com/s/files/1/0046/8687/2649/articles/koki2.jpg?v=1620248102',
      recipe: '',
    },
  ]);

  useEffect(() => {
    window.localStorage.setItem('foodData', JSON.stringify(foodData));
  }, [foodData]);

  useEffect(() => {
    const dataitems = JSON.parse(window.localStorage.getItem('foodData'));
    if (dataitems !== null) {
      setFoodData(dataitems);
    }
  }, []);

  return (
    <MyContext.Provider value={{ foodData, setFoodData }}>
      <Home />
    </MyContext.Provider>
  );
}

export default App;
