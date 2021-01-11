import React, { FC, ChangeEvent, useState } from "react";

import { loginUser } from "../redux/actions/userActions";

interface Props {}

const Login: FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email.includes("@")) {
      console.log("email");
    } else {
      console.log("handle");
    }

    loginUser(email, password);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        return;
      case "password":
        setPassword(e.target.value);
        return;
    }
  };

  return (
    <div className='Login'>
      <h1>Login</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label>Username or Email</label>
        <input name='email' type='text' value={email} onChange={handleChange} />
        <label>Password</label>
        <input name='password' type='password' value={password} onChange={handleChange} />
        <button data-testid='submit-button'>submit</button>
      </form>
      <a href='/'>Home</a>
      <a href='/signup'>Signup</a>
    </div>
  );
};

export default Login;
