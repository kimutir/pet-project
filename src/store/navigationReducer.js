const initialState = {};

const ELEMENTS = 'ELEMENTS';

export const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ELEMENTS:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export const findElementsAction = (payload) => ({
  type: ELEMENTS,
  payload,
});
