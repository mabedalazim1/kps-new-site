import {
  CREATE_IMGCATOGERY,
  RETRIEVE_IMGCATOGERIES,
  RETRIEVE_IMGCATOGERY_ID,
  UPDATE_IMGCATOGERY,
  DELETE_IMGCATOGERY,
  DELETE_ALL_IMGCATOGERIES,
} from '../actions/types'

const initialState = []

const imgCatogeryReducer = (imgCatogery = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_IMGCATOGERY:
      return [...imgCatogery, payload]

    case RETRIEVE_IMGCATOGERIES:
      return payload
    case RETRIEVE_IMGCATOGERY_ID:
      return payload

    case UPDATE_IMGCATOGERY:
      if (imgCatogery.length > 1) {
        return imgCatogery.map(imgCatogery => {
          if (imgCatogery.id === payload.id) {
            return {
              ...imgCatogery,
              ...payload
            }
          } else {
            return imgCatogery
          }
        })
      } else {
        return imgCatogery 
      }


    case DELETE_IMGCATOGERY:
      if (imgCatogery.length > 1) {
        return imgCatogery.filter(({ id }) => id !== payload.id)
      }else{
        return []
      }
      

    case DELETE_ALL_IMGCATOGERIES:
      return []

    default:
      return imgCatogery
  }
}

export default imgCatogeryReducer
