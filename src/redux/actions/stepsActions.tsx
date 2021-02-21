import axios from 'axios';
import { api } from '../../config';

export const setStepData = async (steps: number, day: string) => {
  const res = await axios.post(`${api}/steps`, { steps, day });
};
