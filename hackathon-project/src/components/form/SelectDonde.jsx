const SelectDonde = ({ value, onChange }) => {
    const options = [
      { id: '1', label: 'Málaga' },
      { id: '2', label: 'Madrid' },
      { id: '3', label: 'Sevilla' }
      // Aquí podrías tener más opciones obtenidas dinámicamente
    ];
  
    return (
        <div className="form-group mb-3">
          <label htmlFor="Donde">Donde</label>
          <br /> 
          <select
            className="form-control"
            id="Donde"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="">Selecciona una opción</option>
            {options.map(option => (
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>
      );
    }
  
  export default SelectDonde;
