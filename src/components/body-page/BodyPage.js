import { Link } from "react-router-dom";
import NavbarButton from "../Nav-Bar-Buttons/NavBarButton";
import "./body-page.scss";

const BodyPage = () => {
  return (
    <>
      <NavbarButton />
      <div className="container">
        <h1>Hanse in Not:</h1>
        <h1>Die Stockfisch-Intrige</h1>

        <div className="barre"></div>

        <div className="span">
          <Link to="/greetings">START</Link>
        </div>
      </div>
    </>
  );
};

export default BodyPage;
