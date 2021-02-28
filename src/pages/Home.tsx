import React, { FC, useState } from 'react';
import { Link } from '@reach/router';

import { logoutUser } from '../redux/actions/userActions';
import { useDispatch, useStore, useSelector } from 'react-redux';

import Title from '../components/Title';

interface Props {
  authState: number;
  isLoading: boolean;
  setIsLoading: any;
}

type HomeProps = {
  authState: number;
  isLoading: boolean;
  setIsLoading: any;
};

const Home: FC<Props> = ({ authState, isLoading, setIsLoading }: HomeProps) => {
  const store = useStore();
  const dispatch = useDispatch();
  console.log(store);

  const state = store.getState();

  console.log(state);

  const user = useSelector((state: any) => state.user);
  const learning = useSelector((state: any) => state.learning);
  const pendings = useSelector((state: any) => state.learning.pendings);
  const completePendings = pendings.filter(
    (pending: any) => !pending.isCompleted
  );
  const historicPendings = pendings.filter(
    (pending: any) => pending.isCompleted
  );

  // if (user.credentials) {
  //   if (isLoading) {
  //     setIsLoading(false);
  //   }
  // }

  return (
    <div className='main'>
      <Title title='Dashboard' />
      {!state.user.authenticated ? (
        <p>Please Login or Signup</p>
      ) : user.credentials ? (
        <div>
          <p>logged in</p>
          <button onClick={() => logoutUser(dispatch)}>Logout</button>
          <div>
            <p>
              welcome {user.credentials.handle ? user.credentials.handle : null}
            </p>
            <p>
              You have {learning.cards.length} learning cards among{' '}
              {learning.subjects.length} subjects.
            </p>
            <p>
              You have {completePendings.length} pending items and have
              completed {historicPendings.length} pendings
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
