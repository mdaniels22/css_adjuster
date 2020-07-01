import React from "react";

const saturate = (props) => {
  return (
    <div>
      <label for="saturate">Saturate</label>
      <input
        type="range"
        min="0"
        max="300"
        id="saturate"
        value={props.saturateAmount}
        onChange={props.handleInput}
      />
    </div>
  );
};

export default saturate;
