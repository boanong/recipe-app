import React, { useEffect, useState } from 'react';
import './searchForm.css';
import { useMyContext } from '../../context/FoodContext';
import { getFromLocalStorage } from '../../services/utils';

export default function SearchForm() {
  const [searchVal, setSearchVal] = useState('');
  const { foodData, setFoodData } = useMyContext();

  const handleSearch = () => {
    const prevData = foodData;
    const searchRes = prevData.filter((food) =>
      food.name.includes(searchVal.trim())
    );

    setFoodData([...searchRes]);
  };

  useEffect(() => {
    if (searchVal.trim()) handleSearch();

    if (!searchVal.trim()) setFoodData([...getFromLocalStorage('foodData')]);
  }, [searchVal]);

  return (
    <div className="search">
      <div className="search__input">
        <input
          type="search"
          className="search"
          placeholder="Search a recipe"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </div>
    </div>
  );
}
