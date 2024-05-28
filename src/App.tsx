import { useState } from 'react';
import Todos from './components/Todos';

//el tipado de la constante lo dejamos a la inferencia
const mockTodos = [
  { id: '1', title: 'Aprender TypeScript', completed: true },
  {
    id: '2',
    title: 'Repasar React',
    completed: false,
  },
  {
    id: '3',
    title: 'Hacer portfolio',
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  //función para setear la variable de estado eliminando elementos del array,
  //nos devolverá los todos cuyo id no coincida con el id del evento
  const handleRemove = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  //función para setear la variable de estado,
  //cuando el usuario haga check, el evento detecta el id del todo donde
  //se ha hecho check y cual será su propiedad completed (true o false):
  const handleCompleted = (id: string, completed: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        //si el id coincide, devuelve un objeto con las propiedades del todo
        //pero actualizando la propiedad completed con el valor proporcionado
        //en el componente todo según la interación del usuario
        return { ...todo, completed };
      }
      return todo; //si no coincide, devuelve el todo sin cambios
    });
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <h1>to do list</h1>
      <Todos todos={todos} onRemoveTodo={handleRemove} onToggleCompleteTodo={handleCompleted} />
    </div>
  );
};

export default App;
