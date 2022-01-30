import TokenService from "./token.service";
import api from "./api";

class AuthService {
   register = (username, password) => {
    return api.post("auth/signup", {
      username,
      password,
    });
  };

   login = (username, password) => {
     return api
       .post("auth/signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data
      })
  }

   logout = () => {
    TokenService.removeUser();
  }
   getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
}
export default new AuthService()
