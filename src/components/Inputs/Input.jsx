import React from 'react';
import './Inputs.css';

const Input = ({ placeholder, className, value, onChange, type, name }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
