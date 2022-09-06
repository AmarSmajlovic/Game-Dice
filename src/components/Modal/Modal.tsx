import React from "react";
import "./styles.scss";

interface Props {
  content: React.ElementType;
  props: {};
}

const Modal = ({ content, props }: Props) => {
  const Content = content;

  return (
    <div className="modal">
      <div className="modal-content">
        <Content {...props} />
      </div>
    </div>
  );
};

export default Modal;
