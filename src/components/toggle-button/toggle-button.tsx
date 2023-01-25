import { InputHTMLAttributes } from "react";
import "./toggle-button.style.css";

interface ToggleButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
}

export const ToggleButton = ({
  onChange,
  checked,
  children,
  disabled,
}: ToggleButtonProps) => {
  const labelId = children.toLowerCase().split(" ").join("-");

  return (
    <div className="toggle-button" data-disabled={disabled}>
      <label htmlFor={labelId}>
        <input
          type="checkbox"
          id={labelId}
          name={labelId}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <div className="toggle-button-styled">
          <div className="background">
            <div className="circle" />
          </div>
        </div>
        <p>{children}</p>
      </label>
    </div>
  );
};
