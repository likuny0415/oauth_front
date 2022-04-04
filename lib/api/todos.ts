import axios from "axios";

import { SERVER_BASE_URL } from "../utils/constant";

const TodoApi = {
   
    

    findAll: async () => {
        try {
          const response = await axios({
            method: "post",
            url: `${SERVER_BASE_URL}/todo/findall`,
          });
          return response.data;
        } catch (error) {
          return error
        }
      },
};



export default TodoApi;
