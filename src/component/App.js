import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import DisplaBar from "./DisplayBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: ' ',
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const oldState = this.state;
    console.log("oldState", oldState);
    let newState = calculate(oldState, buttonName);
    switch(buttonName)   {
      case "AC":
        newState.str = '';
        break;
      case "=":
        newState.str = oldState.str + '=' + newState.total + ';';
        break;
      default:
        newState.str = oldState.str + buttonName;

    }
    console.log("newState", newState);
    this.setState(newState);
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"}/>
        <DisplaBar value={this.state.str}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
