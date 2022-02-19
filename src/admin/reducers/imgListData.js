import { GET_IMG_LIST_DATA } from '../actions/types'

const initialState = []

const listImgDataReducer = (listImg = initialState, action) => { 
    const { type, payload } = action

    switch (type) { 
        case GET_IMG_LIST_DATA:
            return payload
            default:
                return listImg
    }
}

export default listImgDataReducer