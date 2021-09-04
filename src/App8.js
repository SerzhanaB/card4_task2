import React from "react";
import "./App.css";

class App8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        <h1> Классовый компонент 8</h1>
        <h3> Объявление функции в обработчике </h3>
        <p> onClick=[() => this.setState([counter: this.state.counter-1])] ></p>

        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          have pressed {this.state.counter} times
        </button>
      </div>
    );
  }
}

export default App8;
