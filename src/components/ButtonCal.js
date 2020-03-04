import React, { Component } from "react";
import { Button, Input, Card } from "semantic-ui-react";

import CalButton from "./CalButton";

class ButtonCal extends Component {
  constructor(props) {
    super(props);
    this.state = { name: " " };
  }

  handleClick = (event, name) => {
    event.preventDefault();

    this.setState({
      name: this.state.name + (event, name)
    });
    console.log(name);

    if (name === "=") {
      this.calculate();
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.name.includes("--")) {
      checkResult = this.state.name.replace("--", "+");
    } else {
      checkResult = this.state.name;
    }
    try {
      this.setState({
        //  eslint-disable-next-line
        name: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        neme: "error"
      });
    }
  };

  handleReset = () => {
    this.setState({
      name: " "
    });
  };
  handleBackspace = () => {
    this.setState({
      name: this.state.name.slice(0, -1)
    });
  };

  render() {
    return (
      <div>
        <Card
          size="massive"
          style={{
            backgroundColor: "white"
          }}
        >
          <div>
            <Input
              size="big"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
              value={this.state.name}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px"
            }}
          >
            <CalButton name="1" handleClick={this.handleClick} />
            <CalButton name="2" handleClick={this.handleClick} />
            <CalButton name="3" handleClick={this.handleClick} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px"
            }}
          >
            <CalButton name="4" handleClick={this.handleClick} />
            <CalButton name="5" handleClick={this.handleClick} />
            <CalButton name="6" handleClick={this.handleClick} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px"
            }}
          >
            <CalButton name="7" handleClick={this.handleClick} />
            <CalButton name="8" handleClick={this.handleClick} />
            <CalButton name="9" handleClick={this.handleClick} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px"
            }}
          >
            <CalButton name="0" handleClick={this.handleClick} />
            <CalButton name="-" handleClick={this.handleClick} />
            <CalButton name="+" handleClick={this.handleClick} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px"
            }}
          >
            <CalButton name="=" handleClick={this.handleClick} />
            <CalButton name="*" handleClick={this.handleClick} />
            <CalButton name=":" handleClick={this.handleClick} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "10px"
            }}
          >
            <Button
              circular
              size="huge"
              color="green"
              onClick={this.handleReset}
            >
              C
            </Button>
            <Button
              circular
              size="huge"
              color="yellow"
              onClick={this.handleBackspace}
            >
              Del
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default ButtonCal;
