//función que obtiene el local storage
//si no hay nada, la función devuelve el valor
//defaultValue así esta comprobación no la tenemos que hacer en App.js
const get = (key, defaultValue) => {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData === null) {
    return defaultValue;
  } else {
    return JSON.parse(localStorageData);
  }
};

//función que guarda el nombre de un objeto (la key)
//y su valor en el local storage
const set = (key, value) => {
  const localStorageData = JSON.stringify(value);
  localStorage.setItem(key, localStorageData);
};

//creamos un objeto, que es el que queremos exportar,
//con todas las funciones
const objectToExport = {
  get: get,
  set: set,
};

// Exportamos el objeto para que pueda ser usado desde App
export default objectToExport;
