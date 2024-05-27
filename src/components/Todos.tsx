import Todo from './Todo';

//definimos el tipado de las props que recibe el componente Todos,
//será el tipado global IListOfTodos y algunos tipados nuevos añadidos
interface TodosProps {
  todos: IListOfTodos;
  onRemoveTodo: (id: string) => void;
  onToggleCompleteTodo: (id: string, completed: boolean) => void;
}

const Todos = ({ todos, onRemoveTodo, onToggleCompleteTodo }: TodosProps): JSX.Element => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        // con un condicional ternario añadimos o no la clase "completed":
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
