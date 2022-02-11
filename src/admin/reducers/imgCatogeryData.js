import { GET_IMG_CATOGERY_DATA,  CLEAR_IMG_CATOGERY_DATA,} from '../actions/types'

const initialState = []

const imgCatogeryDataReducer = (imgCatogery = initialState, action) => {
    const { type, payload } = action
    switch (type) { 
        case GET_IMG_CATOGERY_DATA:
            return payload 
        
        case CLEAR_IMG_CATOGERY_DATA:
            return []
        
        default:
          return imgCatogery
      }
    }
    export default imgCatogeryDataReducer
    