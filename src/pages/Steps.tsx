import React, { FC } from "react";
import { Link } from "@reach/router";

interface Props {}

const Steps: FC<Props> = () => {
  return (
    <div>
      <p>steps</p>
      <form>
        <input type='date' />
        <input type='number' />
        <button>submit</button>
      </form>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Steps;
