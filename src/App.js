import React from "react";
import "./App.css";

import ButtonCal from "./components/ButtonCal";

import "semantic-ui-css/semantic.min.css";

export default function App() {
  return (
    <div>
      <h1
        style={{ display: "flex", justifyContent: "center", padding:"50px" }}
      >
        Simple React Calculator
      </h1>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        <ButtonCal />
      </div>
    </div>
  );
}
