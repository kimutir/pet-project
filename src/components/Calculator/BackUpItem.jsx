import React from 'react';

const BackUpItem = (props) => {
  const backUp = () => {
    props.setCur(props.current);
    props.setPrev(props.previous);
    props.setMathSing(props.math);
  };
  return (
    <div
      style={{ display: 'flex', cursor: 'pointer' }}
      onClick={() => backUp()}
    >
      <div>{props.previous.slice(0, -1)}</div>
      <div>{props.math}</div>
      <div>{props.current}</div>
    </div>
  );
};

export default BackUpItem;
