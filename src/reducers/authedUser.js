import { SET_AUTHED, RESET_AUTHED } from '../actions/authedUser'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED:
      return action.id
    case RESET_AUTHED:
      return null
    default:
      return state
  }
}
