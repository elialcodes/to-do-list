import { useState } from 'react';
interface CreateTodoProps {
  onAddTodo: (title: string) => void;
}

const CreateTodo = ({ onAddTodo }: CreateTodoProps) => {
  const [inputValue, setInputValue] = useState(''); //variable de estado del valor del input

  //función manejadora asociada al evento (pues lleva event como argumento), con ella:
  // - pasamos event.preventDefault al formulario (si hacemos hover con el ratón
  //   en el onSubmit del return, vemos como tipar el evento)
  // - ejecutar la función saveTodo para añadir al array de "todos" una tarea nueva
  //   con el valor del input (que será el title de la tarea)
  // - ejecutar setInputValue para poner el input vacío tras añadir la tarea
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue('');
  };

  //función manejadora asociada al evento (pues lleva event como argumento),
  //si hacemos hover con el ratón en el onChange del return, vemos como tipar el evento
  //con ella recogermos el valor de la variable de estado inputValue y la seteamos
  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="new-todo"
        type="text"
        placeholder="¿Qué quieres hacer?"
        value={inputValue}
        onChange={handleInputValue}
      />
    </form>
  );
};

export default CreateTodo;
