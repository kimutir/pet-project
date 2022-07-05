import React from 'react';
import './ButtonsStyle.css';

const Button = ({ disabled, className, onClick, children }) => {
  // console.log('render from Button');
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
