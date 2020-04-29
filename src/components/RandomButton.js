import React from "react";

export default function RandomButton(props) {
  function getRandomPlace(array) {
    let randomItem = array[Math.floor(Math.random() * array.length)];
    console.log(randomItem);
    // return randomItem;
  }

  return (
    <div>
      <button onClick={() => getRandomPlace(props.array)}> Random </button>
    </div>
  );
}
