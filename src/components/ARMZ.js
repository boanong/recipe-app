/* eslint-disable react/prop-types */
import React from 'react';
import './ARMZ.css';

function ARMZ({ close }) {
  return (
    <div className="modal">
      <button className="modal-button" type="button" onClick={close}>
        Close
      </button>
      <br />
      <h2> Add New Recipe</h2>
      <br />
      Recipe Name: <input type="text" />
      <br />
      Image Source: <input type="text" />
      <div>
        OR <input type="file" />
      </div>
      <br />
      Recipe:
      <textarea cols={30} rows={20} />
      <br />
      <button type="submit">Add To Recipes</button>
    </div>
  );
}

export default ARMZ;
