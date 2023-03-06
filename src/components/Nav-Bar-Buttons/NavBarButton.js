import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./nav-bar-buttons.scss";

const NavbarButton = () => {
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <nav className="nav-bar-container">
      <FontAwesomeIcon
        icon={faArrowLeft}
        beat
        className="back-button"
        onClick={() => navigate(-1)}
      />
      <div className="button-container">
        <FontAwesomeIcon
          className="full-screen-button"
          icon={isFullscreen ? faCompress : faExpand}
          onClick={handleFullscreen}
        />
      </div>
    </nav>
  );
};

export default NavbarButton;
