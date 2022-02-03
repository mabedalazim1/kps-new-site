import {
  CREATE_IMGSECTION,
  RETRIEVE_IMGSECTIONS,
  RETRIEVE_IMGSECION_ID,
  UPDATE_IMGSECTION,
  DELETE_IMGSECTION,
  DELETE_ALL_IMGSECTIONS
} from './../actions/types'

const initialState = []

const imgSectionReducer = (imgSection = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_IMGSECTION:
      return [...imgSection, payload]

    case RETRIEVE_IMGSECTIONS:
      return payload
    case RETRIEVE_IMGSECION_ID:
      return payload

    case UPDATE_IMGSECTION:
      if (imgSection.length > 1) {
        return imgSection.map(imgSection => {
          if (imgSection.id === payload.id) {
            return {
              ...imgSection,
              ...payload
            }
          } else {
            return imgSection
          }
        })
      } else {
        return imgSection 
      }


    case DELETE_IMGSECTION:
      if (imgSection.length > 1) {
        return imgSection.filter(({ id }) => id !== payload.id)
      }else{
        return []
      }
      

    case DELETE_ALL_IMGSECTIONS:
      return []

    default:
      return imgSection
  }
}

export default imgSectionReducer
