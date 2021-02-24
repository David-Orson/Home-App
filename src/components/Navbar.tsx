import React, { FC } from 'react';
import { Link } from '@reach/router';

import '../css/Navbar.css';

import store from '../redux/store';

interface Props {}

const Navbar: FC<Props> = () => {
  const { user } = store.getState();

  console.log(user.authenticated);
  return (
    <div className='navbar'>
      {user.authenticated ? (
        <div>
          <Link to='/'>Home</Link>
          <Link to='/learning'>Learning</Link>
          <Link to='/steps'>Steps</Link>
        </div>
      ) : (
        <div>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
