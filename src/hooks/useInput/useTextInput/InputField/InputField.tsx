import React from "react";
import "./InputField.scss";

export interface InterfaceInputField extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: string[];
  note?: string;
  className?: string;
}

export const InputField: React.FC<InterfaceInputField> = ({
  label,
  errors = [],
  className = "",
  note,
  ...props
}) => {
  return (
    <div className={`InputField ${className} ${errors ? "error" : ""}`}>
      {label && (
        <label className="InputField-label label" htmlFor={props?.id}>
          {label}
        </label>
      )}
      <input {...props} className="InputField-input input" />
      {errors.map((error, i) => (
        <span className="InputField-error-message error" key={i}>{error}</span>
      ))}
      {note && <p className="InputField-note note">{note}</p>}
    </div>
  );
};
