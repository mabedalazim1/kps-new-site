import {
    GET_IMG_LIST_DATA,
    SET_DATA_MESSAGE,
    CLEAR_DATA_MESSAGE,
} from './types'

import { SET_MESSAGE, CLEAR_MESSAGE } from '../../actions/types'
import CurdService from '../adminServices/curd.services'

export const getImgListData = (id) => async (dispatch) => {
    try {
        const res = await CurdService.get("listimages", id);

        dispatch({
            type: GET_IMG_LIST_DATA,
            payload: res.data,
        })
        dispatch({
            type: CLEAR_MESSAGE
        })
        dispatch({
            type: SET_DATA_MESSAGE,
            payload: res.data.message,
        })
        return "ok"
        
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
        return "Err"
    }

}
