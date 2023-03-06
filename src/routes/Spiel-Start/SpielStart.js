import { useContext } from "react";
import NavbarButton from "../../components/Nav-Bar-Buttons/NavBarButton";
import UserNameContext from "../../components/Context/UserNameContext ";
import "./spiel-start.styles.scss";

const SpielStart = () => {
  const userName = useContext(UserNameContext);

  return (
    <>
      <NavbarButton />

      <div className="spiel-start-container">
        <h2>Prima {userName}!</h2>
        <p>
          bedient die Steuerknöpfe und hält den Kurs! Maus und Tastatur gehören
          nun allein dir! Ihr anderen stellt am besten euren Bildschirm auf
          Vollbild-Anzeige.
        </p>
        An den rot markierten Worten oder Zeichen erkennst du, {userName}, die
        aktiven Elemente im Spiel.{" "}
        <p>
          Mit ihnen führst du dein Team von einer Passage zur nächsten. Probier
          es einmal aus!
        </p>
      </div>
    </>
  );
};

export default SpielStart;
