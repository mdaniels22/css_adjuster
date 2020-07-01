import React, { useState, useEffect } from "react";
import "./newPic.css";
//import axios from "axios";
import Auxcomp from "../../hoc/auxcomp";

const NewPic = (props) => {
  const [pic, setPic] = useState("https://picsum.photos/850/550");
  const [picNum, setPicNum] = useState(1);

  const changePicNum = () => {
    setPicNum(picNum + 1);
    console.log({ picNum });
    return setPic(`https://picsum.photos/850/550?random=${picNum}`);
  };

  return (
    <Auxcomp>
      <h1>CSS Adjuster</h1>
      <div className="shadow">
        <img
          style={{
            filter: `saturate(${props.saturateAmount}%) blur(${props.blurAmount}px) contrast(${props.contrastAmount}%)`,
          }}
          src={pic}
          alt={pic}
        />
        <button onClick={() => changePicNum()}>New Pic</button>
      </div>
    </Auxcomp>
  );
};

export default NewPic;
