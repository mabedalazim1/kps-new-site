import { GET_IMG_CATOGERY_DATA } from '../actions/types'

const initialState = []

const imgCatogeryDataReducer = (imgCatogery = initialState, action) => {
    const { type, payload } = action
    switch (type) { 
        case GET_IMG_CATOGERY_DATA:
            return payload     
        default:
          return imgCatogery
      }
    }
    export default imgCatogeryDataReducer
    