import React from "react";
import "./App.css";

class App7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.handlerClick=this.handlerClick.bind(this)
  }
handlerClick = () => {
    this.setState({counter: this.state.counter-1});
  };

  render() {
    return (
      <div>
       <h1> Классовый компонент 7</h1>
       <h3 color="red"> Объявление функции как стрелочной Не рекомендуется! </h3>
       <h3> Способ 3 через bind, который прописан в конструкторе</h3>
       <p> handlerClick = () => []
    this.setState([counter: this.state.counter-1]);];</p>
    
      <button
        onClick={this.handlerClick}>
       have pressed {this.state.counter} times
      </button>
      </div>
    );
  }
}

export default App7;
