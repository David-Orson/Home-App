import React, { FC } from 'react';
import { Link } from '@reach/router';

import store from '../redux/store';
import { logoutUser } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

interface Props {
  authState: number;
}

type HomeProps = {
  authState: number;
};

const Home: FC<Props> = ({ authState }: HomeProps) => {
  const state = store.getState();
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div>
      {state.user.authenticated ? (
        <div>
          <p>Home</p>
          <p>logged in</p>
          <Link to='/steps'>Steps</Link>
          <Link to='/learning'>Learning</Link>
          <button onClick={() => logoutUser(dispatch)}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Home</p>
          <Link to='/login'>Login</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
