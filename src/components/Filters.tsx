/* eslint-disable react/react-in-jsx-scope */
interface FiltersProps {
  filterSelected: string;
  onFilterChange: (filter: string) => void;
}

const Filters = ({ filterSelected, onFilterChange }: FiltersProps): JSX.Element => {
  return (
    <ul className="filters">
      <li>
        <button
          // pintar o no una clase de CSS según la variable de estado filterSelected:
          className={filterSelected === 'all' ? 'selected' : ''}
          //evento para ejecutar la función de las props y setear la variable de estado
          //filterSelect, la cual si cambia desencadena la función filteredTodos (en App) que
          //crea un array filtrado para renderizar tareas según filtro all, active o completed
          onClick={() => onFilterChange('all')}
        >
          Todas
        </button>
      </li>
      <li>
        <button
          className={filterSelected === 'active' ? 'selected' : ''}
          onClick={() => onFilterChange('active')} //se mostrarán las tareas activas
        >
          Activas
        </button>
      </li>
      <li>
        <button
          className={filterSelected === 'completed' ? 'selected' : ''}
          onClick={() => onFilterChange('completed')} //se mostrarán las tareas completadas
        >
          Completas
        </button>
      </li>
    </ul>
  );
};

export default Filters;
