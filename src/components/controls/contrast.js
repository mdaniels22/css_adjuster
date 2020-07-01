import React from "react";

const contrast = (props) => {
  return (
    <div>
      <label for="contrast">Contrast</label>
      <input
        type="range"
        min="0"
        max="200"
        onChange={props.handleInput}
        value={props.contrastAmount}
      />
    </div>
  );
};

export default contrast;
