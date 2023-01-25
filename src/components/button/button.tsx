import { ButtonHTMLAttributes } from "react";
import "./button.style.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ onClick, children, disabled }: ButtonProps) => {
  return (
    <>
      <button className="button" onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
};
