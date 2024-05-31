import { useState, useEffect } from 'react';
import localStorage from './services/localStorage';
import Header from './components/Header';
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
  const [filterSelected, setFilterSelected] = useState('all');

  //variable de estado para las tareas: obtenemos los datos de local storage
  //si hay datos, los seteamos en el useState, si no, seteamos la variable mockTodos
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.get('savedTodos');
    return savedTodos ? JSON.parse(savedTodos) : mockTodos;
  });

  //usamos useEffect para guardar los datos en el local storage,
  //solo se ejecutará cuando cambie el array de dependencias "todos"
  useEffect(() => {
    localStorage.set('savedTodos', todos);
  }, [todos]);

  //función para añadir una tarea a la que sólo le pasamos como argumento
  //el title (pues es lo único que puede cambiar ya que el id lo generamos y
  //la propiedad completed será false)
  //creamos una tarea nueva a la que pasamos el tipado global ITodo y nos
  //devolverá un array para renderizar que contiene los
  //"todos" que ya están en la variable de estado y la nueva tarea
  const handleAddTodo = (title: string): void => {
    const newTodo: ITodo = {
      id: crypto.randomUUID(), //con esta función añadimos un id random
      title,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  //función para eliminar tareas con un botón X en cada una: nos devolverá un array para
  //renderizar todas las tareas cuyo id no coincida con el id del evento
  //y seteará la variable de estado "todos"
  const handleRemove = (id: string) => {
    const newTodos = todos.filter((todo: ITodo) => todo.id !== id);
    setTodos(newTodos);
  };

  //función para eliminar todas las tareas completadas: con un filter nos devolverá
  //un array para renderizar las tareas que están no completas
  //y seteará la variabale de estado "todos"
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo: ITodo) => !todo.completed);
    setTodos(newTodos);
  };

  //función para completar tareas: cuando el usuario hace click en un checkbutton,
  //el evento detecta el id de la tarea en cuestión, la propiedad completed cambia
  //de valor (true o false), se tachará con css y se seteará la variable de estado "todos"
  const handleCompleted = (id: string, completed: boolean) => {
    const newTodos = todos.map((todo: ITodo) => {
      if (todo.id === id) {
        //comprueba en cada tarea si el id coincide, y si es así, la devuelve en el objeto
        //"todo" pero actualizando su propiedad completed con el valor
        //proporcionado en el componente Todo según la interación del usuario
        return { ...todo, completed };
      }
      return todo; //si no coincide, devuelve el objeto "todo" sin cambios
    });
    setTodos(newTodos); //nuevo array de objetos para renderizar
  };

  //función para setear la variable de estado filterSelected:
  //el usuario escogerá un filtro para mostrar las tareas (all, active, completed)
  //y se seteará la variable de estado filterSelected
  const handleFilterChange = (filter: string): void => {
    setFilterSelected(filter);
  };

  //según el valor de la variable de estado filterSelected, creamos una función que
  //devuelve un array para renderizar las tareas filtradas según el filtro escogido
  const filteredTodos = todos.filter((todo: ITodo) => {
    if (filterSelected === 'active') {
      return !todo.completed;
    }
    if (filterSelected === 'completed') {
      return todo.completed;
    } else {
      return todo;
    }
  });

  //constante para saber el nº de tareas activas (donde completed no es true)
  const activeCount = todos.filter((todo: ITodo) => !todo.completed).length;

  //constante para saber el nº de tareas que están completas
  const completedCount = todos.length - activeCount;

  return (
    <div className="todoapp">
      <Header
        onAddTodo={handleAddTodo} //añadir tarea
      />
      <Todos
        todos={filteredTodos} //array de tareas según el filtro seleccionado
        onRemoveTodo={handleRemove} //borrar tareas con el botón X
        onToggleCompleteTodo={handleCompleted} //completar tareas
      />
      <Footer
        activeCount={activeCount} //tareas activas
        completedCount={completedCount} //tareas completadas
        filterSelected={filterSelected} //variable de estado: filtro selecionado
        handleFilterChange={handleFilterChange} //detecta el filtro seleccionado
        onClearCompleted={handleRemoveAllCompleted} //borrar todas las tareas completadas
      />
    </div>
  );
};

export default App;
