import React, { FC, useState, useEffect } from "react";
import { Link } from "@reach/router";

interface Props {}

const Steps: FC<Props> = () => {
  const [dateWalked, setDateWalked] = useState("");
  const [stepsWalked, setStepsWalked] = useState(0);

  const [revealState, setRevealState] = useState(false);

  useEffect(() => {
    const date = new Date();
    const yy = date.getFullYear();
    const mm = date.getMonth();
    const dd = date.getDate();
    const formatDate = `${yy}-${mm > 9 ? mm + 1 : 0 + (mm + 1).toString()}-${dd}`;
    setDateWalked(formatDate);
  }, []);

  const handleChange = (e: any) => {
    switch (e.target.name) {
      case "dateWalked":
        setDateWalked(e.target.value);
        return;
      case "stepsWalked":
        setStepsWalked(e.target.value);
        return;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setRevealState(!revealState);
  };

  const handleClick = (num: number) => {
    const date = new Date(dateWalked);
    const yy = date.getFullYear();
    const mm = date.getMonth();
    const dd = date.getDate();
    const formatDate = `${yy}-${mm > 9 ? mm + 1 : 0 + (mm + 1).toString()}-${dd > 10 ? dd + num : 0 + (dd + num).toString()}`;
    setDateWalked(formatDate);
  };

  return (
    <div>
      <p>steps</p>
      <form onSubmit={handleSubmit}>
        <input name='dateWalked' type='date' value={dateWalked} onChange={handleChange} />
        <input name='stepsWalked' type='number' value={stepsWalked} onChange={handleChange} />
        <button type='submit'>submit</button>
        <button type='button' onClick={() => handleClick(-1)}>
          Previous
        </button>
        <button type='button' onClick={() => handleClick(1)}>
          Next
        </button>
      </form>
      {revealState ? (
        <div>
          <p>{dateWalked}</p>
          <p>{stepsWalked}</p>
        </div>
      ) : null}
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Steps;
