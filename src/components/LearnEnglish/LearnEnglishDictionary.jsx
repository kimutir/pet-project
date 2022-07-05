import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterDictionaryAction } from '../../store/learnEnglishReducer';
import './LearnEnglish.css';

const LearnEnglishDictionary = () => {
  console.log('render fron LearnEnglishDictionary');
  const dispatch = useDispatch();
  const state = useSelector((state) => state.learnEnglish);

  const deleteItem = (item) => {
    const filtered = state.dictionary.filter((word) => {
      return word.id !== item.id;
    });

    console.log(filtered);

    dispatch(filterDictionaryAction(filtered));
  };

  return (
    <ul className="dictionary">
      {state.dictionary.map((item) => {
        return (
          <li key={item.id} className="dictionary__content">
            <p className="dictionary__word word__space">
              <span>{item.word}</span>
              <span>-</span>
            </p>

            <p className="dictionary__translation">{item.translation}</p>
            <span
              className="english__cross"
              onClick={() => deleteItem(item)}
            ></span>
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(LearnEnglishDictionary);
