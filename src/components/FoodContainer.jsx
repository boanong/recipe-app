/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
        {foodData?.map((item) => {
          return (
            <RecipeCard
              key={item.name}
              image={item.src}
              name={item.name}
              fav={item.fav}
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
