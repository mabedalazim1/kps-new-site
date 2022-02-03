import { SET_DATA_MESSAGE, CLEAR_DATA_MESSAGE } from './types'

export const setDtatMessage = (message) => ({
  type: SET_DATA_MESSAGE,
  payload: message,
});

export const clearDtatMessage = () => ({
  type: CLEAR_DATA_MESSAGE,
})