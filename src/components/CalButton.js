import React from "react";
import { Button} from "semantic-ui-react";


const CalButton = (props) => {
return (
    <div>
      <Button onClick={(e) => props.handleClick(e, props.name)}>{props.name}</Button>
    </div>
  );
};

export default CalButton;
