/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import ARMZ from './ARMZ';
import './foodContainer.css';
import RecipeCard from './RecipeCard';
import EditForm from './EditForm/EditForm';

export default function FoodContainer({ displayData, deleteRecipe }) {
  const [showForm, setShowForm] = useState({
    createNew: false,
    editForm: false,
  });

  return (
    <>
      {showForm.createNew && <ARMZ setShowForm={setShowForm} />}
      {showForm.editForm && <EditForm setShowForm={setShowForm} />}

      <div className="cards">
        {displayData?.map((item) => {
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
