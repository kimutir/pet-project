import React from 'react';
import testStyle from './Test.module.css';
import calcVideo from '../../assets/icons/calculator.gif';
// import downIcon from '../../assets/icons/down.png';

const Test = () => {
  console.log(calcVideo);
  return (
    <div className={testStyle.test}>
      <div className={testStyle.calculator}></div>
    </div>
  );
};

export default Test;
