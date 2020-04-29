import React from "react";

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
    return(<div ref={this.vantaRef} className="vanta">
            <Carousel />
           </div>) ;
  }

}
export default App;
