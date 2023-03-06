import React from "react";
import Ship from "../../assets/ship.gif";
import "./emoji.scss";

const Emoji = () => {
  return (
    <div className="emoji">
      <img src={Ship} alt="ship" />
    </div>
  );
};

export default Emoji;
