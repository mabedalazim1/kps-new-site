import axios from 'axios'
let option = {}
export const formsubmit = (modle = "", e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const add = Object.fromEntries(data.entries())
    const user = JSON.parse(localStorage.getItem('user'));
    option = {
        headers: {
            'x-access-token': user.accessToken,
        }
    }
    const API_URL = process.env.REACT_APP_SERVER_URL
    axios.post(API_URL + modle, add, option)
}

export const   formChange = (setValues, values, e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
}