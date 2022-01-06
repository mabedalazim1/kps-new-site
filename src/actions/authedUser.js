export const SET_AUTHED = 'SET_AUTHED'
export const RESET_AUTHED = 'RESET_AUTHED'

export function setAuthed (id) {
  return {
    type: SET_AUTHED,
    id
  }
}

export function resetAuthed (id) {
  return {
    type: RESET_AUTHED,
    id
  }
}
