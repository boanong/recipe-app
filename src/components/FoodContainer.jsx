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
import { updateFoodStorage } from '../services/utils';
import EditForm from './EditForm/EditForm';

export default function FoodContainer() {
  const { foodData, setFoodData } = useContext(MyContext);
  const [showForm, setShowForm] = useState({
    createNew: false,
    editForm: false,
  });

  const deleteRecipe = (name) => {
    const newFoodData = foodData.filter((food) => food.name !== name);
    updateFoodStorage(newFoodData);
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
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
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
