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

  return (
    <div>
      {state.user.authenticated ? (
        <div>
          <p>Home</p>
          <p>logged in</p>
          <button onClick={() => logoutUser(dispatch)}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Home</p>
        </div>
      )}
    </div>
  );
};

export default Home;
