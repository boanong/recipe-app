/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useEffect, useState } from 'react';
import { getFromLocalStorage } from '../services/utils';

const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [foodData, setFoodData] = useState([]);
  const [foodEdit, setFoodEdit] = useState({
    name: '',
    src: '',
    recipe: '',
    fav: false,
  });

  useEffect(() => {
    const dataitems = getFromLocalStorage('foodData');
    setFoodData(dataitems);
  }, []);

  return (
    <MyContext.Provider
      value={{ foodData, setFoodData, foodEdit, setFoodEdit }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useMyContext = () => useContext(MyContext);

export default MyContext;
