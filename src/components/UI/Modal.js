import React, { Fragment } from "react";
import { ReactDOM } from "react";
import styles from "./Modal.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = <div id="overlays"></div>;

const Modal = ({ children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;