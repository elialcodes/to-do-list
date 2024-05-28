interface FiltersProps {
  filterSelected: (id: string) => void;
  onFilterChange: (id: string) => void;
}

const Filters = ({ filterSelected, onFilterChange }: FiltersProps): JSX.Element => {
  return (
    <ul className="filters">
      <li>
        <a
          className={`${filterSelected === 'all' ? 'selected' : ''}`}
          onClick={() => {
            onFilterChange('all');
          }}
        >
          Todas
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'active' ? 'selected' : ''}`}
          onClick={() => {
            onFilterChange('active');
          }}
        >
          Activas
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'completed' ? 'selected' : ''}`}
          onClick={() => {
            onFilterChange('completed');
          }}
        >
          Completas
        </a>
      </li>
    </ul>
  );
};

export default Filters;
