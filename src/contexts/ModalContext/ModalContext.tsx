import React from "react";
import { ModalContextType } from "../../@types";
import Modal from "../../components/Modal/Modal";

interface Props {
  children: React.ReactNode;
}

export const ModalContext = React.createContext<ModalContextType | null>(null);

const ModalContextProvider = ({ children }: Props) => {
  const [modal, setModal] = React.useState({
    content: null,
    props: {},
  });
  const { content, props } = modal;

  const showModal = (content: React.ElementType | any, props = {}) => {
    setModal({ content, props });
  };

  const hideModal = () => {
    setModal({ content: null, props: {} });
  };

  return (
    <ModalContext.Provider value={{ modal, showModal, hideModal }}>
      {children}
      {content ? <Modal content={content} props={props} /> : ""}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
