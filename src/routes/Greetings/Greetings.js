import { Link } from "react-router-dom";
import Emoji from "../../components/emoji/emoji";
import NavbarButton from "../../components/Nav-Bar-Buttons/NavBarButton";
import "./Greetings.styles.scss";

const Greetings = () => {
  return (
    <>
      <NavbarButton />
      <div className="greetings-container">
        <div className="gif">
          <Emoji />
        </div>
        <div className="title">
          <h1>
            Goden Dag, <br /> geachte Damen un Herren!
          </h1>
        </div>
        <div className="greeting-text">
          <p className="text">
            Ich bin Tieden Snirge und nehme euch mit auf eine Reise durch den
            Tiedenloop mittenmank in die Hansegeschichte.{" "}
          </p>
          <br />
          <p className="text">
            Am besten vergesst ihr alles, was ihr je über "Die Hanse" gehört
            habt.
          </p>

          <br />
          <p className="text">
            Um die Hanse zu verstehen, geht ihr heute selbst als Koplüde auf
            Handelsreise und werdet ein Teil ihrer Geschichte. <br />
            <Link to="/anfang"> ➽ ➽ ➽ hier klicken</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Greetings;
