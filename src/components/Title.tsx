import React, { FC } from 'react';

import '../css/Title.css';

interface Props {
  title: string;
}

const Title: FC<Props> = (props) => {
  return (
    <div className='title'>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
