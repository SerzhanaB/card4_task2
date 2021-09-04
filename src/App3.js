import React from "react";
import "./App.css";

class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    const handlerClick = () => {
      this.setState({counter: this.state.counter+1});
    };

    return (
      <div>
       <h1> Классовый компонент 3</h1>

       <h3> функция обработки находится в рендере, но так не стоит делать</h3>
    
      <button
        onClick={handlerClick}
       >
       have pressed {this.state.counter} times
      </button>
      </div>
    );
  }
}

export default App3;
