import { loadingBarReducer } from 'react-redux-loading-bar'
import { combineReducers } from 'redux'
import imageUrl from './imgData'
import isLogged from './logeed'
import auth from "./auth"
import message from "./message"
import authedUser from "./authedUser"
import dataMessage from './../admin/reducers/dataMessage'
import imgSections from './../admin/reducers/imgSection' 

export default combineReducers({
  imageUrl,
  isLogged,
  auth,
  authedUser,
  message,
  dataMessage,
  imgSections,
  loadingBar : loadingBarReducer,
  })