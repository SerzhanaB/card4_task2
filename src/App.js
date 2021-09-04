import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const handlerClick = (event) => {
    setCounter(counter - 2);
    console.log(event);
  };

  const handlerMouseEnter = (event) => {
    console.log("handlerMouseEnter");
  };

  const handlerMouseLeave = (event) => {
    console.log("handlerMouseLeave");
  };

  return (
    <div>
     <h1> Функциональный компонент 1</h1>
  
    <button
      onClick={handlerClick}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}>
     have pressed {counter} times
    </button>
    </div>
  );

}

export default App;
