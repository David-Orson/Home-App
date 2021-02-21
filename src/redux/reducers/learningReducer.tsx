import { SET_LEARNING_CARDS } from '../types';

const initialState: any = {
  learningCards: [],
};

const userReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LEARNING_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
