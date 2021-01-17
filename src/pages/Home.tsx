import React, { FC } from "react";
import { Link } from "@reach/router";

import store from "../redux/store";

interface Props {
  authState: number;
}

type HomeProps = {
  authState: number;
};

const Home: FC<Props> = ({ authState }: HomeProps) => {
  const state = store.getState();
  return (
    <div>
      {state.user ? (
        <div>
          <p>Home</p>
          <p>logged in</p>
          <Link to='/steps'>Steps</Link>
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
