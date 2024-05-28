import Filters from './Filters.jsx';

interface FooterProps {
  activeCount: number;
  completedCount: number;
  filterSelected: string;
  onClearCompleted: () => void;
  handleFilterChange: (filter: string) => void;
}
const Footer = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange,
}: FooterProps): JSX.Element => {
  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} tareas pendientes</span>
      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
    </footer>
  );
};

export default Footer;
