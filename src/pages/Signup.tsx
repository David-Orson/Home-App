import React, { FC, ChangeEvent, useState } from 'react';

import store from '../redux/store';
import { signupUser } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

interface Props {}

const Signup: FC<Props> = () => {
  const [handle, setHandle] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    console.log('submitted');
    e.preventDefault();
    let userData = {
      handle,
      email,
      password,
      confirm,
    };
    console.log(userData);
    signupUser(userData, dispatch);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'handle':
        setHandle(e.target.value);
        return;
      case 'email':
        setEmail(e.target.value);
        return;
      case 'password':
        setPassword(e.target.value);
        return;
      case 'confirm':
        setConfirm(e.target.value);
    }
  };

  return (
    <div className='main'>
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
        <button data-testid='submit-button'>submit</button>
      </form>
    </div>
  );
};

export default Signup;
