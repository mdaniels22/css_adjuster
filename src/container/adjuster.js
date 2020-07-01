import React, { useState, useEffect } from "react";
import Auxcomp from "../hoc/auxcomp";
import Blur from "../components/controls/blur";
import NewPic from "../components/newPic/newPic";
//import WifiBlue from "../assets/wifiBlue.png";
import Saturate from "../components/controls/saturate";
import Contrast from "../components/controls/contrast";

const Adjuster = (props) => {
  const [blurAmount, setBlurAmount] = useState("0");
  const [saturateAmount, setSaturateAmount] = useState("100");
  const [contrastAmount, setContrastAmount] = useState("100");

  let handleBlurInput = (event) => {
    setBlurAmount(event.target.value);
  };
  let handleSaturateInput = (event) => {
    setSaturateAmount(event.target.value);
  };
  let handleContrastInput = (event) => {
    setContrastAmount(event.target.value);
  };

  return (
    <Auxcomp>
      <NewPic
        blurAmount={blurAmount}
        saturateAmount={saturateAmount}
        contrastAmount={contrastAmount}
      />
      <Blur handleInput={handleBlurInput} blurAmount={blurAmount} />
      <Saturate
        handleInput={handleSaturateInput}
        saturateAmount={saturateAmount}
      />
      <Contrast
        handleInput={handleContrastInput}
        contrastAmount={contrastAmount}
      />
    </Auxcomp>
  );
};

export default Adjuster;
