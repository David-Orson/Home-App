import React, { FC, useState, useEffect } from 'react';
import { Router, RouteComponentProps, Location, navigate } from '@reach/router';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import './App.css';

import { getUserData, logoutUser } from './redux/actions/userActions';
import {
  getLearningCardsByUser,
  getPendingCardsByUser,
  getSubjectsByUser,
} from './redux/actions/learningActions';
import { SET_AUTHENTICATED } from './redux/types';
import { useDispatch } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Steps from './pages/Steps';
import Learning from './pages/Learning';

import Navbar from './components/Navbar';

interface HomePgComponentProps extends RouteComponentProps {
  authState: number;
}

interface AppProps {}

const App: FC<AppProps> = () => {
  const [authState, setAuthState] = useState<number>(0);

  const HomePg = (props: HomePgComponentProps) => (
    <Home authState={authState} />
  );
  const SignupPg = (props: RouteComponentProps) => <Signup />;
  const LoginPg = (props: RouteComponentProps) => <Login />;
  const StepsPg = (props: RouteComponentProps) => <Steps />;
  const LearningPg = (props: RouteComponentProps) => <Learning />;

  const dispatch = useDispatch();

  const token = localStorage.FBIdToken;
  if (token) {
    const decodedToken: any = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      logoutUser(dispatch);
      navigate('/login');
    } else {
      dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common['Authorization'] = token;
      dispatch(getUserData());
      getLearningCardsByUser(dispatch);
      getPendingCardsByUser(dispatch);
      getSubjectsByUser(dispatch);
    }
  }

  useEffect(() => {}, []);

  return (
    <div>
      <Navbar />
      <Router>
        <HomePg path='/' authState={authState} />
        <SignupPg path='signup' />
        <LoginPg path='login' />
        <StepsPg path='steps' />
        <LearningPg path='learning' />
      </Router>
    </div>
  );
};

export default App;
