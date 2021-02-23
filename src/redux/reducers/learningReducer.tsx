import { SET_LEARNING_CARDS, SET_PENDING_CARDS, SET_SUBJECTS } from '../types';

const initialState: any = {
  cards: [],
  pendings: [],
  subjects: [],
};

const userReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LEARNING_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case SET_PENDING_CARDS:
      return {
        ...state,
        pendings: action.payload,
      };
    case SET_SUBJECTS:
      return {
        ...state,
        subjects: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
