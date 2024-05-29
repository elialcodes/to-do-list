interface FiltersProps {
  filterSelected: string;
  onFilterChange: (filter: string) => void;
}

const Filters = ({ filterSelected, onFilterChange }: FiltersProps): JSX.Element => {
  console.log('Filters render:', filterSelected);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, filter: string) => {
    event.preventDefault();
    console.log('Selected filter:', filter);
    onFilterChange(filter);
  };
  return (
    <ul className="filters">
      <li>
        <a
          href="#"
          className={filterSelected === 'all' ? 'selected' : ''}
          onClick={(e) => handleClick(e, 'all')}
        >
          Todas
        </a>
      </li>
      <li>
        <a
          href="#"
          className={filterSelected === 'active' ? 'selected' : ''}
          onClick={(e) => handleClick(e, 'active')}
        >
          Activas
        </a>
      </li>
      <li>
        <a
          href="#"
          className={filterSelected === 'completed' ? 'selected' : ''}
          onClick={(e) => handleClick(e, 'completed')}
        >
          Completas
        </a>
      </li>
    </ul>
  );
};

export default Filters;
