import React, { FC, useState } from "react";
import { Router, RouteComponentProps, Location } from "@reach/router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

interface HomePgComponentProps extends RouteComponentProps {
  authState: number;
}

const App = () => {
  const [authState, setAuthState] = useState<number>(0);

  const HomePg = (props: HomePgComponentProps) => <Home authState={authState} />;
  const SignupPg = (props: RouteComponentProps) => <Signup />;
  const LoginPg = (props: RouteComponentProps) => <Login />;

  return (
    <Router>
      <HomePg path='/' authState={authState} />
      <SignupPg path='signup' />
      <LoginPg path='login' />
    </Router>
  );
};

export default App;
