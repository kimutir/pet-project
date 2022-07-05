const initialState = {
  counter: 1,
  userTriesList: [],
  isRight: [],
  buttonsNodeList: [],
  inputsNodeList: [],
  userVariantsNodeList: [],
};

const ADD_USER_TRY = 'ADD_USER_TRY';
const INCREASE_COUNTER = 'INCREASE_COUNTER';
const ADD_LAST_BUTON = 'ADD_LAST_BUTON';
const ADD_LAST_INPUT = 'ADD_LAST_INPUT';
const ADD_LAST_VARIANT_ITEM = 'ADD_LAST_VARIANT_ITEM';
const ADD_IS_RIGHT = 'ADD_IS_RIGHT';
const CLEAR__GAME = 'CLEAR__GAME';

export const englishGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_TRY:
      return {
        ...state,
        userTriesList: [...state.userTriesList, action.payload],
      };

    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case ADD_LAST_BUTON:
      return {
        ...state,
        buttonsNodeList: action.payload,
      };
    case ADD_LAST_INPUT:
      return {
        ...state,
        inputsNodeList: action.payload,
      };
    case ADD_LAST_VARIANT_ITEM:
      return {
        ...state,
        userVariantsNodeList: action.payload,
      };
    case ADD_IS_RIGHT:
      return {
        ...state,
        isRight: [...state.isRight, action.payload],
      };
    case CLEAR__GAME:
      return {
        ...state,
        counter: 1,
        userTriesList: [],
        isRight: [],
        buttonsNodeList: [],
        inputsNodeList: [],
        userVariantsNodeList: [],
      };

    default:
      return state;
  }
};

export const addUserTryAction = (payload) => ({
  type: ADD_USER_TRY,
  payload,
});
export const increaseCounterAction = () => ({
  type: INCREASE_COUNTER,
});
export const addLastButtonAction = (payload) => ({
  type: ADD_LAST_BUTON,
  payload,
});
export const addLastInputAction = (payload) => ({
  type: ADD_LAST_INPUT,
  payload,
});
export const addLastVariantItemAction = (payload) => ({
  type: ADD_LAST_VARIANT_ITEM,
  payload,
});
export const addIsRightAction = (payload) => ({
  type: ADD_IS_RIGHT,
  payload,
});
export const clearGameAction = () => ({
  type: CLEAR__GAME,
});
