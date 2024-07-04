const InputCuando = ({ value, onChange }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor="Cuando">¿Cúando?</label>
      <input
        type="date"
        className="form-control"
        
        id="Cuando"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputCuando;
