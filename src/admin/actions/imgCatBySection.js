import {
    SET_DATA_MESSAGE,
    CLEAR_DATA_MESSAGE,
    GET_IMG_SECTION_CATOGERY,
  } from './types'
  import { SET_MESSAGE, CLEAR_MESSAGE } from './../../actions/types'
  
  import CurdService from './../adminServices/curd.services'

export const getImgSectionCatgorey = () => async (dispatch) => {
    try {
      const res = await CurdService.getAll("imgcatsection");
  
      dispatch({
        type: GET_IMG_SECTION_CATOGERY,
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