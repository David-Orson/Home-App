import { SET_USER, SET_UNAUTHENTICATED } from '../types';
import axios from 'axios';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import { api } from '../../config';

const setAuthorizationHeader = (token: any) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
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
  navigate('/');
};

export const loginUser = async (userData: any, dispatch: any) => {
  console.log(userData);
  const res = await axios.post(`${api}/login`, userData);
  setAuthorizationHeader(res.data.token);
  dispatch(getUserData());
  navigate('/');
};

export const logoutUser = (dispatch: any) => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};
