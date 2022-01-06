export const IS_LOGGED = 'IS_LOGGED'
export const RESET_LOGGED = 'RESET_LOGGED'

export function isLogged (logged) {
    return {
      type: IS_LOGGED,
      logged
    }
  }

  export function restLogged (logged) {
    return {
      type: RESET_LOGGED,
      logged
    }
  }
  