import React from "react";
import "./App.css";

function App2() {
  const handlerClick = (event) => {
    event.preventDefault();
    console.log("Нажали на ссылку");
  };

  const handlerClick2 = (event) => {
    console.log("Нажали на ссылку");
  };

  return (
    <div>
      <h1> Функциональный компонент 2</h1>
      <p>
        <a
          href="https://www.youtube.com/embed/hZcKg7c7lbQ"
          onClick={handlerClick}
        >
          {" "}
          link without jump
        </a>{" "}
      </p>

      <p>
        <a
          href="https://www.youtube.com/embed/hZcKg7c7lbQ"
          onClick={handlerClick2}
        >
          {" "}
          link with jump
        </a>{" "}
      </p>
    </div>
  );
}

export default App2;
