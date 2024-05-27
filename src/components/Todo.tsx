//definimos el tipado de las props que recibe el componente Todo:
//ampliamos el tipado global ITodo creando una interface
//que añada el tipado de la función onRemoveTodo:
//esta función recibe como argumento un string y tiene un retorno vacío

interface TodoProps extends ITodo {
  onRemoveTodo: (id: string) => void;
}
const Todo = ({ id, title, completed, onRemoveTodo }: TodoProps): JSX.Element => {
  return (
    <div id={id} className="view">
      <input className="toogle" type="checkbox" checked={completed} onChange={() => {}} />
      <label>{title}</label>
      <button className="destroy" onClick={() => onRemoveTodo(id)}></button>
    </div>
  );
};

export default Todo;
