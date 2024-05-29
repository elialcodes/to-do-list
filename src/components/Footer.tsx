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
  onClearCompleted,
  handleFilterChange,
}: FooterProps): JSX.Element => {
  return (
    <footer className="footer">
      <div className="todo-counter">
        <span className="todo-count">{activeCount} tareas pendientes</span>
        <span className="todo-count">{completedCount} tareas completadas</span>
      </div>
      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar completadas
        </button>
      )}
    </footer>
  );
};

export default Footer;
