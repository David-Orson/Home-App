import {
  SET_LEARNING_CARDS,
  SET_PENDING_CARDS,
  SET_SUBJECTS,
  LOADING_LEARNING,
  LOADING_PENDINGS,
  LOADING_SUBJECTS,
  CLEAR_LEARNING,
} from '../types';

const initialState: any = {
  cards: [],
  pendings: [],
  subjects: [],
  loadingLearnings: false,
  loadingPendings: false,
  loadingSubjects: false,
};

const learningReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING_LEARNING:
      return {
        ...state,
        loadingLearning: true,
      };
    case LOADING_PENDINGS:
      return {
        ...state,
        loadingPendings: true,
      };
    case LOADING_SUBJECTS:
      return {
        ...state,
        loadingSubjects: true,
      };
    case SET_LEARNING_CARDS:
      return {
        ...state,
        cards: action.payload,
        loadingLearning: false,
      };
    case SET_PENDING_CARDS:
      return {
        ...state,
        pendings: action.payload,
        loadingPendings: false,
      };
    case SET_SUBJECTS:
      return {
        ...state,
        subjects: action.payload,
        loadingSubjects: false,
      };
    case CLEAR_LEARNING:
      return { ...initialState };
    default:
      return state;
  }
};

export default learningReducer;
