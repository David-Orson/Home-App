import { SET_USER, SET_UNAUTHENTICATED } from "../types";
import axios from "axios";
import { navigate } from "@reach/router";
import { api } from "../../config";

export const setStepData = async (steps: number, day: string) => {
  const res = await axios.post(`${api}/steps`, { steps, day });
};
