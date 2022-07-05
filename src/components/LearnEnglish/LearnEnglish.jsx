import React, { useState } from 'react';
import Button from '../Buttons/Button';
import Modal from '../Modals/Modal';
import LearnEnglishDictionary from './LearnEnglishDictionary';
import { useDispatch, useSelector } from 'react-redux';
import LearnEnglishAddForm from './LearnEnglishAddForm';
import {
  addWordAction,
  createDictionaryAction,
  addTranslationAction,
  clearDictionaryAction,
} from '../../store/learnEnglishReducer.js';
import LearnEnglishGame from './LearnEnglishGame';
import './LearnEnglish.css';
import { Link } from 'react-router-dom';
import ButtonBack from '../Buttons/ButtonBack';

const LearnEnglish = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const state = useSelector((state) => state.learnEnglish);
  const reg = /[^A-Za-zА-Яа-яЁё\s\-]/g;
  const mainEnglishStyle = ['learnEnglish__visible'];

  const dispatch = useDispatch();

  if (isGameStarted) {
    mainEnglishStyle.push('learnEnglish__invisible');
  }

  // ======= открывает форму для добавления слова ========
  const openModal = () => {
    setIsModalOpen(true);
  };

  // ====== логика для добавления слова и перевода
  const createDictionary = (e) => {
    e.preventDefault();

    if (!state.word || !state.translation) {
      console.log('пустые');
      return;
    }
    // ======= не знаю почему так =========
    //==========  почему перебирает по одному символу
    if (reg.test(state.translation)) {
      if (reg.test(state.word)) {
        return;
      }
      return;
    }
    if (reg.test(state.word)) {
      if (reg.test(state.translation)) {
        return;
      }
      return;
    }
    // =======================

    dispatch(createDictionaryAction());
    dispatch(addWordAction(''));
    dispatch(addTranslationAction(''));
  };

  // ====== очищаем словарь =======
  const clearDictionary = () => {
    dispatch(clearDictionaryAction());
  };

  return (
    <div className="learnEnglish">
      <Link to="/">
        <ButtonBack></ButtonBack>
      </Link>
      <div className={mainEnglishStyle.join(' ')}>
        <div className="english__buttons">
          <Button onClick={openModal}>ADD</Button>
          <Button
            disabled={state.dictionary.length ? false : true}
            onClick={() => setIsGameStarted(!isGameStarted)}
          >
            LEARN
          </Button>
          <Button onClick={() => clearDictionary()}>CLEAR</Button>
        </div>

        <Modal open={isModalOpen} setOpen={setIsModalOpen}>
          <form
            onSubmit={(e) => createDictionary(e)}
            className="english__form"
            onClick={(e) => e.stopPropagation()}
          >
            <LearnEnglishAddForm state={state} />
          </form>
        </Modal>

        {!isGameStarted && <LearnEnglishDictionary />}
      </div>

      <LearnEnglishGame
        isGameStarted={isGameStarted}
        setIsGameStarted={setIsGameStarted}
        reg={reg}
      />
    </div>
  );
};

export default LearnEnglish;
