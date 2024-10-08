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
  //creamos una función manejadora que ejecuta la función onToggleCompleteTodo para
  //comprobar el atributo checked del checkbox (true o false, según un evento del usuario)
  //y setear la propiedad complete de variable de estado.
  //La tipamos: si hacemos hover sobre el onChange del HTML, Typescript nos indica que
  //es un evento React.ChangeEvent<HTMLInputElement> y el retorno de la función es vacío
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo(id, event.target.checked);
  };

  return (
    <div id={id} className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed} //será true o false según la interacción del usuario
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      {/* en vez de hacer una función manejadora (como handleChangeCheckbox)
      ejecutamos la función pasada por props en el onClick con los argumentos deseados */}
      <button className="destroy" onClick={() => onRemoveTodo(id)}></button>
    </div>
  );
};

export default Todo;
