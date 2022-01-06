import { loadingBarReducer } from 'react-redux-loading-bar'
import { combineReducers } from 'redux'
import imageUrl from './imgData'
import isLogged from './logeed'
import auth from "./auth"
import message from "./message"
import authedUser from "./authedUser"

export default combineReducers({
  imageUrl,
  isLogged,
  auth,
  authedUser,
  message,
  loadingBar : loadingBarReducer,
  })