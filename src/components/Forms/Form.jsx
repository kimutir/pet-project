import React from 'react';
import formStyle from './Form.module.css';

const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className={formStyle.form}>
      {children}
    </form>
  );
};

export default Form;
