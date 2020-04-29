import React, { Component } from "react";
import "./Carousel.css";

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullscreen: false,
			categories: [
				{
					category: "beach",
					image:
						"https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.freepngimg.com%2Fthumb%2Fvirus%2F2-2-virus-free-png-image-thumb.png&sp=1588165662T0832cb60f18276a6b3ef386d996d429c1520fc04ae94fd7490dc1ea3de1cd22e",
				},
				{
					category: "mountain",
					image:
						"https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.freepngimg.com%2Fthumb%2Fvirus%2F2-2-virus-free-png-image-thumb.png&sp=1588165662T0832cb60f18276a6b3ef386d996d429c1520fc04ae94fd7490dc1ea3de1cd22e",
				},
				{
					category: "city",
					image:
						"https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.freepngimg.com%2Fthumb%2Fvirus%2F2-2-virus-free-png-image-thumb.png&sp=1588165662T0832cb60f18276a6b3ef386d996d429c1520fc04ae94fd7490dc1ea3de1cd22e",
				},
				{
					category: "monument",
					image:
						"https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.freepngimg.com%2Fthumb%2Fvirus%2F2-2-virus-free-png-image-thumb.png&sp=1588165662T0832cb60f18276a6b3ef386d996d429c1520fc04ae94fd7490dc1ea3de1cd22e",
				},
				{
					category: "forest",
					image:
						"https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.freepngimg.com%2Fthumb%2Fvirus%2F2-2-virus-free-png-image-thumb.png&sp=1588165662T0832cb60f18276a6b3ef386d996d429c1520fc04ae94fd7490dc1ea3de1cd22e",
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
		this.setState({fullscreen: !this.state.fullscreen});
	}

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
			this.setState({ index: this.state.index - 1 });
		}
	};

	goHome = () => {
		this.setState({fullscreen: !this.state.fullscreen});
	}

	render() {
		return (
			<div className="container">
				<div className={this.state.fullscreen ? "hidden" : "homepageCarousel"}>
					<h1>{this.state.currentCategory[0].category}</h1>
					<button onClick={this.goBack}>Back</button>
					<div className="categories">
						<h3>{this.state.categories[this.state.index].category}</h3>
						<img alt="lala" src={this.state.categories[this.state.index].image} onClick={this.handleClick}></img>
					</div>
					<button onClick={this.goForward}>Forward</button>
				</div>
				<div className={this.state.fullscreen ? "fullScreen" : "hidden"}>
				<button onClick={this.goHome}>Home</button>
					<div className="fsPlayer">
						<video width="90%" height="80%" controls onClick={this.handleClick}></video>
					</div>
					<div className="controls">
						<button onClick={this.goBack}>Back</button>
							<div classname="details">
							<h3>Description</h3>
							<p>Some details go here</p>
							</div>
						<button onClick={this.goForward}>Forward</button>
					</div>
				</div>
			</div>
		);
	}
}