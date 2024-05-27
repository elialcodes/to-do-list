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

  const handleRemove = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (id: string, completed: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
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
