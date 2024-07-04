import { Link } from "react-router-dom";
import "./homepage/HomePage.scss";
import Welcome from "../components/welcome/Welcome";
import Logo from "../components/logo/Logo";
import Lema from "../components/lema/Lema";
import Button from "../components/button/Button";

const HomePage = () => {
  return (
    <div className="background-page">
      <div id="containerwelcome">
        <Welcome></Welcome>
        <Logo></Logo>
      </div>
      <div id="containerLema">
        <Lema></Lema>
      </div>
      <div id="containerButton">
        <Button></Button>
      </div>
    </div>
  );
};

export default HomePage;
