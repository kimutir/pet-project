import React from 'react';
import './ButtonsStyle.css';

const ButtonBack = () => {
  const handleClick = () => {
    sessionStorage.setItem('needScroll', 1);
  };
  return <span className="button__cross" onClick={handleClick}></span>;
};

export default ButtonBack;
