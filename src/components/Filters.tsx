interface FiltersProps {
  filterSelected: string;
  onFilterChange: (filter: string) => void;
}

const Filters = ({ filterSelected, onFilterChange }: FiltersProps): JSX.Element => {
  return (
    <ul className="filters">
      <li>
        <a
          href="#"
          // pintar o no una clase de CSS según la variable de estado filterSelected:
          className={filterSelected === 'all' ? 'selected' : ''}
          //evento para ejecutar la función de las props y setear la variable de estado
          //filterSelect, la cual si cambia desencadena la función filteredTodos (en App) que
          //crea un array filtrado para renderizar tareas según filtro all, active o completed
          onClick={() => onFilterChange('all')}
        >
          Todas
        </a>
      </li>
      <li>
        <a
          href="#"
          className={filterSelected === 'active' ? 'selected' : ''}
          onClick={() => onFilterChange('active')} //se mostrarán las tareas activas
        >
          Activas
        </a>
      </li>
      <li>
        <a
          href="#"
          className={filterSelected === 'completed' ? 'selected' : ''}
          onClick={() => onFilterChange('completed')} //se mostrarán las tareas completadas
        >
          Completas
        </a>
      </li>
    </ul>
  );
};

export default Filters;
