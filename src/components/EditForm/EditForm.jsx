/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import '../ARMZ.css';
import { getFoodStorage, updateFoodStorage } from '../../services/utils';
import MyContext from '../../context/FoodContext';

function EditForm({ setShowForm }) {
  const { setFoodData, foodEdit, setFoodEdit } = useContext(MyContext);

  const handleFileUpload = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);

    setFoodEdit((prev) => ({ ...prev, src: url }));
  };

  const handleSubmit = () => {
    if (!foodEdit.name || !foodEdit.src || !foodEdit.recipe) {
      return;
    }
    const foodName = JSON.parse(sessionStorage.getItem('foodName'));
    const prevData = getFoodStorage();

    const localData = prevData.map((item) => {
      if (item.name === foodName) return foodEdit;

      return item;
    });

    sessionStorage.removeItem('foodName');

    updateFoodStorage(localData);
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
        value={foodEdit.name}
        onChange={(e) =>
          setFoodEdit((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <br />
      Image Source:{' '}
      <input
        type="url"
        value={foodEdit.src}
        onChange={(e) =>
          setFoodEdit((prev) => ({ ...prev, src: e.target.value }))
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
        value={foodEdit.recipe}
        onChange={(e) =>
          setFoodEdit((prev) => ({ ...prev, recipe: e.target.value }))
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

export default EditForm;
