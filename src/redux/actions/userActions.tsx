import {
  SET_USER
} from "../types"


export const loginUser = () => (dispatch: any) => {
  dispatch({
    type: SET_USER,
    payload: 'test'
  })
}