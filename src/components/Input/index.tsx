import React, { InputHTMLAttributes } from "react";
// styles
import "./styles.css";

// Input component props interface
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  value?: any;
}

const Input: React.FC<InputProps> = ({ name, label, value, ...props }) => {
  return (
    <div className="input-block">
      {/* if the label props isn't true, the label element will not be rendered */}
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
