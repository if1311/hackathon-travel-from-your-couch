import React, { Component } from "react";
import "./Carousel.css";
import RandomButton from "./RandomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-tilt";

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullscreen: false,
			categories: [
				{
					category: "Beach",
					image: require("../carousel-images/beach3.jpg"),
					gradient: "linear-gradient(to bottom, #f7ff00, #db36a4)",
				},
				{
					category: "Mountain",
					image: require("../carousel-images/mountain2.jpg"),
					gradient: "linear-gradient(to bottom, #bdc3c7, #2c3e50)",
				},
				{
					category: "City",
					image: require("../carousel-images/city4.jpg"),
					gradient: "linear-gradient(to bottom, #000000, #434343)",
				},
				{
					category: "Park",
					image: require("../carousel-images/park2.jpg"),
					gradient: "linear-gradient(to bottom, #00f260, #0575e6)",
				},
				{
					category: "Forest",
					image: require("../carousel-images/forest2.jpg"),
					gradient: "linear-gradient(to bottom, #5a3f37, #2c7744)",
				},
			],
			currentCategory: [
				{
					category: "beach",
					image:
						"https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.freepngimg.com%2Fthumb%2Fvirus%2F2-2-virus-free-png-image-thumb.png&sp=1588165662T0832cb60f18276a6b3ef386d996d429c1520fc04ae94fd7490dc1ea3de1cd22e",
				},
			],
			index: 0,
		};
	}

	handleClick = () => {
		this.setState({ fullscreen: !this.state.fullscreen });
	};

	goForward = () => {
		if (this.state.index === this.state.categories.length - 1) {
			this.setState({ index: 0, currentCategory: [this.state.categories[0]] });
		} else {
			this.setState({ index: this.state.index + 1, currentCategory: [this.state.categories[this.state.index + 1]] });
		}
	};

	goBack = () => {
		if (this.state.index === 0) {
			this.setState({ index: this.state.categories.length - 1, currentCategory: [this.state.categories[this.state.categories.length - 1]] });
		} else {
			this.setState({ index: this.state.index - 1, currentCategory: [this.state.categories[this.state.index - 1]] });
		}
	};

	goHome = () => {
		this.setState({ fullscreen: !this.state.fullscreen });
	};

	render() {
		return (
			<div className="container">
				<Tilt className="Tilt" options={{ max: 25, perspective: 5000, speed: 400, transition: true, easing: "cubic-bezier(.03,.98,.52,.99)" }}>
					<div className={this.state.fullscreen ? "hidden" : "homepageCarousel"}>
						<h1>{this.state.categories[this.state.index].category}</h1>

						<div className="categories">
							<FontAwesomeIcon onClick={this.goBack} icon={faCaretLeft} size="9x" className="arrows" color="white" />
							<img alt="lala" src={this.state.categories[this.state.index].image} onClick={this.handleClick}></img>
							<FontAwesomeIcon className="arrows" onClick={this.goForward} icon={faCaretRight} size="9x" color="white" />
						</div>
					</div>
				</Tilt>
				<div className={this.state.fullscreen ? "fullScreen" : "hidden"}>
					<button onClick={this.goHome}>Home</button>
					<div className="fsPlayer">
						<video width="90%" height="80%" controls onClick={this.handleClick}></video>
					</div>
					<div className="controls">
						<FontAwesomeIcon onClick={this.goBack} icon={faCaretLeft} size="9x" className="arrows" color="white" />
						{/* <button onClick={this.goBack}>Back</button> */}
						<div classname="details">
							<h3>Description</h3>
							<p>Some details go here</p>
						</div>
						<FontAwesomeIcon className="arrows" onClick={this.goForward} icon={faCaretRight} size="9x" color="white" />
						{/* <button onClick={this.goForward}>Forward</button> */}
					</div>
				</div>
				{/* <RandomButton array={[1, 2, 3, 4, 5, 6]} /> */}
			</div>
		);
	}
}
