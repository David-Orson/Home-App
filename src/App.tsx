import React, { FC, useState } from "react";
import { Router, RouteComponentProps, Location, navigate } from "@reach/router";
import jwtDecode from "jwt-decode";
import axios from "axios";

import { getUserData, logoutUser } from "./redux/actions/userActions";
import { SET_AUTHENTICATED } from "./redux/types";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Steps from "./pages/Steps";

import store from "./redux/store";
const { dispatch } = store;

interface HomePgComponentProps extends RouteComponentProps {
  authState: number;
}

interface AppProps {}

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken: any = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    dispatch(logoutUser());
    navigate("/login");
  } else {
    dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    dispatch(getUserData());
  }
}

const App: FC<AppProps> = () => {
  const [authState, setAuthState] = useState<number>(0);

  const HomePg = (props: HomePgComponentProps) => <Home authState={authState} />;
  const SignupPg = (props: RouteComponentProps) => <Signup />;
  const LoginPg = (props: RouteComponentProps) => <Login />;
  const StepsPg = (props: RouteComponentProps) => <Steps />;

  return (
    <Router>
      <HomePg path='/' authState={authState} />
      <SignupPg path='signup' />
      <LoginPg path='login' />
      <StepsPg path='steps' />
    </Router>
  );
};

export default App;
