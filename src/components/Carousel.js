import React, { Component } from "react";

export default class Carousel extends Component {
	render() {
		return (
			<div>
				<button>Back</button>
				<div className="categories"></div>
				<button>Forward</button>
			</div>
		);
	}
}
