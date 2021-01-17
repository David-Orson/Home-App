import { SET_USER, SET_UNAUTHENTICATED } from "../types";
import axios from "axios";
import { navigate } from "@reach/router";
import { api } from "../../config";

const setAuthorizationHeader = (token: any) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};

export const getUserData = () => async (dispatch: any) => {
  const userDetails = await axios.get(`${api}/user`);

  dispatch({
    type: SET_USER,
    payload: userDetails.data,
  });
};

export const signupUser = async (newUserData: any, dispatch: any) => {
  const res: any = await axios.post(`${api}/signup`, {
    email: newUserData.email,
    password: newUserData.password,
    confirmPassword: newUserData.confirmPassword,
    handle: newUserData.handle,
  });
  setAuthorizationHeader(res.data.token);

  dispatch(getUserData());
  navigate("/");
};

export const loginUser = (email: any, password: any) => async (dispatch: any) => {
  const res = await axios.post(`${api}/login`, {
    email,
    password,
  });
  setAuthorizationHeader(res.data.token);
  dispatch(getUserData());
  navigate("/");
};

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};
