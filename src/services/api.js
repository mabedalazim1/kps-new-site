import axios from "axios"

const API_URL = process.env.REACT_APP_SERVER_URL;
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export default instance