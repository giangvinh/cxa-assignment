import React from "react";
import "./display.styles.css";

const Display = ({value}) => (
  <div className="component-display">
        <div>{value}</div>
  </div>
);

export default Display;
