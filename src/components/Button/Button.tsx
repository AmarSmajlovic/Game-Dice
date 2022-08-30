import React from "react";
import "./styles.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
  variant?: string;
  img?: string;
}

const Button = (props: Props) => {
  return (
    <button className={`button ${props.variant}`} {...props}>
      {props.children}
      {props.text && <p>{props.text}</p>}
      {props.img && <img src={props.img} alt="Button Image" />}
    </button>
  );
};

export default Button;
