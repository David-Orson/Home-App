import axios from 'axios';
import { AnyMxRecord } from 'dns';

import { api } from '../../config';

import { SET_LEARNING_CARDS, SET_PENDING_CARDS, SET_SUBJECTS } from '../types';

export const setLearningCard = async (
  dispatch: any,
  title: string,
  body: string,
  subject: string
) => {
  const res = await axios.post(`${api}/learning`, { title, body, subject });
  getLearningCardsByUser(dispatch);
};

export const getLearningCardsByUser = async (dispatch: any) => {
  const res = await axios.get(`${api}/learning`);
  dispatch({ type: SET_LEARNING_CARDS, payload: res.data });
};

export const updateLearningCard = async (
  dispatch: any,
  id: any,
  title: string,
  body: string,
  subject: string
) => {
  const res = await axios.put(`${api}/learning`, { id, title, body, subject });
  getLearningCardsByUser(dispatch);
};

export const setPendingCard = async (
  dispatch: any,
  title: string,
  body: string,
  isCompleted: boolean
) => {
  const res = await axios.post(`${api}/pending`, { title, body, isCompleted });
  getPendingCardsByUser(dispatch);
};

export const getPendingCardsByUser = async (dispatch: any) => {
  const res = await axios.get(`${api}/pending`);
  dispatch({ type: SET_PENDING_CARDS, payload: res.data });
};

export const updatePendingCard = async (
  dispatch: any,
  id: any,
  title: string,
  body: string,
  isCompleted: boolean
) => {
  const res = await axios.put(`${api}/pending`, {
    id,
    title,
    body,
    isCompleted,
  });
  getLearningCardsByUser(dispatch);
};

export const setSubject = async (dispatch: any, subject: string) => {
  const res = await axios.post(`${api}/subject`, { subject });
  getSubjectsByUser(dispatch);
};

export const getSubjectsByUser = async (dispatch: any) => {
  const res = await axios.get(`${api}/subjects`);
  dispatch({ type: SET_SUBJECTS, payload: res.data });
};
