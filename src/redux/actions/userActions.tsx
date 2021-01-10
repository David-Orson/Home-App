import { SET_USER } from "../types";
import axios from "axios";

const setAuthorizationHeader = (token: any) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};

export const loginUser = () => (dispatch: any) => {
  dispatch({
    type: SET_USER,
    payload: "test",
  });
};
