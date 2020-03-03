import React, { Component, Fragment } from "react";
import { Input } from "semantic-ui-react";

export class input extends Component {

  render() {
    let {result} = this.props.name;
    return (
      <Fragment>
        <Input disabled>{result}</Input>
      </Fragment>
    );
  }
}

export default input;
