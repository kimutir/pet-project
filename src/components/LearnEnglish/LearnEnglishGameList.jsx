import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addIsRightAction,
  addLastButtonAction,
  addLastInputAction,
  addLastVariantItemAction,
  addUserTryAction,
  increaseCounterAction,
} from '../../store/englishGameReducer';
import Input from '../Inputs/Input.jsx';
import Button from '../Buttons/Button.jsx';
import './LearnEnglish.css';

const LearnEnglishGameList = ({ reg }) => {
  console.log('render from LearnEnglishGameList');
  let [userTry, setUserTry] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state.englishGame);
  const dictionary = useSelector((state) => state.learnEnglish.dictionary);
  const counter = state.counter;

  const handleClick = () => {
    dispatch(addUserTryAction(userTry));
    setUserTry((userTry = userTry.trim()));

    if (userTry.length) {
      if (reg.test(userTry)) {
        setUserTry('');
        return;
      }

      const userVariant = document.querySelectorAll('.english__answer');
      const inputs = document.querySelectorAll('.userVariant input');
      const buttons = document.querySelectorAll('.userVariant button');
      dispatch(addLastButtonAction(buttons));
      dispatch(addLastInputAction(inputs));
      dispatch(addLastVariantItemAction(userVariant));

      if (userTry === dictionary[counter - 1].translation) {
        dispatch(addIsRightAction(true));
      } else {
        dispatch(addIsRightAction(false));
      }

      setUserTry('');
    } else {
      return;
    }
  };

  // ==== дезактивируем предыдущие ответы
  //             и проверяем правильность =======
  const handleSubmit = (e) => {
    e.preventDefault();
    state.inputsNodeList[state.inputsNodeList.length - 1].setAttribute(
      'disabled',
      'disabled'
    );
    state.buttonsNodeList[state.buttonsNodeList.length - 1].setAttribute(
      'style',
      'opacity:0'
    );

    state.isRight.forEach((item, index) => {
      if (item) {
        state.userVariantsNodeList[index].classList.add('answer__right');
      } else {
        state.userVariantsNodeList[index].classList.add('answer__wrong');
      }
    });
    dispatch(increaseCounterAction());
  };

  return (
    <>
      {dictionary.slice(0, counter).map((item) => {
        return (
          <div key={item.id} className="userVariant">
            <form onSubmit={handleSubmit} className="english__answer">
              <div className="dictionary__word">{item.word}</div>
              <div className="dictionary__translation">
                <Input
                  placeholder="Enter translation"
                  onChange={(e) => setUserTry(e.target.value.toLowerCase())}
                />
              </div>
              <button className="english__check" onClick={handleClick}></button>
            </form>
          </div>
        );
      })}
    </>
  );
};

export default LearnEnglishGameList;
