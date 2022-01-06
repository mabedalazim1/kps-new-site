export const GET_IMAGE = 'GET_IMAGE'

export function getImage (url) {
  return {
    type: GET_IMAGE,
    url,
  }
}