import "./Button.scss";
import { Link } from "react-router-dom";

function AddButtonHome() {
  return (
    <Link to="/Form">
      <button type="button" className="btn btn-secondary">
        Ir al formulario
      </button>
    </Link>
  );
}

export default AddButtonHome;
