import React from "react";
import "./App.css";

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
handlerClick ()  {
    this.setState({counter: this.state.counter+2});
  };

  render() {
    

    return (
      <div>
       <h1> Классовый компонент 4</h1>
       <h3> Объявление функции как надо </h3>
       <h3> Способ 1 вызов через стрелочную функцию</h3>

      <p> onClick=[(e) => this.handlerClick(e)] </p>
    
      <button
        onClick={(e) =>this.handlerClick(e)}
       >
       have pressed {this.state.counter} times
      </button>
      </div>
    );
  }
}

export default App4;
