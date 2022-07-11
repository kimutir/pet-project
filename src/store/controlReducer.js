const initialState = {
  greetText: '',
  navVisible: false,
  switchVisible: false,
  isLoaded: true,
  prevPosition: 0,
};

const NEW_TEXT = 'NEW_TEXT';
const CLEAR_TEXT = 'CLEAR_TEXT';
const NAV_VISIBLE = 'NAV_VISIBLE';
const SWITCH_VISIBLE = 'SWITCH_VISIBLE';
const PREV_POSITION = 'PREV_POSITION';

export const controlReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TEXT:
      return {
        ...state,
        greetText: state.greetText + action.payload,
      };
    case CLEAR_TEXT:
      return {
        ...state,
        greetText: '',
      };

    case NAV_VISIBLE:
      return {
        ...state,
        navVisible: true,
      };
    case SWITCH_VISIBLE:
      return {
        ...state,
        switchVisible: true,
      };
    case PREV_POSITION:
      return {
        ...state,
        prevPosition: action.payload,
      };

    default:
      return state;
  }
};

export const newGreetAction = (payload) => ({
  type: NEW_TEXT,
  payload,
});
export const clearGreetAction = () => ({
  type: CLEAR_TEXT,
});

export const navVisibleAction = () => ({
  type: NAV_VISIBLE,
});
export const switchVisibleAction = () => ({
  type: SWITCH_VISIBLE,
});
export const setPrevPosotionAction = (payload) => ({
  type: PREV_POSITION,
  payload,
});
