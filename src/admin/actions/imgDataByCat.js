import {
    SET_DATA_MESSAGE,
    CLEAR_DATA_MESSAGE,
    GET_IMG_CATOGERY_DATA,
    GET_ALL_IMG_CATOGERY_DATA,
    CLEAR_IMG_CATOGERY_DATA,
} from './types'
import { SET_MESSAGE, CLEAR_MESSAGE } from '../../actions/types'

import CurdService from '../adminServices/curd.services'

export const getAllImgCatogeryData = () => async (dispatch) => {
    try {
        const res = await CurdService.getAll("imgcatdata" );

        dispatch({
            type: GET_ALL_IMG_CATOGERY_DATA,
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

export const getImgCatogeryData = (id) => async (dispatch) => {
    try {
        const res = await CurdService.get("imgcatdata", id);

        dispatch({
            type: GET_IMG_CATOGERY_DATA,
            payload: res.data,
        })
        dispatch({
            type: CLEAR_MESSAGE
        })
        dispatch({
            type: SET_DATA_MESSAGE,
            payload: res.data.message,
        })
        localStorage.setItem("catId", JSON.stringify(id))
        localStorage.setItem("catData", JSON.stringify(res.data))
        
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

export const getCustmImgCatData = (id) => async (dispatch) => {
    try {
        const res = await CurdService.get("imgcatdata", id);

        dispatch({
            type: GET_IMG_CATOGERY_DATA,
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

export const clearImgCatData = () => (dispatch)=>{
    dispatch({
        type: CLEAR_IMG_CATOGERY_DATA
    })
}
