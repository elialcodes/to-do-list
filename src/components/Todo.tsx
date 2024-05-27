//definimos el tipado de las props que recibe el componente Todo:
//ampliamos el tipado global ITodo creando una interface
//que añade los tipados de las funciones onRemoveTodo y onToggleCompleteTodo:
//tipamos sus argumentos y tienen un retorno vacío

interface TodoProps extends ITodo {
  onRemoveTodo: (id: string) => void;
  onToggleCompleteTodo: (id: string, completed: boolean) => void;
}
const Todo = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo,
}: TodoProps): JSX.Element => {
  //tipamos esta función manejadora, si hacemos hover sobre el onChange del HTML,
  //Typescript nos indica que es un evento React.ChangeEvent<HTMLInputElement>
  //y el retorno de la función es vacío
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo(id, event.target.checked);
  };

  return (
    <div id={id} className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => onRemoveTodo(id)}></button>
    </div>
  );
};

export default Todo;
