import axios from 'axios'

let addData ={}
let option = {}
const user = JSON.parse(localStorage.getItem('user'));
let  accessToken =""
if (user) {
    accessToken = user.accessToken
} else {
    accessToken=""
}

    option = {
        headers: {
          'x-access-token': accessToken,
        }
    }
const API_URL = process.env.REACT_APP_SERVER_URL
    
export const formsubmit = (modle = "", e) => {
    
    const data = new FormData(e.target)
    addData = Object.fromEntries(data.entries())
    
    axios.post(API_URL + modle, addData, option)   
}

export const   formChange = (setValues, values, e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
}

export const formImgDataSubmit = (modle = "imgdata", data) => {
    axios.post(API_URL + modle, data, option)   
}