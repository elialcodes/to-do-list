//función que obtiene el local storage: si no hay nada, la función devuelve el valor
//defaultValue (el array de objetos de App), así esta comprobación no la hacemos en App
export const get = (key: string, defaultValue: IListOfTodos): IListOfTodos => {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData === null) {
    return defaultValue;
  } else {
    return JSON.parse(localStorageData);
  }
};

//función que guarda el nombre de un objeto (la key)
//y su valor en el local storage
export const set = (key: string, value: IListOfTodos): void => {
  const localStorageData = JSON.stringify(value);
  localStorage.setItem(key, localStorageData);
};
