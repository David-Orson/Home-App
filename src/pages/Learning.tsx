import React, { FC, useState, useEffect } from 'react';
import { Link } from '@reach/router';

import { useDispatch, useStore } from 'react-redux';

import { setLearningCard } from '../redux/actions/learningActions';

interface Props {}

const Learning: FC<Props> = () => {
  const [cardTitle, setCardTitle] = useState('');
  const [cardBody, setCardBody] = useState('');
  const [pendingTitle, setPendingTitle] = useState('');
  const [pendingBody, setPendingBody] = useState('');

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
      case 'cardTitle':
        setCardTitle(e.target.value);
        return;
      case 'cardBody':
        setCardBody(e.target.value);
        return;
      case 'pendingTitle':
        setPendingTitle(e.target.value);
        return;
      case 'pendingBody':
        setPendingBody(e.target.value);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    switch (e.target.name) {
      case 'learningCard':
        setLearningCard(dispatch, cardTitle, cardBody);
        return;
      case 'pendingCard':
        setPendingCard(dispatch, pendingTitle, pendingBody);
        return;
    }
  };

  return (
    <div>
      <p>Learning</p>
      <Link to='/'>Home</Link>
      <div>{currentCard}</div>
      <div>
        <form name='learningCard' onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            name='cardTitle'
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
        <div>{currentPending}</div>
        <div>
          <form name='pendingCard' onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              name='pendingTitle'
              type='text'
              value={pendingTitle}
              onChange={handleChange}
            />
            <label>Body</label>
            <input
              name='pendingBody'
              type='text'
              value={pendingBody}
              onChange={handleChange}
            />
            <button type='submit'>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Learning;
