import { useContext } from "react";
import UserNameContext from "../../components/Context/UserNameContext ";
import NavbarButton from "../../components/Nav-Bar-Buttons/NavBarButton";
import "./first-round.styles.scss";

const FirstRound = () => {
  const userName = useContext(UserNameContext);

  return (
    <>
      <NavbarButton />
      <div className="first-round-container">
        <h1 className="first-round-title">Exakt, so geht das. </h1>
        <p className="first-round-text">
          Im Jahr <i className="italique">1354</i> hätten wohl nur wenige unter
          euch die Technik des Lesens beherrscht.
        </p>
        <p className="first-round-text">
          Habt ihr zwei Schriftkundige an Bord? Sie lesen ab jetzt alle Texte
          und Anweisungen laut vor.
        </p>
        <p className="first-round-text">
          Wer kann das übernehmen? {userName}, trage hier die <br />
          Namen der beiden Teammitglieder ein, die für euch vorlesen:
        </p>
      </div>
    </>
  );
};

export default FirstRound;
