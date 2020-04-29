import React from "react";
import RandomButton from "./components/RandomButton";

function App() {
  return (
    <div className="App">
      <RandomButton array={[1, 2, 3, 4, 5, 6]} />
    </div>
  );
}

export default App;
