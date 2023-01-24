import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};
