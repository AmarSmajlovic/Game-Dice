import React from "react";

type Modal = {
   content:React.ElementType | null;
   props:{}
}

export type ModalContextType = {
   modal:Modal,
   hideModal:() => void;
   showModal:(content: React.ElementType | any, props:{}) => void;
}