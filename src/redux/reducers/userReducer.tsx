import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER } from "../types";

const initialState: any = {
  authenticated: false,
};

const userReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        ...action.payload,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
