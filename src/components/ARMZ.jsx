/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './ARMZ.css';
import { getFromLocalStorage, saveToLocalStorage } from '../services/utils';
import { useMyContext } from '../context/FoodContext';

function ARMZ({ setShowForm }) {
  const [newFood, setNewFood] = useState({
    name: '',
    src: '',
    recipe: '',
  });

  const { setFoodData } = useMyContext();

  const handleFileUpload = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);

    setNewFood((prev) => ({ ...prev, src: url }));
  };

  const handleSubmit = () => {
    if (!newFood.name || !newFood.src || !newFood.recipe) {
      return;
    }

    const localData = getFromLocalStorage('foodData') || [];

    localData.push(newFood);
    saveToLocalStorage('foodData', localData);
    setFoodData(localData);

    setShowForm({
      createNew: false,
      editForm: false,
    });
  };

  return (
    <div className="modal">
      <button
        className="modal-button"
        type="button"
        onClick={() =>
          setShowForm({
            createNew: false,
            editForm: false,
          })
        }
      >
        Close
      </button>
      <br />
      <h2> Add New Recipe</h2>
      <br />
      Recipe Name:
      <input
        type="text"
        onChange={(e) =>
          setNewFood((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <br />
      Image Source:{' '}
      <input
        type="url"
        onChange={(e) =>
          setNewFood((prev) => ({ ...prev, src: e.target.value }))
        }
      />
      <div>
        Or
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/svg"
          onChange={handleFileUpload}
        />
      </div>
      <br />
      Recipe:
      <textarea
        cols={30}
        rows={20}
        onChange={(e) =>
          setNewFood((prev) => ({ ...prev, recipe: e.target.value }))
        }
      />
      <br />
      <button
        className="add-recipe-button"
        type="button"
        onClick={handleSubmit}
      >
        Add To Recipes
      </button>
    </div>
  );
}

export default ARMZ;
