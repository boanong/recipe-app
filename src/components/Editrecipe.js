import React from 'react';
import './Editrecipe.css';

export default function Editrecipe() {
  return (
    <div>
      <div className="edit-recipe">
        <button type="button" onClick={close}>
          Close
        </button>
        <br />
        <h2>New Recipe</h2>
        <br />
        Recipe Name: <input type="text" />
        <br />
        Image Source: <input type="text" />
        OR <input type="file" />
        <br />
        Recipe:
        <textarea cols={30} rows={20} />
        <br />
        <button type="submit">Add To Recipes</button>
      </div>
    </div>
  );
}
