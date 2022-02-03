import { SET_DATA_MESSAGE, CLEAR_DATA_MESSAGE } from "./../actions/types"
const initialState = {}

const dataMessage =  (state = initialState, action) =>{
  const { type, payload } = action

  switch (type) {
    case SET_DATA_MESSAGE:
      return { message: payload }

    case CLEAR_DATA_MESSAGE:
      return { message: "" }

    default:
      return state
  }
}

export default dataMessage