const initialState = {
  word: '',
  translation: '',
  dictionary: [],
  test: 1,
};

const ADD_WORD = 'ADD_WORD';
const ADD_TRANSLATION = 'ADD_TRANSLATION';
const CREATE_DICTIONARY = 'CREATE_DICTIONARY';
const CLEAR_DICTIONARY = 'CLEAR_DICTIONARY';
const FILTER_DICTIONARY = 'FILTER_DICTIONARY';
const ASYNC_TEST = 'ASYNC_TEST';

export const learnEnglishReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORD:
      return {
        ...state,
        word: action.payload,
      };
    case ADD_TRANSLATION:
      return {
        ...state,
        translation: action.payload,
      };
    case CREATE_DICTIONARY:
      return {
        ...state,
        dictionary: [
          ...state.dictionary,
          {
            id: state.dictionary.length,
            word: state.word,
            translation: state.translation,
          },
        ],
      };
    case CLEAR_DICTIONARY:
      return {
        ...initialState,
      };
    case FILTER_DICTIONARY:
      return {
        ...state,
        dictionary: [...action.payload],
      };
    case ASYNC_TEST:
      return {
        ...state,
        test: state.test + 1,
      };

    default:
      return state;
  }
};

export const addWordAction = (payload) => ({
  type: ADD_WORD,
  payload,
});
export const addTranslationAction = (payload) => ({
  type: ADD_TRANSLATION,
  payload,
});
export const createDictionaryAction = () => ({
  type: CREATE_DICTIONARY,
});
export const clearDictionaryAction = () => ({
  type: CLEAR_DICTIONARY,
});
export const filterDictionaryAction = (payload) => ({
  type: FILTER_DICTIONARY,
  payload,
});
export const asyncAction = () =>
  function (dispatch) {
    setTimeout(() => {
      dispatch({ type: ASYNC_TEST });
    }, 4500);
  };
