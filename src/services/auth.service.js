import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL;
class AuthService {
   register = (username, password) => {
    return axios.post(API_URL + "auth/signup", {
      username,
      password,
    });
  };

   login = (username, password) => {
    return axios
      .post(API_URL + "auth/signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data))
        }

        return response.data
      })
  }

   logout = () => {
    localStorage.removeItem("user")
  }
}
export default new AuthService()
