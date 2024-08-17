import { useState } from 'react';
interface CreateTodoProps {
  onAddTodo: (title: string) => void;
}

const CreateTodo = ({ onAddTodo }: CreateTodoProps) => {
  const [inputValue, setInputValue] = useState(''); //variable estado del valor del input

  //función manejadora del input y asociada al evento (event es el argumento):
  //si hacemos hover con el ratón en el onChange del return, vemos como tipar el evento
  //con ella recogermos el valor del input y seteamos la variable de estado
  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputValue(value);
  };

  //función manejadora del formulario y asociada al evento (event es el argumento):
  // - pasamos event.preventDefault al formulario (si hacemos hover con el ratón
  //   en el onSubmit del return, vemos como tipar el evento)
  // - ejecutamos la función onAddTodo para añadir al array de "todos" una tarea nueva
  //   con el valor del input (que será el title de la tarea)
  // - ejecutamos setInputValue para poner el input vacío tras añadir la tarea
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue('');
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
