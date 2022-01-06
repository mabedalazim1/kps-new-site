import {GET_IMAGE} from '../actions/imgData'

export default function getImage(state = {}, action) {
  
  switch (action.type) {
    case GET_IMAGE:
      return { ...state , url: action.url}
    default:
      return state
  }
}

