import React, { useEffect, useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../../services/utils';
import FoodContainer from '../FoodContainer';
import { useMyContext } from '../../context/FoodContext';
import SearchForm from '../SearchForm/SearchForm';

export default function Favourite() {
  const [favourites, setFavourites] = useState(null);

  const { foodData } = useMyContext();

  const deleteRecipe = (name) => {
    const update = getFromLocalStorage('foodData').filter(
      (food) => food.name !== name
    );

    saveToLocalStorage('foodData', update);
    setFavourites([...foodData.filter((food) => food.fav)]);
  };

  useEffect(() => {
    if (foodData) {
      const favs = foodData.filter((food) => food.fav === true);
      setFavourites([...favs]);
    }
  }, [foodData]);

  return (
    <div>
      <SearchForm />

      <h1 className="favourite">Your favourite meals will appear here</h1>

      {favourites && (
        <FoodContainer displayData={favourites} deleteRecipe={deleteRecipe} />
      )}
    </div>
  );
}
