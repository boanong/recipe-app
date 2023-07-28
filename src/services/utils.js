export const saveToLocalStorage = (key, update) =>
  localStorage.setItem(key, JSON.stringify(update));

export const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));
