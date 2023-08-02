import "./FillID.css";
import React, { useState } from "react";
import { Navigationbar } from "../NavigationBar/NavigationBar";
import { Link } from "react-router-dom";
export const FillID = () => {
  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("submit-btn-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };
  return (
    <>
    <div>< Navigationbar/></div>
      <div className="cover">
        <h1>Fill ID</h1>
        <input type="id" placeholder="Fill your's ID number" />
        <br />
        <Link to="/payment">
          <div className="submit-btn" onClick={popup}>
            Submit
          </div>
        </Link>
      </div>
      <div className={popupStyle}>
        <p>Your Id number is Failed</p>
        <p>Please check your ID number</p>
      </div>
    </>
  );
};
