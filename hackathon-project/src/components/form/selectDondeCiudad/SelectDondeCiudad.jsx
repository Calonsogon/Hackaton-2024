import useApi from "../../../services/useApi";

const SelectDondeCiudad2 = ({ value, onChange, comunity }) => {
  console.log(comunity);
  const cities =
    useApi(
      `https://apiv1.geoapi.es/provincias?CCOM=${comunity}&type=JSON&key=4dc9d95e5d1db37e4fd1b2e4731002d6728fce61cdbc4a83f604c0653326d8da`
    ) || [];

  const options = cities.data
    ? cities.data.map((city) => ({
        value: city.PRO,
        name: city.PRO,
      }))
    : [];

  return (
    <div className="form-group mb-3">
      <label htmlFor="DondeCiudad">¿Ciudad?</label>
      <br />
      <select
        className="form-control"
        id="DondeCiudad"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Selecciona una opción</option>
        {options.map((option) => (
          <option key={option.city} value={option.city}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDondeCiudad2;
