import React from "react";
import './App.css';

import CalInput from "./components/Calinput";
import ButtonCal from "./components/ButtonCal";

import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";

export default function App() {
  return (
    <div>
      <Card>
        <CalInput />
        <ButtonCal />
      </Card>
    </div>
  );
}
