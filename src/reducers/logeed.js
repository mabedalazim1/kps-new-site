import {IS_LOGGED, RESET_LOGGED} from '../actions/logged'

export default function isLogged(state = {}, action) {
  
  switch (action.type) {
    case IS_LOGGED:
        return { logged: true }
    case RESET_LOGGED:
        return { logged: false }
    default:
      return state
  }
}

