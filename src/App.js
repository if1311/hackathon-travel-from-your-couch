import React from "react";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import * as THREE from "three";
import "./App.css";
import Carousel from "./components/Carousel";
import Introduction from "./components/Introduction";

class App extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
    this.state = {
      display: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      THREE: THREE,
      color: "#7f5af0",
      color2: "#2cb67d",
      size: 1.2,
      backgroundColor: "#16161a",
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  handleClick() {
    this.setState({ display: !this.state.display });
  }

  render() {
    return (
      <div ref={this.vantaRef} className="vanta">
        <Introduction
          handleClick={this.handleClick}
          display={this.state.display}
        />
        <div style={{ display: this.state.display ? "" : "none" }}>
          <Carousel />
        </div>
      </div>
    );
  }
}

export default App;
