import http from './axios/http.common'

class ImgService  {

    addImg = (file) => {
        return http.post("images", {
            file
        })
    }

    deleteImg = (imgUrl) => {
        return http.delete(`images/${imgUrl}`)
    }
}
export default new ImgService() 