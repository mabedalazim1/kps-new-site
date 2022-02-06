import {
    GET_IMG_SECTION_CATOGERY,
} from '../actions/types'

const initialState = []


const imgCatBySectionReducer = (imgCatogery = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        
        case GET_IMG_SECTION_CATOGERY:
            return payload
        
        default:
            return imgCatogery
    }
}

export default imgCatBySectionReducer