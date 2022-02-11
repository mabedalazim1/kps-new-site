import {
  CREATE_IMGCDATA,
  RETRIEVE_IMGDATAS,
  RETRIEVE_IMGDATA_ID,
  UPDATE_IMGDATA,
  DELETE_IMGDATA,
  DELETE_ALL_IMGDATAS,
} from '../actions/types'

const initialState = []

const imgDataReducer = (imgData = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_IMGCDATA:
      return [...imgData, payload]

    case RETRIEVE_IMGDATAS:
      return payload
    
    case RETRIEVE_IMGDATA_ID:
      return payload

    case UPDATE_IMGDATA:
      if (imgData.length > 1) {
        return imgData.map(imgData => {
          if (imgData.id === payload.id) {
            return {
              ...imgData,
              ...payload
            }
          } else {
            return imgData
          }
        })
      } else {
        return imgData 
      }


    case DELETE_IMGDATA:
      if (imgData.length > 1) {
        return imgData.filter(({ id }) => id !== payload.id)
      }else{
        return []
      }
      

    case DELETE_ALL_IMGDATAS:
      return []
    default:
      return imgData
  }
}

export default imgDataReducer
