import React, { FC, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setSubject } from '../redux/actions/learningActions';

interface Props {}

const AddSubject: FC<Props> = () => {
  const [subjectValue, setSubjectValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubject(dispatch, subjectValue);
  };

  const handleChange = (e: any) => {
    setSubjectValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='subject'
          type='text'
          value={subjectValue}
          onChange={handleChange}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default AddSubject;
