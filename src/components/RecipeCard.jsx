/* eslint-disable react/prop-types */
import React from 'react';
import './RecipeCard.css';

function RecipeCard({ image, name, onDelete }) {
  const recipeCardStyle = {
    background: 'white',
  };

  return (
    <div className="reciperCard" style={recipeCardStyle}>
      <div className="imagediv">
        <img src={image} alt="No_Image" />
      </div>
      <div className="detailsdiv">
        <p>{name}</p>
        <div className="bottom">
          <button type="button" onClick={onDelete}>
            Delete Recipe
          </button>
          <div>
            <i className="fas fa-edit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
