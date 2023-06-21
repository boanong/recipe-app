/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './RecipeCard.css';
import MyContext from '../context/FoodContext';

function RecipeCard({ image, name, deleteRecipe, setShowForm }) {
  const { foodData, setFoodEdit } = useContext(MyContext);
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
          <div>
            <i className="fas fa-edit" onClick={handleEdit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
