import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  newGreetAction,
  clearGreetAction,
  navVisibleAction,
  switchVisibleAction,
} from '../../store/controlReducer.js';
import { addNewUserAction } from '../../store/userNameReducer.js';
import Button from '../Buttons/Button.jsx';
import Input from '../Inputs/Input.jsx';
import './GreetStyles';
import GreetTutorial from './GreetTutorial.jsx';

const Greet = () => {
  const [isTutorialOpen, setIsTutorialOpen] = React.useState(false);

  const userName = useSelector((state) => state.userName.name);
  const dispatch = useDispatch();
  const greet = useSelector((state) => state.control.greetText);

  const greetFunction = (string, delay) => {
    dispatch(clearGreetAction());

    const greetArray = string.split('');
    const interval = setInterval(() => {
      if (greetArray.length) {
        dispatch(newGreetAction(greetArray.shift()));
      } else {
        clearInterval(interval);
      }
    }, delay);
  };
  const greetOneString = `Hello, my name is Timur. What's yours?`;
  const greetTwoString = `Nice to meet you, ${
    userName ? userName : 'Anonymous'
  }.
      Would you like to go through a small tutorial?`;
  const greetThreeText = `This is my very first project. Hope you will like it.`;

  React.useEffect(() => {
    if (!Number(sessionStorage.getItem('wasLoaded'))) {
      document.body.style.overflow = 'hidden';

      greetFunction(greetOneString, 50);
    } else {
      greetFunction(greetThreeText, 0);
      dispatch(switchVisibleAction());
      dispatch(navVisibleAction());
    }
  }, []);

  // ======= логика первой фразы =======
  // const greetOneString = `Hello, my name is Timur. What's yours?`;
  // if (Number(sessionStorage.getItem('loaded')) === 1) {
  //   document.body.style.overflow = 'hidden';

  //   greetFunction(greetOneString, 50);
  //   // sessionStorage.setItem('loaded', 1);
  //   // console.log('is loaded', Number(sessionStorage.getItem('loaded')));
  //   sessionStorage.setItem('loaded', 0);
  //   console.log('is loaded', Number(sessionStorage.getItem('loaded')));
  //   dispatch(loadAction(false));
  // }

  // ======= логика второй фразы =======

  const greetTwo = (e) => {
    e.preventDefault();

    greetFunction(greetTwoString, 30);
  };
  // ====================================

  // ======= логика третей фразы =======
  // const greetThreeText = `This is my very first project. Hope you will like it.`;

  const greetThree = () => {
    greetFunction(greetThreeText, 50);
    document.body.style.overflow = 'scroll';
    dispatch(switchVisibleAction());
    dispatch(navVisibleAction());
    sessionStorage.setItem('wasLoaded', 1);
  };
  // ====================================

  // ======= передаем имя пользователя ======
  const addName = (userName) => {
    dispatch(addNewUserAction(userName.trim()));
  };
  // ========= открываем обучение =========
  const startTutorial = () => {
    dispatch(clearGreetAction());
    dispatch(navVisibleAction());

    setIsTutorialOpen(true);
    document.querySelector('.greet__buttons').style.display = 'none';
  };

  return (
    <div className="greet">
      <h2 className="greet__text">{greet}</h2>
      <div className="greet__utils">
        {greet === greetOneString ? (
          <form onSubmit={greetTwo}>
            <div className="greet__buttons">
              <Input
                placeholder={'Enter your name'}
                value={userName}
                onChange={(e) => addName(e.target.value)}
              />
              <Button>OK</Button>
            </div>
          </form>
        ) : greet === greetTwoString ? (
          <>
            <div className="greet__buttons">
              <Button onClick={startTutorial}>YES</Button>
              <Button onClick={greetThree}>NO</Button>
            </div>
          </>
        ) : null}
      </div>
      {isTutorialOpen && (
        <GreetTutorial greetThree={greetThree}></GreetTutorial>
      )}
    </div>
  );
};

export default Greet;
