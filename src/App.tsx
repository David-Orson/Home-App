import React from "react";
import { Router, RouteComponentProps, Location } from "@reach/router";

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const HomePg = (props: RouteComponentProps) => <Home />;
const SignupPg = (props: RouteComponentProps) => <Signup />;
const LoginPg = (props: RouteComponentProps) => <Login />;

const App = () => {
  return (
    <Router>
      <HomePg path="/" />
      <SignupPg path="signup" />
      <LoginPg path="login" />
    </Router>
  )
}

export default App;