import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerAction } from '../../store/controlReducer';
import './ButtonsStyle.css';

const ButtonBack = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.elements.projects);

  const handleClick = () => {
    projects.scrollIntoView();
    dispatch(triggerAction());
    console.log(projects);
  };
  return <span className="button__cross" onClick={handleClick}></span>;
};

export default ButtonBack;
