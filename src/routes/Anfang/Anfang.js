import { Link } from "react-router-dom";
import Emoji from "../../components/emoji/emoji";
import NavbarButton from "../../components/Nav-Bar-Buttons/NavBarButton";
import "./anfang.styles.scss";

const Anfang = () => {
  return (
    <>
      <NavbarButton />
      <div className="start-container">
        <div className="grid-container">
          <div className="anfang-container">
            <div className="gif">
              <Emoji />
            </div>
            <div className="anfang-titel">
              <h1>Juhuuuuiiiiiiii!</h1>
            </div>

            <div className="anfang-text-container">
              <p className="anfang-texts">
                Wir reisen in das Jahr 1354, genauer gesagt zum Februar anno
                Domini MCCCLIV.
              </p>
              <p className="anfang-texts">
                "Wenzel" Karl der Vierte regiert das Heilige Römische Reich und
                schielt nach der Kaiserkrone.
              </p>
              <p className="anfang-texts">
                Aber Moment. Ihr seid ja noch ganz plünnerig unterwegs, noch gar
                keine richtige Schipper-Gesellschop!
              </p>
              <p className="anfang-texts">
                Würdet ihr euch bitte einigen, wer von euch den Bildschirm
                teilt?
              </p>
              <p className="anfang-texts">
                Diese Person navigiert als Steuermaat euer Team durch die
                Geschichte.
              </p>
              <p className="anfang-texts">
                Sie oder er tippt auch mit der Tastatur, wenn im Spielverlauf
                etwas eingegeben werden soll und klickt auf die
                <Link to="/name-form">
                  <span>roten Links,</span>
                </Link>
                mit denen es weitergeht.
              </p>
            </div>
          </div>
          <div className="jahrhundert">
            <h1>21. Jahrhundert</h1>
            <h1>20. Jahrhundert</h1>
            <h1>19. Jahrhundert</h1>
            <h2>18. Jahrhundert</h2>
            <h2>17. Jahrhundert</h2>
            <h2>16. Jahrhundert</h2>
            <h3>15. Jahrhundert</h3>
            <h3>1400</h3>
            <h3>1390</h3>
            <h3>1375</h3>
            <h3>1360</h3>
            <h3>1355</h3>
            <h3 className="anno-domini">1354</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anfang;
