import {
  CREATE_IMGSECTION,
  RETRIEVE_IMGSECTIONS,
  RETRIEVE_IMGSECION_ID,
  UPDATE_IMGSECTION,
  DELETE_IMGSECTION,
  DELETE_ALL_IMGSECTIONS,
  SET_DATA_MESSAGE,
  CLEAR_DATA_MESSAGE,
} from './types'
import { SET_MESSAGE, CLEAR_MESSAGE } from './../../actions/types'

import CurdService from './../adminServices/curd.services'

const modle = "imgsections"
export const createImgSection = (title, sectionDesc) => async (dispatch) => {
  const res = await CurdService.create(modle, { title, sectionDesc })
  try {
    dispatch({
      type: CREATE_IMGSECTION,
      payload: res.data,
    })
    dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload:res.data.message,
    })
    return Promise.resolve(res.data)
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type:CLEAR_DATA_MESSAGE
    })
    return Promise.reject(err)
  }
}

export const retrieveImgSections = () => async (dispatch) => {
  try {
    const res = await CurdService.getAll(modle);

    dispatch({
      type: RETRIEVE_IMGSECTIONS,
      payload: res.data,
    })
    dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload:res.data.message,
    })
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type:CLEAR_DATA_MESSAGE
    })
    console.log(err)
  }
}


export const retrieveImgSectionById = (id) => async (dispatch) => {
  try {
    const res = await CurdService.get(modle, id);

    dispatch({
      type: RETRIEVE_IMGSECION_ID,
      payload: res.data,
    })
     dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload:res.data.message,
    })
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type:CLEAR_DATA_MESSAGE
    })
    console.log(err)
  }
}

export const updateImgSection = (id, data) => async (dispatch) => {
  try {
    const res = await CurdService.update(modle, id, data)

    dispatch({
      type: UPDATE_IMGSECTION,
      payload: data,
    })
    dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload:res.data.message,
    })

    return Promise.resolve(res.data)
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type:CLEAR_DATA_MESSAGE
    })
    return Promise.reject(err)
  }
}

export const deleteImgSection = (id) => async (dispatch) => {
  try {
   const res = await CurdService.remove(modle, `/${id}`)

    dispatch({
      type: DELETE_IMGSECTION,
      payload: { id },
    })
    dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload:res.data.message,
    })
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type:CLEAR_DATA_MESSAGE
    })
    console.log(err)
  }
}

export const deleteAllImgSection = () => async (dispatch) => {
  try {
    const res = await CurdService.removeAll(modle)

    dispatch({
      type: DELETE_ALL_IMGSECTIONS,
      payload: res.data,
    })

    return Promise.resolve(res.data)
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type:CLEAR_DATA_MESSAGE
    })
    return Promise.reject(err)
  }
}

export const findImgSectionByTitle = (title) => async (dispatch) => {
  try {
    const res = await CurdService.findByTitle(modle, title);

    dispatch({
      type: RETRIEVE_IMGSECTIONS,
      payload: res.data,
    });
    dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload:res.data.message,
    })
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type:CLEAR_DATA_MESSAGE
    })
    console.log(err);
  }
}