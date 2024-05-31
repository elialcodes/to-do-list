import Filters from './Filters.jsx';

interface FooterProps {
  activeCount: number;
  completedCount: number;
  filterSelected: string;
  onClearCompleted: () => void;
  handleFilterChange: (filter: string) => void;
}
const Footer = ({
  activeCount,
  completedCount,
  filterSelected,
  handleFilterChange,
  onClearCompleted,
}: FooterProps): JSX.Element => {
  return (
    <footer className="footer">
      <div className="todo-counter">
        <span className="todo-count">tareas pendientes: {activeCount}</span>
        <span className="todo-count">tareas completadas: {completedCount}</span>
      </div>
      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
      {/*El operador && evalúa la segunda expresión solo si la primera es verdadera.
      En este caso, si completedCount > 0 es verdadero, entonces la expresión ( ... )
      se evalúa y su contenido se renderiza. Útil cuando no podemos usar un ternario*/}
      {completedCount > 0 && (
        <a className="clear-completed" onClick={onClearCompleted}>
          Borrar completadas
        </a>
      )}
    </footer>
  );
};

export default Footer;
