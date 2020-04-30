import React from "react";
import RandomButton from "./components/RandomButton";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import * as THREE from "three";
import "./App.css";
import Carousel from "./components/Carousel";

class App extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
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
  render() {
    return (
      <div ref={this.vantaRef} className="vanta">
        <Carousel />
        {/* <RandomButton array={[1, 2, 3, 4, 5, 6]} /> */}
      </div>
    );
  }
}
export default App;
