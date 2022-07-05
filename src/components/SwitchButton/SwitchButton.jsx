import React from 'react';
import { useSelector } from 'react-redux';
import './SwitchButton.css';

const SwitchButton = () => {
  const elements = useSelector((state) => state.elements);
  const switchVisible = useSelector((state) => state.control.switchVisible);
  console.log('switchVisible', switchVisible);

  if (switchVisible) {
    elements.switch.style.opacity = '1';
  }

  const handleClick = (e) => {
    e.target.classList.toggle('switch-on');
    document.body.classList.toggle('light');
  };
  return (
    <div className="switch">
      <div className="switch-btn" onClick={(e) => handleClick(e)}></div>
    </div>
  );
};

export default SwitchButton;
