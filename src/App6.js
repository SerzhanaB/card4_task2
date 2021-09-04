import React from "react";
import "./App.css";

class App6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };

    this.handlerClick = this.handlerClick.bind(this);
  }
  handlerClick() {
    this.setState({ counter: this.state.counter * 3 });
  }

  render() {
    return (
      <div>
        <h1> Классовый компонент 6</h1>
        <h3> Объявление функции как надо </h3>
        <h3> Способ 3 через bind, который прописан в конструкторе</h3>
        <p> onClick=[this.handlerClick]</p>

        <button onClick={this.handlerClick}>
          have pressed {this.state.counter} times
        </button>
      </div>
    );
  }
}

export default App6;
