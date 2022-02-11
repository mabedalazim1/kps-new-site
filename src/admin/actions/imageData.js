import {
  CREATE_IMGCDATA,
  RETRIEVE_IMGDATAS,
  UPDATE_IMGDATA,
  DELETE_IMGDATA,
  DELETE_ALL_IMGDATAS,
  RETRIEVE_IMGDATA_ID,
  SET_DATA_MESSAGE,
  CLEAR_DATA_MESSAGE
} from './types'
import { SET_MESSAGE, CLEAR_MESSAGE } from './../../actions/types'

import CurdService from './../adminServices/curd.services'

const modle = "imgdata"
export const createImgData = (imgUrl, imgDesc) => async (dispatch) => {
  const res = await CurdService.create(modle, { imgUrl, imgDesc })
  try {
    dispatch({
      type: CREATE_IMGCDATA,
      payload: res.data,
    })
    dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload: res.data.message,
    })
    return Promise.resolve(res.data)
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type: CLEAR_DATA_MESSAGE
    })
    return Promise.reject(err)
  }
}

export const retrieveImgDatas = () => async (dispatch) => {
  try {
    const res = await CurdService.getAll(modle);

    dispatch({
      type: RETRIEVE_IMGDATAS,
      payload: res.data,
    })
    dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload: res.data.message,
    })
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type: CLEAR_DATA_MESSAGE
    })
    console.log(err)
  }
}

export const retrieveImgDataById = (id) => async (dispatch) => {
  try {
    const res = await CurdService.get(modle, id);

    dispatch({
      type: RETRIEVE_IMGDATA_ID,
      payload: res.data,
    })
    dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload: res.data.message,
    })
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type: CLEAR_DATA_MESSAGE
    })
    console.log(err)
  }
}

export const updateImgData = (id, data) => async (dispatch) => {
  try {
    const res = await CurdService.update(modle, id, data)

    dispatch({
      type: UPDATE_IMGDATA,
      payload: data,
    })
    dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload: res.data.message,
    })

    return Promise.resolve(res.data)
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type: CLEAR_DATA_MESSAGE
    })
    return Promise.reject(err)
  }
}

export const deleteImgData = (id) => async (dispatch) => {
  try {
    const res = await CurdService.remove(modle, `/${id}`)

    dispatch({
      type: DELETE_IMGDATA,
      payload: { id },
    })
    dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload: res.data.message,
    })
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type: CLEAR_DATA_MESSAGE
    })
    console.log(err)
  }
}

export const deleteAllImgData = () => async (dispatch) => {
  try {
    const res = await CurdService.removeAll(modle)

    dispatch({
      type: DELETE_ALL_IMGDATAS,
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
      type: CLEAR_DATA_MESSAGE
    })
    return Promise.reject(err)
  }
}

export const findImgDataByTitle = (imgDesc) => async (dispatch) => {
  try {
    const res = await CurdService.findByTitle(modle, imgDesc);

    dispatch({
      type: RETRIEVE_IMGDATAS,
      payload: res.data,
    });
    dispatch({
      type: CLEAR_MESSAGE
    })
    dispatch({
      type: SET_DATA_MESSAGE,
      payload: res.data.message,
    })
  } catch (err) {
    const message = err.message
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
    dispatch({
      type: CLEAR_DATA_MESSAGE
    })
    console.log(err);
  }
}
