import React, { FC, ChangeEvent, useState } from "react";

interface Props {}

const Signup: FC<Props> = () => {
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "handle":
        setHandle(e.target.value);
        return;
      case "email":
        setEmail(e.target.value);
        return;
      case "password":
        setPassword(e.target.value);
        return;
      case "confirm":
        setConfirm(e.target.value);
    }
  };

  return (
    <div className='Login'>
      <h1>Signup</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name='handle'
          type='text'
          value={handle}
          onChange={handleChange}
        />
        <label>Email</label>
        <input name='email' type='text' value={email} onChange={handleChange} />
        <label>Password</label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          name='confirm'
          type='password'
          value={confirm}
          onChange={handleChange}
        />
      </form>
      <a href='/'>Home</a>
    </div>
  );
};

export default Signup;
