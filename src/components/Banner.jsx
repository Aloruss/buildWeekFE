import React from "react";
import "./Banner.css"
export const Banner = ({}) => {
    return (
        <div className='d-flex banner-box align-items-center justify-content-between p-2'>
            <h1 className="and-logo">PROJECT MOON</h1>
            {/* <h3>A platform to help you connect with your club</h3> */}
            <h3><span className="and-logo">AND Digital</span></h3>
        </div>
    )
}