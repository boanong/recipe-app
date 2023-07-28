/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './RecipeCard.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { useMyContext } from '../context/FoodContext';
import { getFromLocalStorage, saveToLocalStorage } from '../services/utils';

function RecipeCard({ image, fav, name, deleteRecipe, setShowForm }) {
  const { foodData, setFoodEdit, setFoodData } = useMyContext();
  const recipeCardStyle = {
    background: 'white',
  };

  const handleEdit = () => {
    const chosenFood = foodData.find((food) => food.name === name);
    sessionStorage.setItem('foodName', JSON.stringify(chosenFood.name));
    setFoodEdit(chosenFood);
    setShowForm({
      createNew: false,
      editForm: true,
    });
  };

  const toggleFavourites = () => {
    const update = getFromLocalStorage('foodData').map((food) => {
      if (food.name === name) return { ...food, fav: !food.fav };
      return food;
    });

    saveToLocalStorage('foodData', update);
    setFoodData([...update]);
  };

  return (
    <div className="reciperCard" style={recipeCardStyle}>
      <div className="imagediv">
        <img src={image} alt="No_Image" />
      </div>
      <div className="detailsdiv">
        <p>{name}</p>
        <div className="bottom">
          <button type="button" onClick={deleteRecipe}>
            Delete Recipe
          </button>
          <span
            className="icon_span"
            style={{ color: fav ? 'red' : 'unset' }}
            onClick={toggleFavourites}
          >
            <AiOutlineHeart />
          </span>
          <div>
            <i className="fas fa-edit" onClick={handleEdit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
