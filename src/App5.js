import React from "react";
import "./App.css";

class App5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  handlerClick() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <h1> Классовый компонент 5</h1>
        <h3> Объявление функции как надо </h3>
        <h3> Способ 2 через bind</h3>
        <p> onClick=[this.handlerClick.bind(this)]</p>

        <button onClick={this.handlerClick.bind(this)}>
          have pressed {this.state.counter} times
        </button>
      </div>
    );
  }
}

export default App5;
