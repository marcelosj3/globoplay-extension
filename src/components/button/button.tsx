import { ButtonHTMLAttributes } from "react";
import "./button.style.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
};
