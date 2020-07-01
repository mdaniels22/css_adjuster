import React, { useState } from "react";

const blur = (props) => {
  return (
    <div>
      <label for="blur">Blur</label>
      <input
        type="range"
        min="0"
        max="10"
        id="blur"
        onChange={props.handleInput}
        value={props.blurAmount}
      />
      <span>{props.blurAmount}</span>
    </div>
  );
};

export default blur;
