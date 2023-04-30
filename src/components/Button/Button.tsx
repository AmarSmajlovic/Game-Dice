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
  const getVariant = React.useMemo(() => {
    return props.variant !== undefined ? props.variant : "";
  }, [props.variant]);

  return (
    <button className={`button ${getVariant}`} {...props}>
      {props.children}
      {props.text && <p>{props.text}</p>}
      {props.img && <img src={props.img} alt="btnicon" />}
    </button>
  );
};

export default Button;
