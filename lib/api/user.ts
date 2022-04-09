import axios from "axios";
import { SERVER_BASE_URL } from "../utils/constant";

const UserApi = {
  login: async (data) => {
    try {
      const { email, password } = data;
      const response = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/auth/login`,
        withCredentials: true,
        data: {
          username: email,
          password,
        },
      });
      return response.data;
    } catch (error) {
      return "";
    }

    // const { email, password } = data;
    // const response = await axios({
    //   method: "post",
    //   url: `${SERVER_BASE_URL}/auth/login`,
    //   withCredentials: true,
    //   data: {
    //     username: email,
    //     password,
    //   },
    // }).then(function (response) {
    //   console.log(response.data)
    //   return response.data
    // })
    // .catch(function (error) {
    //     console.log(error.response.status) // 401
    //     console.log(error.response.data.error) //Please Authenticate or whatever returned from server
    //   if(error.response.status==401){
    //     return {error: "The username and/or password you specified are not correct."}
    //   }
    // })
  },
  signup: async (data) => {
    try {
      const { email, password } = data;
      const response = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/auth/signup`,
        data: {
          email,
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
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/auth/me`,
        headers: {
          cookie: cookie,
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {}
  },
};
export default UserApi;
