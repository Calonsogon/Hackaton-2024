import "./Button.scss";
import { Link } from "react-router-dom";

function AddButtonHome() {
  return (
    <Link to="/Form">
      <button
        type="button"
        id="button"
        className="btn btn-lg btn-primary"
        disabled
      >
        Ir al formulario
      </button>
    </Link>
  );
}

export default AddButtonHome;
