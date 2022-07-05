import React from 'react';
import Input from '../Inputs/Input.jsx';
import Button from '../Buttons/Button.jsx';
import { useDispatch } from 'react-redux';
import {
  addWordAction,
  addTranslationAction,
  asyncAction,
} from '../../store/learnEnglishReducer.js';

const LearnEnglishAddForm = ({ state }) => {
  console.log('render from LearnEnglishAddForm');
  // const state = useSelector((state) => state.learnEnglish);
  const dispatch = useDispatch();

  // ======= добавляем слово =======
  const addWord = (e) => {
    dispatch(addWordAction(e.target.value.toLowerCase()));
  };
  // ======== добавляем перевод =======
  const addTranslation = (e) => {
    dispatch(addTranslationAction(e.target.value.toLowerCase()));
  };

  // const async = () => {
  //   dispatch(asyncAction());
  // };
  // onClick={async}

  return (
    <div className="english__form_content">
      <Input
        value={state.word}
        placeholder={'Enter word'}
        onChange={(e) => addWord(e)}
      />
      <div>-</div>
      <Input
        value={state.translation}
        placeholder={'Enter translation'}
        onChange={(e) => addTranslation(e)}
      />
      <button className="english__check"></button>
    </div>
  );
};

export default React.memo(LearnEnglishAddForm, (prev, next) => {
  // console.log(prev.dictionary, next.dictionary);
  // if (prev.dictionary !== next.dictionary) {
  //   return false;
  // } else {
  //   return true;
  // }
});
