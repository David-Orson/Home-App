import axios from 'axios';

import { api } from '../../config';

import { SET_LEARNING_CARDS } from '../types';

export const setLearningCard = async (
  dispatch: any,
  title: string,
  body: string
) => {
  const res = await axios.post(`${api}/learning`, { title, body });
  getLearningCardsByUser(dispatch);
};

export const getLearningCardsByUser = async (dispatch: any) => {
  const res = await axios.get(`${api}/learning-cards`);
  dispatch({ type: SET_LEARNING_CARDS, payload: res.data });
};
