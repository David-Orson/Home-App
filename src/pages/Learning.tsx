import React, { FC, useState } from 'react';
import { Link } from '@reach/router';

import { useDispatch, useStore } from 'react-redux';

import AddSubject from '../components/AddSubject';

import {
  setLearningCard,
  setPendingCard,
  setSubject,
  updateLearningCard,
  updatePendingCard,
} from '../redux/actions/learningActions';

import Title from '../components/Title';

interface Props {}

const Learning: FC<Props> = () => {
  const [cardTitle, setCardTitle] = useState('');
  const [cardBody, setCardBody] = useState('');
  const [cardSubject, setCardSubject] = useState('');
  const [pendingTitle, setPendingTitle] = useState('');
  const [pendingBody, setPendingBody] = useState('');
  const [pendingCompleted, setPendingCompleted] = useState(false);

  const [existingCardTitle, setExistingCardTitle] = useState('');
  const [existingCardBody, setExistingCardBody] = useState('');
  const [existingCardSubject, setExistingCardSubject] = useState('');
  const [existingPendingTitle, setExistingPendingTitle] = useState('');
  const [existingPendingBody, setExistingPendingBody] = useState('');
  const [existingPendingCompleted, setExistingPendingCompleted] = useState(
    false
  );

  const [editingCard, setEditingCard] = useState(false);
  const [editingPending, setEditingPending] = useState(false);

  const [cardSelector, setCardSelector] = useState(0);
  const [pendingSelector, setPendingSelector] = useState(0);

  const dispatch = useDispatch();
  const store = useStore();
  const state = store.getState();
  const { cards, pendings, subjects } = state.learning;

  const handleNextClick = (e: any) => {
    let cardRandomNum = Math.floor(Math.random() * cards.length);
    let pendingRandomNum = Math.floor(Math.random() * pendings.length);
    console.log('fired');
    switch (e.target.name) {
      case 'cardClick':
        if (cards.length > 1 && cardRandomNum === cardSelector) {
          handleNextClick(e);
          return;
        } else {
          setCardSelector(cardRandomNum);
          setExistingCardTitle(cards[cardRandomNum].title);
          setExistingCardBody(cards[cardRandomNum].body);
        }
        return;
      case 'pendingClick':
        if (pendings.length > 1 && pendingRandomNum === pendingSelector) {
          console.log('reroll');
          handleNextClick(e);

          return;
        } else {
          if (pendings[pendingRandomNum].isCompleted === true) {
            console.log('completed!');
            handleNextClick(e);
            return;
          }
          setPendingSelector(pendingRandomNum);
          setExistingPendingTitle(pendings[pendingRandomNum].title);
          setExistingPendingBody(pendings[pendingRandomNum].body);
          setExistingPendingCompleted(pendings[pendingSelector].isCompleted);
        }
        return;
      default:
        return;
    }
  };

  const handleEditClick = (e: any) => {
    switch (e.target.name) {
      case 'cardEdit':
        setEditingCard(!editingCard);
        setExistingCardTitle(cards[cardSelector].title);
        setExistingCardBody(cards[cardSelector].body);
        return;
      case 'pendingEdit':
        setEditingPending(!editingPending);
        setExistingPendingTitle(pendings[pendingSelector].title);
        setExistingPendingBody(pendings[pendingSelector].body);
        setExistingPendingCompleted(pendings[pendingSelector].isCompleted);
        return;
    }
  };

  const handleChange = (e: any) => {
    switch (e.target.name) {
      case 'cardTitle':
        setCardTitle(e.target.value);
        return;
      case 'cardBody':
        setCardBody(e.target.value);
        return;
      case 'cardSubject':
        setCardSubject(e.target.value);
        return;
      case 'pendingTitle':
        setPendingTitle(e.target.value);
        return;
      case 'pendingBody':
        setPendingBody(e.target.value);
        return;
      case 'pendingCompleted':
        setPendingCompleted(!pendingCompleted);
        return;
      case 'existingCardTitle':
        setExistingCardTitle(e.target.value);
        return;
      case 'existingCardBody':
        setExistingCardBody(e.target.value);
        return;
      case 'existingCardSubject':
        setExistingCardSubject(e.target.value);
        return;
      case 'existingPendingTitle':
        setExistingPendingTitle(e.target.value);
        return;
      case 'existingPendingBody':
        setExistingPendingBody(e.target.value);
        return;
      case 'existingPendingCompleted':
        setExistingPendingCompleted(!existingPendingCompleted);
        return;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    switch (e.target.name) {
      case 'learningCard':
        setLearningCard(dispatch, cardTitle, cardBody, cardSubject);
        return;
      case 'pendingCard':
        setPendingCard(dispatch, pendingTitle, pendingBody, pendingCompleted);
        return;
      case 'existingLearningCard':
        updateLearningCard(
          dispatch,
          cards[cardSelector].id,
          existingCardTitle,
          existingCardBody,
          existingCardSubject
        );
        return;
      case 'existingPendingCard':
        updatePendingCard(
          dispatch,
          pendings[pendingSelector].id,
          existingPendingTitle,
          existingPendingBody,
          existingPendingCompleted
        );
    }
  };

  let subjectsMarkup =
    subjects.length !== 0
      ? subjects.map((subject: any) => (
          <div>
            <p>{subject.name}</p>
          </div>
        ))
      : null;

  let subjectOptions =
    subjects.length !== 0
      ? subjects.map((subject: any) => (
          <option value={subject.name}>{subject.name}</option>
        ))
      : null;

  let existingSubjectOptions =
    subjects.length !== 0
      ? subjects.map((subject: any) => (
          <option value={subject.name}>{subject.name}</option>
        ))
      : null;

  let currentCard =
    cards.length !== 0 ? (
      <div className='markup'>
        <h3>{cards[cardSelector].title}</h3>
        <h5 className='card-subheading'>{cards[cardSelector].subject}</h5>
        <p className='card-body'>{cards[cardSelector].body}</p>

        {editingCard ? (
          <form name='existingLearningCard' onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              name='existingCardTitle'
              type='text'
              value={existingCardTitle}
              onChange={handleChange}
            />
            <label>Body</label>
            <textarea
              className='input-body'
              name='existingCardBody'
              value={existingCardBody}
              onChange={handleChange}
            />
            <select
              name='existingCardSubject'
              value={existingCardSubject}
              onChange={handleChange}
            >
              <option value=''>Select a subject</option>
              {existingSubjectOptions}
            </select>
            <button type='submit'>submit</button>
          </form>
        ) : null}

        <button name='cardEdit' onClick={handleEditClick}>
          Edit
        </button>
        <button name='cardClick' onClick={handleNextClick}>
          Next
        </button>
      </div>
    ) : null;

  let currentPending =
    pendings.length !== 0 ? (
      <div className='markup'>
        <h3>{pendings[pendingSelector].title}</h3>
        <p className='card-body'>{pendings[pendingSelector].body}</p>
        {pendings[pendingSelector].isCompleted ? (
          <p>Completed</p>
        ) : (
          <p>Not Completed</p>
        )}
        {editingPending ? (
          <form name='existingPendingCard' onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              name='existingPendingTitle'
              type='text'
              value={existingPendingTitle}
              onChange={handleChange}
            />
            <label>Body</label>
            <textarea
              className='input-body'
              name='existingPendingBody'
              value={existingPendingBody}
              onChange={handleChange}
            />
            <label>Completed?</label>
            <input
              name='existingPendingCompleted'
              type='checkbox'
              checked={existingPendingCompleted}
              onChange={handleChange}
            />
            <button type='submit'>submit</button>
          </form>
        ) : null}

        <button name='pendingEdit' onClick={handleEditClick}>
          Edit
        </button>
        <button name='pendingClick' onClick={handleNextClick}>
          Next
        </button>
      </div>
    ) : null;

  return (
    <div className='main'>
      <Title title='Learning' />
      <div className='card'>{currentCard}</div>
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
          <textarea
            className='input-body'
            name='cardBody'
            value={cardBody}
            onChange={handleChange}
          />
          <label>Subject</label>
          <select
            name='cardSubject'
            value={cardSubject}
            onChange={handleChange}
          >
            <option value=''>Select a subject</option>
            {subjectOptions}
          </select>

          <button type='submit'>submit</button>
        </form>
        <div className='card'>{currentPending}</div>
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
            <textarea
              className='input-body'
              name='pendingBody'
              value={pendingBody}
              onChange={handleChange}
            />
            <label>Completed?</label>
            <input
              name='pendingCompleted'
              type='checkbox'
              checked={pendingCompleted}
              onChange={handleChange}
            />
            <button type='submit'>submit</button>
          </form>
          <h3>Add Subject</h3>
          <p></p>
          <AddSubject />
          {subjectsMarkup}
        </div>
      </div>
    </div>
  );
};

export default Learning;
