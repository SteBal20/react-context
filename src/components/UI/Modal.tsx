import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop: React.FC<{ onClick: () => void }> = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")!;

const Modal: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
}> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
