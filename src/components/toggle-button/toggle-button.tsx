import { InputHTMLAttributes } from "react";

interface ToggleButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
}

export const ToggleButton = ({
  onChange,
  checked,
  children,
}: ToggleButtonProps) => {
  const labelId = children.toLowerCase().split("").join("-");

  return (
    <>
      <input
        type="checkbox"
        id={labelId}
        name={labelId}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={labelId}>{children}</label>
    </>
  );
};
