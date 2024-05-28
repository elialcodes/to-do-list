import { useState } from 'react';
import Todos from './components/Todos';
import Footer from './components/Footer';

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
  const [filterSelected, setFilterSelected] = useState('all');

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

  const handleFilterChange = (filter: string): void => {
    setFilterSelected(filter);
  };

  //constante para saber las tareas donde completed no es true
  const activeCount = todos.filter((todo) => !todo.completed).length;

  //constante para saber las tareas que están completas
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === 'active') {
      return !todo.completed;
    }
    if (filterSelected === 'completed') {
      return todo.completed;
    } else {
      return todo;
    }
  });

  return (
    <div className="todoapp">
      <h1>to do list</h1>
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={() => {}}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
