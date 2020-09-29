import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  value?: any;
}

const Input: React.FC<InputProps> = ({ name, label, value, ...props }) => {
  return (
    <div className="input-block">
      {label && <label htmlFor={name}>{label}</label>}
      <input type="text" name={name} id={name} value={value} {...props} />
    </div>
  );
};

export default Input;
