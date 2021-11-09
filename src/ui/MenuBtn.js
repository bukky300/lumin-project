import React from "react";
import "./MenuBtn.scss";

function MenuBtn(props) {
  return (
    <button className="menu-btn d-block d-lg-none" onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default MenuBtn;
