import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import CalButton from "./CalButton";


class ButtonCal extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }


  handleClick = (event, name) => {
    event.preventDefault()
    console.log(name);
    this.setState({
      name
    });
  };

  render() {
    return (
      <div>
        <Button.Group
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <CalButton name="1" handleClick={this.handleClick} />
          <CalButton name="2" handleClick={this.handleClick} />
          <CalButton name="3" handleClick={this.handleClick} />
        </Button.Group>
        <Button.Group
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <CalButton name="4" handleClick={this.handleClick} />
          <CalButton name="5" handleClick={this.handleClick} />
          <CalButton name="6" handleClick={this.handleClick} />
        </Button.Group>

        <Button.Group
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <CalButton name="7" handleClick={this.handleClick} />
          <CalButton name="8" handleClick={this.handleClick} />
          <CalButton name="9" handleClick={this.handleClick} />
        </Button.Group>
        <Button.Group
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <CalButton name="-" handleClick={this.handleClick} />
          <CalButton name="0" handleClick={this.handleClick} />
          <CalButton name="+" handleClick={this.handleClick} />
        </Button.Group>
        <Button.Group
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <CalButton name="=" handleClick={this.handleClick} />
          <CalButton name="x" handleClick={this.handleClick} />
          <CalButton name=":" handleClick={this.handleClick} />
        </Button.Group>
      </div>
    );
  }
}

export default ButtonCal;
