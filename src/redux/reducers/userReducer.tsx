import { SET_USER } from "../types";

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        ...action.payload,
      };
  }
};

export default userReducer;
