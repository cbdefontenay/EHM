import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarButton from "../Nav-Bar-Buttons/NavBarButton";
import Modal from "react-modal";
import "./name-form.styles.scss";

function NameForm({ setUserName }) {
  const [name, setName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length < 3) {
      setShowAlert(true);
    } else {
      setUserName(name);
      navigate("/spiel");
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <NavbarButton />
      <div className="name-form-container">
        <div className="input-name">
          <p>
            Wer von euch navigiert ab hier das Team durchs Spiel? (Bildschirm
            teilen, Worte tippen, Links weiterklicken usw.) Trage deinen Namen
            in die Zeile ein.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              className="input-field"
              type="name"
              value={name}
              placeholder="Name"
              onChange={handleChange}
            />

            <button className="button" type="button" onClick={handleSubmit}>
              OK
            </button>
          </form>
        </div>
      </div>
      <Modal
        isOpen={showAlert}
        onRequestClose={() => setShowAlert(false)}
        className="modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            backgroundColor: "#fff",
            borderRadius: "5%",
            maxWidth: "50%",
            padding: "2rem",
          },
        }}
      >
        <p>Bitte, schreiben Sie mindestens drei Buchstaben</p>
        <button onClick={() => setShowAlert(false)}>OK</button>
      </Modal>
    </>
  );
}

export default NameForm;
