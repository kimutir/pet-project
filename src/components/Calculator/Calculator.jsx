import React, { useState } from 'react';
import BackUpLog from './BackUpLog.jsx';
import './Calculator.css';
import { Link } from 'react-router-dom';
import ButtonBack from '../Buttons/ButtonBack';

const Calculacor = () => {
  const [save, setSave] = useState([
    { id: 0, valuePrev: '', valueCur: '', valueRes: '', math: '' },
  ]);
  let [prev, setPrev] = useState('');
  let [cur, setCur] = useState('');
  const [mathSing, setMathSing] = useState('');
  const [dispBack, setDispBack] = useState(false);
  const [cleanCurrent, setCleanCurrent] = useState(false);
  let zero = 0;
  let interval;
  console.log(cleanCurrent);

  const saveFunction = () => {
    setSave([
      ...save,
      {
        id: save.length,
        valuePrev: prev,
        valueCur: cur,
        math: mathSing,
      },
    ]);
  };

  const calculate = (sing) => {
    if ((sing === mathSing || !mathSing) && !cur) {
      return;
    } else if (!prev) {
      setMathSing(sing);
    } else {
      saveFunction();
      setMathSing(sing);
    }

    if (cur) {
      if (!prev) {
        setPrev(cur + sing);

        setCur('');
        console.log('hi');
      } else {
        if (mathSing === '+') {
          const result = parseFloat(prev) + parseFloat(cur);
          setCur('');
          setPrev(result + sing);
        }
        if (mathSing === '-') {
          const result = parseFloat(prev) - parseFloat(cur);
          setCur('');
          setPrev(result + sing);
        }
        if (mathSing === '*') {
          const result = parseFloat(prev) * parseFloat(cur);
          setCur('');
          setPrev(result + sing);
        }
        if (mathSing === '/') {
          const result = parseFloat(prev) / parseFloat(cur);
          setCur('');
          setPrev(result + sing);
        }
      }
    } else if (prev) {
      const withoutSing = prev.slice(0, -1);
      setPrev(withoutSing + sing);
      setMathSing(sing);
    } else return;
  };

  const displayResult = () => {
    if (cur && prev) {
      saveFunction();
      setMathSing('');
      setCleanCurrent(true);
    }

    if (prev && cur) {
      if (mathSing === '+') {
        const result = parseFloat(prev) + parseFloat(cur);
        setCur(result);
        console.log(result);
        setPrev('');
      }
      if (mathSing === '-') {
        const result = parseFloat(prev) - parseFloat(cur);
        setCur(result);
        setPrev('');
      }
      if (mathSing === '*') {
        const result = parseFloat(prev) * parseFloat(cur);
        setCur(result);
        setPrev('');
      }
      if (mathSing === '/') {
        const result = parseFloat(prev) / parseFloat(cur);
        setCur(result);
        setPrev('');
      }
    } else return;
  };

  // ===================== логика для ввода чисел =====================
  const enterNumber = (valueNumber) => {
    // очищаем ввод, если нажали равно и начали новый ввод
    if (cleanCurrent) {
      setCur((cur = ''));
      setCleanCurrent(false);
    }
    // запрет ввода нескольких нулей в начале
    if (valueNumber === '0' && cur.length === 1 && cur === '0') {
      return;
    }
    // запрет ввода нескольких точек
    if (valueNumber === '.' && cur.split('').includes('.')) {
      return;
    }
    setCur(cur + valueNumber);
  };
  // ===================== логика для ввода чисел =====================

  // ===================== логика для удаления =====================
  const removeOne = () => {
    setCur(cur.toString().slice(0, -1));
  };

  const removeAll = () => {
    setCur('');
    setPrev('');
    setMathSing('');
    setSave('');
  };

  const timerStart = () => {
    interval = setInterval(() => {
      zero++;
      console.log(zero);
      if (zero > 0) {
        setCur('');
        setPrev('');
        clearInterval(interval);
      }
    }, 1000);
  };
  const timerOver = () => {
    clearInterval(interval);
    zero = 0;
  };
  // ===================== логика для удаления =====================

  const displayBackUp = () => {
    setDispBack(!dispBack);
  };

  return (
    <div className="calculator__container">
      <Link to="/">
        <ButtonBack></ButtonBack>
      </Link>
      <div className="calculator__position">
        <div className="calculator">
          <div className="calculator__input">
            <div className="calculator__input_hight">{prev}</div>
            <div className="calculator__input_low">{cur}</div>
          </div>

          <button onClick={() => removeAll()} className="calculator__all_clear">
            A/C
          </button>
          <button
            onMouseDown={() => timerStart()}
            onMouseUp={() => timerOver()}
            onClick={() => removeOne()}
          >
            DEL
          </button>
          <button onClick={() => calculate('+')}>+</button>

          <button onClick={() => enterNumber('1')}>1</button>
          <button onClick={() => enterNumber('2')}>2</button>
          <button onClick={() => enterNumber('3')}>3</button>
          <button onClick={() => calculate('-')}>-</button>

          <button onClick={() => enterNumber('4')}>4</button>
          <button onClick={() => enterNumber('5')}>5</button>
          <button onClick={() => enterNumber('6')}>6</button>
          <button onClick={() => calculate('*')}>*</button>

          <button onClick={() => enterNumber('7')}>7</button>
          <button onClick={() => enterNumber('8')}>8</button>
          <button onClick={() => enterNumber('9')}>9</button>
          <button onClick={() => calculate('/')}>/</button>

          <button onClick={() => enterNumber('.')}>.</button>
          <button onClick={() => enterNumber('0')}>0</button>
          <button
            onClick={() => displayResult()}
            className="calculator__result"
          >
            =
          </button>

          <button
            onClick={() => displayBackUp()}
            className="calculator__log_open"
          >
            LOG LIST
          </button>
          <div className="calculator__log_position">
            <div
              className={
                dispBack ? 'calculator__backUpLog' : 'calculator__log_hidden'
              }
            >
              {save ? (
                <BackUpLog
                  logList={save}
                  setPrev={setPrev}
                  setMathSing={setMathSing}
                  setCur={setCur}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculacor;
