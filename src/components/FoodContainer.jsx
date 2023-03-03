/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line no-unused-vars
import { useContext, useEffect, useState } from 'react';
import MyContext from '../context/FoodContext';
import ARMZ from './ARMZ';
import './foodContainer.css';
import RecipeCard from './RecipeCard';

export default function FoodContainer() {
  const { foodData, setFoodData } = useContext(MyContext);

  const deleteRecipe = (idx) =>
    setFoodData([...foodData.filter((_, id) => idx !== id)]);

  const [createModalDisplay, setCreateModalDisplay] = useState('none');

  return (
    <>
      <div style={{ display: createModalDisplay }}>
        <ARMZ
          close={() => {
            setCreateModalDisplay('none');
          }}
        />
      </div>
      <div className="cards">
        {foodData.map((item, index) => {
          return (
            <RecipeCard
              image={item.src}
              name={item.name}
              onDelete={() => {
                deleteRecipe(index);
              }}
            />
          );
        })}
      </div>
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className="add-recipe"
        onClick={() => {
          setCreateModalDisplay('initial');
        }}
      >
        <i className="fa-solid fa-circle-plus" />
        <h3 className="add">Add a recipe </h3>
      </div>
    </>
  );
}
