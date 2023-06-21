export const updateFoodStorage = (update) =>
  localStorage.setItem('foodData', JSON.stringify(update));

export const getFoodStorage = () =>
  JSON.parse(localStorage.getItem('foodData'));
