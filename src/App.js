import React, { Component } from "react";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";

import Input from "./components/input";
import Button from "./components/button";

class App extends Component {
  constructor(){
    super();

    this.state = {
        result: " "
    }
}
  onClick = () => {
    console.log (this.result)
    this.calculate();
  };

  calculate = () => {
    let checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  render() {
    return (
      <div>
        <Card>
          <Input result={this.state.result}/>
          <Button onClick={this.state.onClick}/>
        </Card>
      </div>
    );
  }
}

export default App;
