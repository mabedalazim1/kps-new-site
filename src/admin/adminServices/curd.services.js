import http from './axios/http.common'

const getAll = (modle="imgdata") => {
    return http.get(modle)
}

const get = (modle = "imgdata", id) => {
    return http.get(`${modle}/${id}`)
}

const create = (modle = "imgdata",data) => {
    return http.post(modle, data)
}

const update = (modle = "imgdata", id, data) => {
    return http.put(`${modle}/${id}`, data)
  };
  
  const remove = (modle = "imgdata",id) => {
    return http.delete(`${modle}${id}`)
  };
  
  const removeAll = (modle = "imgdata") => {
    return http.delete(modle);
  };
  
  const findByTitle = (modle = "imgdata",title) => {
    return http.get(`${modle}?title=${title}`);
};
  
  const CurdService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
  };
  
  export default CurdService;