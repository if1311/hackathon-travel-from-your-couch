import React, { Component } from "react";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-tilt";
import "./iframe.css";
import Frame from "./Frame";

import { cities } from "./cities";
import { beaches } from "./beaches";
import { mountains } from "./mountains";
import { parks } from "./parks";
import { forests } from "./forests";

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullscreen: false,
			categories: [
				{
					category: "Beach",
					image: require("../carousel-images/beach3.jpg"),
					ids: beaches,
				},
				{
					category: "Mountain",
					image: require("../carousel-images/mountain2.jpg"),
					ids: mountains,
				},
				{
					category: "City",
					image: require("../carousel-images/city4.jpg"),
					ids: cities,
				},
				{
					category: "Park",
					image: require("../carousel-images/park2.jpg"),
					ids: parks,
				},
				{
					category: "Forest",
					image: require("../carousel-images/forest2.jpg"),
					ids: forests,
				},
			],
			currentCategory: beaches,
			index: 0,

			title: "",
			country: "",
			count: 0,
		};
	}

	handleClick = () => {
		console.log(beaches);

		this.setState({
			fullscreen: !this.state.fullscreen,
			title: this.state.currentCategory.result.webcams[0].title,
			country: this.state.currentCategory.result.webcams[this.state.count].location.country,
		});
	};

	goForward = () => {
		if (this.state.index === this.state.categories.length - 1) {
			this.setState({ index: 0, currentCategory: this.state.categories[0].ids });
		} else {
			this.setState({
				index: this.state.index + 1,
				currentCategory: this.state.categories[this.state.index + 1].ids,
			});
		}
	};

	goBack = () => {
		if (this.state.index === 0) {
			this.setState({
				index: this.state.categories.length - 1,
				currentCategory: this.state.categories[this.state.categories.length - 1].ids,
			});
		} else {
			this.setState({
				index: this.state.index - 1,
				currentCategory: this.state.categories[this.state.index - 1].ids,
			});
		}
	};

	goHome = () => {
		this.setState({ fullscreen: !this.state.fullscreen, count: 0, currentCategory: beaches, index: 0 });
	};

	addCount = () => {
		if (this.state.count === this.state.currentCategory.result.webcams.length) {
			this.setState({ count: 0 });
		}

		if (this.state.count === this.state.currentCategory.result.webcams.length - 1) {
			this.setState({ count: 0 });
		} else {
			this.setState({ count: this.state.count + 1 });
		}
		setTimeout(() => {
			this.setState({
				title: this.state.currentCategory.result.webcams[this.state.count].title,
				country: this.state.currentCategory.result.webcams[this.state.count].location.country,
			});
			console.log(this.state.count);
		}, 100);
	};

	removeCount = () => {
		if (this.state.count === 0) {
			this.setState({ count: this.state.currentCategory.result.webcams.length - 1 });
		} else {
			this.setState({ count: this.state.count - 1 });
		}

		setTimeout(() => {
			this.setState({
				title: this.state.currentCategory.result.webcams[this.state.count].title,
				country: this.state.currentCategory.result.webcams[this.state.count].location.country,
			});
			console.log(this.state.count);
		}, 100);
	};

	getRandomPlace = (array) => {
		let randomItem = array[Math.floor(Math.random() * array.length)];
		this.setState({ currentCategory: randomItem.ids });
		console.log(randomItem);
		setTimeout(() => {
			this.handleClick();
		}, 100);

		// return randomItem;
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
						<div>
							<a href="#" onClick={() => this.getRandomPlace(this.state.categories)} className="btn btn-white btn-animate">
								{" "}
								Take me anywhere!{" "}
							</a>
						</div>
					</div>
				</Tilt>
				<div className={this.state.fullscreen ? "fullScreen" : "hidden"}>
					<a href="#" id="home" onClick={this.goHome} className="btn btn-white btn-animate">
						{" "}
						Home{" "}
					</a>
					{/* <button id="home" onClick={this.goHome}>
						Home
					</button> */}
					<div classname="details">
						<h3>{this.state.title}</h3>
						<h3>{this.state.country}</h3>
					</div>

					<div class="main">
						<div id="leftButton">
							<FontAwesomeIcon onClick={this.addCount} icon={faCaretLeft} size="9x" className="arrows" color="white" />
						</div>
						<div className="fsPlayer">
							<Frame source={`http://webcams.windy.com/webcams/stream/${this.state.currentCategory.result.webcams[this.state.count].id}`} />
						</div>
						<div id="rightButton">
							<FontAwesomeIcon className="arrows" onClick={this.removeCount} icon={faCaretRight} size="9x" color="white" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
