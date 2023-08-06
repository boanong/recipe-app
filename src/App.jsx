import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import FOOD_DATA from './data/foodData.json';
import { getFromLocalStorage, saveToLocalStorage } from './services/utils';
import Favourite from './components/Favourite/Favourite';

if (!getFromLocalStorage('foodData')) saveToLocalStorage('foodData', FOOD_DATA);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
