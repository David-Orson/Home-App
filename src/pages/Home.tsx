import React, { FC } from 'react';
import { Link } from '@reach/router';

import store from '../redux/store';
import { logoutUser } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

import Title from '../components/Title';

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
    <div className='main'>
      <Title title='Learning' />
      {state.user.authenticated ? (
        <div>
          <p>logged in</p>
          <button onClick={() => logoutUser(dispatch)}>Logout</button>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
