import axios from "axios";
import { SERVER_BASE_URL } from "../utils/constant";

const UserApi = {
  
  login: async (data) => {
    try {
      const { email, password } = data;
      const response = await axios({
        method: "post",
        url: `${SERVER_BASE_URL}/auth/login`,
        withCredentials: true,
        data: {
          username: email,
          password,
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },

  isLoggedIn: async (cookie: string) => {
    try {
      const response = await axios({
        method: "get",
        url: `${SERVER_BASE_URL}/auth/me`,
        headers: {
          cookie: cookie
        },
        withCredentials: true,
      })
      return response.data
    } catch (error) {}
  },
};
export default UserApi;
