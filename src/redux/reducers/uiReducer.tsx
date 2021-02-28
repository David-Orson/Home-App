import { LOADING_UI, STOP_LOADING_UI } from '../types';

const initialState = {
  loading: false,
  errors: null,
};

const uiReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING_UI:
      return {
        ...state,
        loadingUi: true,
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loadingUi: false,
      };
    default:
      return state;
  }
};

export default uiReducer;
