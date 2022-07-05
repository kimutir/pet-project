import React from 'react';
import BackUpItem from './BackUpItem.jsx';

const BackUpLog = ({ logList, setPrev, setMathSing, setCur }) => {
  return (
    <div>
      {logList.map((logItem) => {
        return (
          <BackUpItem
            key={logItem.id}
            current={logItem.valueCur}
            previous={logItem.valuePrev}
            math={logItem.math}
            setPrev={setPrev}
            setMathSing={setMathSing}
            setCur={setCur}
          />
        );
      })}
    </div>
  );
};

export default BackUpLog;
