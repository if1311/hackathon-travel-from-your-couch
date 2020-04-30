import React from "react";
import "./Introduction.css";
import { Wave } from "react-animated-text";

function Introduction(props) {
  return (
    <div
      className="container-intro"
      style={{ display: props.display ? "none" : "" }}
    >
      <div className="title">
        <h4>Bored? No problem.</h4>
      </div>
      <div className="style">
        <Wave
          text="Find your most engaging world scenes here!"
          effect="verticalFadeIn"
          effectChange={0.3}
          effectDirection="pop"
          iterations={1}
          speed="15"
        />
      </div>

      <div className="contain-btn">
        <a
          href="#"
          className="btn btn2-white btn2-animate button"
          onClick={props.handleClick}
        >
          {" "}
          Click Me{" "}
        </a>
      </div>
    </div>
  );
}

export default Introduction;
