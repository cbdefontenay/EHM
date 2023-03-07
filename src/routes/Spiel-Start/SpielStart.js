import { useContext } from "react";
import NavbarButton from "../../components/Nav-Bar-Buttons/NavBarButton";
import UserNameContext from "../../components/Context/UserNameContext ";
import "./spiel-start.styles.scss";
import { Link } from "react-router-dom";

const SpielStart = () => {
  const userName = useContext(UserNameContext);

  return (
    <>
      <NavbarButton />

      <div className="spiel-start-container">
        <h1>Prima {userName}!</h1>
        <p>
          Bedient die Steuerknöpfe und hält den Kurs! Maus und Tastatur gehören
          nun allein dir! <br />
          Ihr anderen stellt am besten euren Bildschirm auf Vollbild-Anzeige.
          <br />
          <br />
          An den
          <Link to="/erste">rot markierten Worten oder Zeichen</Link>
          erkennst du, {userName}, die aktiven Elemente im Spiel.
          <br />
          Mit ihnen führst du dein Team von einer Passage zur nächsten. Probier
          es einmal aus!
        </p>
      </div>
    </>
  );
};

export default SpielStart;
