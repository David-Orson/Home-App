import React from "react";

type HomeProps = {
  authState: number;
};

const Home = ({ authState }: HomeProps) => {
  return (
    <div>
      {authState ? (
        <div>
          <p>Home</p>
          <p>logged in</p>
        </div>
      ) : (
        <div>
          <p>Home</p>
          <a href='/login'>Login</a>
        </div>
      )}
    </div>
  );
};

export default Home;
