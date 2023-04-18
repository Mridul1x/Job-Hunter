import React from "react";
import image from "../../assets/All Images/Vector.png";
import image1 from "../../assets/All Images/Vector-1.png";
const HeaderBanner = ({header}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <img src={image} alt="" />
        <h1 className="text-3xl font-bold">{header}</h1>
        <img src={image1} alt="" />
      </div>
    </div>
  );
};

export default HeaderBanner;
