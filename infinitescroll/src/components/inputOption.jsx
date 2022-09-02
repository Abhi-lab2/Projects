import React from "react";
import "./inputOption.css";

function InputOption({ OpenModal, Icon, title, color }) {
  return (
    <div className="inputOption" onClick={OpenModal}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;