import { SET_USER } from "../types";
import axios from "axios";
import { navigate } from "@reach/router";

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

export const getUserData = async (dispatch: any) => {
  const userDetails = await axios.get("https://europe-west1-orson-home-app-3e05b.cloudfunctions.net/api/user");

  dispatch({
    type: SET_USER,
    payload: userDetails.data,
  });
};

export const signupUser = async (newUserData: any, dispatch: any) => {
  const res: any = axios.post("https://europe-west1-orson-home-app-3e05b.cloudfunctions.net/api/signup", {
    email: newUserData.email,
    password: newUserData.password,
    confirmPassword: newUserData.confirmPassword,
    handle: newUserData.handle,
  });
  setAuthorizationHeader(res.data.token);

  dispatch(getUserData(dispatch));
  navigate("/");
};
