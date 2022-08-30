import React from "react";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
  show: boolean;
}

const Modal = ({ children, show }: Props) => {
  return (
    <div className={`overlay ${show && "overlay__show"}`}>
      <div className={`modal__container ${show && "modal__show"}`}>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
