import axios from 'axios'
const user = JSON.parse(localStorage.getItem("user"));
let accessToken = ''

if (!user) {
    accessToken = null
} else {
    accessToken = user.accessToken
}
export default axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        "Content-type": "application/json",
        'x-access-token':  accessToken  
    }
})