import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class button extends Component {
    render() {
    return (
      <div>
        <Button.Group
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
          <Button name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
          <Button name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
        </Button.Group>
        <Button.Group
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
          <Button name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
          <Button name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
        </Button.Group>
        <Button.Group
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
          <Button name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button>
          <Button name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
        </Button.Group>
        <Button.Group
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button name="+" onClick={e => this.props.onClick(e.target.name)}>+</Button>
          <Button name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
          <Button name="-" onClick={e => this.props.onClick(e.target.name)}>-</Button>
        </Button.Group>
        <Button.Group
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button name="x" onClick={e => this.props.onClick(e.target.name)}>x</Button>
          <Button name=":" onClick={e => this.props.onClick(e.target.name)}>:</Button>
          <Button name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button>
        </Button.Group>
      </div>
    );
  }
}

export default button;
