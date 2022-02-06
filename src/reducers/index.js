import { loadingBarReducer } from 'react-redux-loading-bar'
import { combineReducers } from 'redux'
import imageUrl from './imgData'
import isLogged from './logeed'
import auth from "./auth"
import message from "./message"
import authedUser from "./authedUser"
import dataMessage from './../admin/reducers/dataMessage'
import imgSections from './../admin/reducers/imgSection' 
import imgCatogery from './../admin/reducers/imgCatogery' 
import imgData from './../admin/reducers/imgData' 
import imgCatogryData from './../admin/reducers/imgCatogeryData' 
import imgCatBySection from './../admin/reducers/imgCatBySection' 

export default combineReducers({
  imageUrl,
  isLogged,
  auth,
  authedUser,
  message,
  dataMessage,
  imgSections,
  imgCatogery,
  imgCatBySection,
  imgData,
  imgCatogryData,
  loadingBar : loadingBarReducer,
  })