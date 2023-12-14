import React, { useState } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

const Task2 = () => {
  const [currImg, setCurrImg] = useState(img1);

  const imgStyle = {
    width: "200px",
  };

  const switchImage = () => {
    setCurrImg((prevImage) => (prevImage === img1 ? img2 : img1));
  };

  return (
    <div>
      <br />
      <br />
      <label>Task #2</label> <br />
      <label>Условный рендеринг</label>
      <br />
      <img src={currImg} alt="" style={imgStyle} />
      <br />
      <button onClick={switchImage}>Switch</button>
    </div>
  );
};

export default Task2;
