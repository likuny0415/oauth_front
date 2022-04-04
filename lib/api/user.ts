import axios from "axios";
import { SERVER_BASE_URL } from "../utils/constant";

const UserApi = {
  whoami: async () => {
    const { data } = await axios.get(`${SERVER_BASE_URL}/auth/me`, {
      headers: {
        "Content-Type": "application/json",
        // cookie: cookie,
      },
    });
    return { data };
  },
}
export default UserApi;
