import React, { Component } from "react";
import "./Carousel.css";
import RandomButton from "./RandomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-tilt";
import "./iframe.css";
import Frame from "./Frame";
import "./ids";
import { beachesIds, forestIds, mountainIds, cityIds, parkIds } from "./ids";
import axios from "axios";

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullscreen: false,
			categories: [
				{
					category: "Beach",
					image: require("../carousel-images/beach3.jpg"),
					ids: beachesIds,
				},
				{
					category: "Mountain",
					image: require("../carousel-images/mountain2.jpg"),
					ids: mountainIds,
				},
				{
					category: "City",
					image: require("../carousel-images/city4.jpg"),
					ids: cityIds,
				},
				{
					category: "Park",
					image: require("../carousel-images/park2.jpg"),
					ids: parkIds,
				},
				{
					category: "Forest",
					image: require("../carousel-images/forest2.jpg"),
					ids: forestIds,
				},
			],
			currentCategory: beachesIds,
			index: 0,

			title: "",
			country: "",
			count: 0,
		};
	}

	apiCall = (id) => {
		axios
			.get(`https://api.windy.com/api/webcams/v2/list/webcam=${id}?key=bosszrGokuaDZsdFBCa4IXzhPmIQGMzc&show=webcams:location`)
			.then((res) => res.data)
			.then((data) =>
				this.setState({
					title: data.result.webcams[0].title,
					country: data.result.webcams[0].location.country,
				})
			);
	};

	handleClick = () => {
		this.apiCall(this.state.currentCategory[0]);

		this.setState({ fullscreen: !this.state.fullscreen });
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
		this.setState({ fullscreen: !this.state.fullscreen, count: 0, currentCategory: beachesIds });
	};

	addCount = () => {
		if (this.state.count === this.state.currentCategory.length) {
			this.setState({ count: 0 });
		}
		setTimeout(() => {
			this.apiCall(this.state.currentCategory[this.state.count + 1]);
		}, 100);

		if (this.state.count === this.state.currentCategory.length - 1) {
			this.setState({ count: 0 });
		} else {
			this.setState({ count: this.state.count + 1 });
		}
		setTimeout(() => {
			console.log(this.state.count);
		}, 100);
	};

	removeCount = () => {
		if (this.state.count === 0) {
			this.setState({ count: this.state.currentCategory.length - 1 });
			this.apiCall(this.state.currentCategory[this.state.count]);
		} else {
			this.setState({ count: this.state.count - 1 });
			this.apiCall(this.state.currentCategory[this.state.count - 1]);
		}
		setTimeout(() => {
			console.log(this.state.count);
		}, 100);
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
						<RandomButton array={[1, 2, 3, 4, 5, 6]} />
					</div>
				</Tilt>
				<div className={this.state.fullscreen ? "fullScreen" : "hidden"}>
					<button onClick={this.goHome}>Home</button>
					<div className="details">
						<h3>{this.state.title}</h3>
						<h3>{this.state.country}</h3>
					</div>
					<div className="fsPlayer">
						<Frame source={`http://webcams.windy.com/webcams/stream/${this.state.currentCategory[this.state.count]}`} />
					</div>

					<div className="controls">
						<FontAwesomeIcon onClick={this.removeCount} icon={faCaretLeft} size="9x" className="arrows" color="white" />

						<FontAwesomeIcon className="arrows" onClick={this.addCount} icon={faCaretRight} size="9x" color="white" />
					</div>
				</div>
			</div>
		);
	}
}
