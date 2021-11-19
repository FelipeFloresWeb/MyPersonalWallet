export const setToLocalStorage = (key, element) => localStorage
  .setItem(key, JSON.stringify(element));

export const getItemFromLocalStorage = (key) => (localStorage.length < 1 ? '' : JSON.parse(localStorage.getItem(key)));
