import React from 'react';
import LearnEnglishGameList from './LearnEnglishGameList.jsx';
import Button from '../Buttons/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { clearGameAction } from '../../store/englishGameReducer.js';
import './LearnEnglish.css';

const LearnEnglishGame = React.memo(
  ({ isGameStarted, setIsGameStarted, reg }) => {
    console.log('render from LearnEnglishGame');
    const dispatch = useDispatch();
    const state = useSelector((state) => state.englishGame);

    const mainEnglishGameStyle = ['engslishGame'];

    if (isGameStarted) {
      mainEnglishGameStyle.push('engslishGame__started');
    }

    // ========= начинаем игру заново =======
    const playAgain = () => {
      if (state.counter > 1) {
        state.inputsNodeList[0].removeAttribute('disabled');
        state.inputsNodeList[0].value = '';
        state.buttonsNodeList[0].setAttribute('style', 'opacity:1');
        // ======== убираем фон ответов ========
        if (state.userVariantsNodeList[0].classList.contains('answer__right')) {
          state.userVariantsNodeList[0].classList.remove('answer__right');
        } else {
          state.userVariantsNodeList[0].classList.remove('answer__wrong');
        }
        dispatch(clearGameAction());
      }
    };

    // =========== закрываем игру ===========
    const closeGame = () => {
      playAgain();
      setIsGameStarted(!isGameStarted);
    };

    return (
      <div className={mainEnglishGameStyle.join(' ')}>
        <div className="english__buttons">
          <Button onClick={playAgain}>PLAY AGAIN</Button>
          <Button onClick={closeGame}> CLOSE</Button>
        </div>
        <div className="dictionary">
          <LearnEnglishGameList reg={reg} />
        </div>
      </div>
    );
  }
);

export default LearnEnglishGame;
