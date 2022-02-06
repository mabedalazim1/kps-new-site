import {
    CREATE_IMGCATOGERY,
    RETRIEVE_IMGCATOGERIES,
    RETRIEVE_IMGCATOGERY_ID,
    UPDATE_IMGCATOGERY,
    DELETE_IMGCATOGERY,
    DELETE_ALL_IMGCATOGERIES,
    SET_DATA_MESSAGE,
  CLEAR_DATA_MESSAGE,
  } from './types'
  import { SET_MESSAGE, CLEAR_MESSAGE } from './../../actions/types'
  
  import CurdService from './../adminServices/curd.services'
  
  const modle = "imgcatogery"
  export const createImgCatogery = (title, catDesc) => async (dispatch) => {
    const res = await CurdService.create(modle, { title, catDesc })
    try {
      dispatch({
        type: CREATE_IMGCATOGERY,
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
  
  export const retrieveImgCatogeries = () => async (dispatch) => {
    try {
      const res = await CurdService.getAll(modle);
  
      dispatch({
        type: RETRIEVE_IMGCATOGERIES,
        payload: res.data,
      })
      dispatch({
        type: CLEAR_MESSAGE
      })
      dispatch({
        type: SET_DATA_MESSAGE,
        payload:res.data.message,
      })
      localStorage.removeItem('catId')
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
  

  export const retrieveImgCatogeryById = (id) => async (dispatch) => {
    try {
      const res = await CurdService.get(modle, id);
  
      dispatch({
        type: RETRIEVE_IMGCATOGERY_ID,
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
  
  export const updateImgCatogery = (id, data) => async (dispatch) => {
    try {
      const res = await CurdService.update(modle, id, data)
  
      dispatch({
        type: UPDATE_IMGCATOGERY,
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
  
  export const deleteImgCatogery = (id) => async (dispatch) => {
    try {
     const res = await CurdService.remove(modle, `/${id}`)
  
      dispatch({
        type: DELETE_IMGCATOGERY,
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
  
  export const deleteAllImgCatogery = () => async (dispatch) => {
    try {
      const res = await CurdService.removeAll(modle)
  
      dispatch({
        type: DELETE_ALL_IMGCATOGERIES,
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
  
  export const findImgCatogeryByTitle = (title) => async (dispatch) => {
    try {
      const res = await CurdService.findByTitle(modle, title);
  
      dispatch({
        type: RETRIEVE_IMGCATOGERIES,
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