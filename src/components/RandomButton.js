import React from "react";
import "./Carousel.css";

export default function RandomButton(props) {
	function getRandomPlace(array) {
		let randomItem = array[Math.floor(Math.random() * array.length)];
		console.log(randomItem);
		// return randomItem;
	}

	return (
		<div>
			<a href="#" className="btn btn-white btn-animate" onClick={() => getRandomPlace(props.array)}>
				{" "}
				Random{" "}
			</a>
		</div>
	);
}
