import { InputHTMLAttributes } from "react";
import "./toggle-button.style.css";

interface ToggleButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
}

export const ToggleButton = ({
  onChange,
  checked,
  children,
}: ToggleButtonProps) => {
  const labelId = children.toLowerCase().split(" ").join("-");

  return (
    <div className="toggle-button">
      <input
        type="checkbox"
        id={labelId}
        name={labelId}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={labelId}>{children}</label>
    </div>
  );
};
