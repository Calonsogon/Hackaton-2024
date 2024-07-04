const InputAque = ({ value, onChange }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor="Aque">A qué</label>
      <input
        type="text"
        className="form-control"
        id="Aque"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputAque;
