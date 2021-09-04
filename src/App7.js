import React from "react";
import "./App.css";

class App7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  handlerClick = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h1> Классовый компонент 7</h1>
        <h3> Объявление функции как стрелочной Не рекомендуется! </h3>
        <p>
          {" "}
          handlerClick = () => [this.setState([counter:
          this.state.counter-1]);];
        </p>

        <button onClick={this.handlerClick}>
          have pressed {this.state.counter} times
        </button>
      </div>
    );
  }
}

export default App7;
