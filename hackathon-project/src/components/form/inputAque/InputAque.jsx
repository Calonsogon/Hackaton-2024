const options = [
  { id: '1', label: 'Senderismo' },
  { id: '2', label: 'Deporte en exteriores' },
  { id: '3', label: 'Turismo urbano' },
  { id: '4', label: 'Turismo gastronómico' },
];


const InputAque = ({ value, onChange }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor="Aque">¿A qué?</label>
      <select
        className="form-control"
        id="Aque"
        value={value}
        onChange={onChange}
      >
        <option value="">Selecciona una opción</option>
        {options.map(option => (
          <option key={option.id} value={option.label}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default InputAque;
