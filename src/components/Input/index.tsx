import React, { InputHTMLAttributes } from "react";
// styles
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  value?: any;
}

const Input: React.FC<InputProps> = ({ name, label, value, ...props }) => {
  return (
    <div className="input-block">
      {label && (
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="input"
        type="text"
        name={name}
        id={name}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
