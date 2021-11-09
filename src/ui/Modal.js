import React, {Fragment} from "react";
import cx from "classnames";
import "./Modal.css";

function Modal(props) {
  

  return (
    <Fragment>
      <div className={cx("modal-overlay", { show: props.show })}></div>
      <div className={cx("custom-modal", { show: props.show })}>
        <div className={cx("custom-modal-dialog")}>
          <button onClick={props.closeModal} className="close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 492.004 492.004"
            >
              <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"></path>
            </svg>
          </button>
          {props.children}
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;