const initialState = {
  name: '',
};

const NEW_USER = 'NEW_USER';

export const userNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return {
        name: action.payload,
      };
    default:
      return state;
  }
};

export const addNewUserAction = (payload) => ({
  type: NEW_USER,
  payload,
});
