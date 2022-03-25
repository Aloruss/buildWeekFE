import React from "react";
import "./Banner.css";
import andLogo from "../public/images/andLogo.svg";
export const Banner = ({}) => {
  return (
    <div className='d-flex banner-box align-items-center justify-content-between p-2'>
      <h1 className='and-logo heading'>
        <b>PROJECT MOON</b>
      </h1>
      <img className='and-svg' src={andLogo} alt='' />
    </div>
  );
};
