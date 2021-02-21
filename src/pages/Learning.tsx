import React, { FC, useState, useEffect } from 'react';
import { Link } from '@reach/router';

import { useDispatch, useStore } from 'react-redux';

import {
  setLearningCard,
  getLearningCardsByUser,
} from '../redux/actions/learningActions';

interface Props {}

const Learning: FC<Props> = () => {
  const [cardTitle, setCardTitle] = useState('');
  const [cardBody, setCardBody] = useState('');

  const [cardSelector, setCardSelector] = useState(0);

  const dispatch = useDispatch();
  const store = useStore();
  const state = store.getState();
  const { cards } = state.learning;

  const handleNextClick = () => {
    let randomNum = Math.floor(Math.random() * cards.length);

    if (randomNum === cardSelector) {
      handleNextClick();
      return;
    } else {
      console.log(randomNum);
      setCardSelector(randomNum);
    }
  };

  let currentCard = cards ? (
    <div>
      <h1>{cards[cardSelector].title}</h1>
      <p>{cards[cardSelector].body}</p>
      <button onClick={handleNextClick}>Next</button>
    </div>
  ) : null;

  const handleChange = (e: any) => {
    switch (e.target.name) {
      case 'title':
        setCardTitle(e.target.value);
        return;
      case 'cardBody':
        setCardBody(e.target.value);
        return;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLearningCard(dispatch, cardTitle, cardBody);
  };

  return (
    <div>
      <p>Learning</p>
      <Link to='/'>Home</Link>
      <div>{currentCard}</div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            name='title'
            type='text'
            value={cardTitle}
            onChange={handleChange}
          />
          <label>Body</label>
          <input
            name='cardBody'
            type='text'
            value={cardBody}
            onChange={handleChange}
          />
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Learning;
