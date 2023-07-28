/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { useMyContext } from '../context/FoodContext';
import ARMZ from './ARMZ';
import './foodContainer.css';
import RecipeCard from './RecipeCard';
import { saveToLocalStorage } from '../services/utils';
import EditForm from './EditForm/EditForm';

export default function FoodContainer() {
  const { foodData, setFoodData } = useMyContext();
  const [showForm, setShowForm] = useState({
    createNew: false,
    editForm: false,
  });

  const deleteRecipe = (name) => {
    const newFoodData = foodData.filter((food) => food.name !== name);
    saveToLocalStorage('foodData', newFoodData);
    setFoodData([...newFoodData]);
  };

  return (
    <>
      {showForm.createNew && <ARMZ setShowForm={setShowForm} />}
      {showForm.editForm && <EditForm setShowForm={setShowForm} />}
      <div className="cards">
        {foodData?.map((item, index) => {
          return (
            <RecipeCard
              key={item.name + index}
              image={item.src}
              name={item.name}
              deleteRecipe={() => deleteRecipe(item.name)}
              setShowForm={setShowForm}
            />
          );
        })}
      </div>
      <div
        className="add-recipe"
        onClick={() =>
          setShowForm({
            createNew: true,
            editForm: false,
          })
        }
      >
        <i className="fa-solid fa-circle-plus" />
        <h3 className="add">Add a recipe </h3>
      </div>
    </>
  );
}
