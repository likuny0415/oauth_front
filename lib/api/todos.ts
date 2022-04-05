import axios from "axios";

import { SERVER_BASE_URL } from "../utils/constant";

const TodoApi = {
   
    

    findAll: async () => {
        try {
          const response = await axios({
            method: "get",
            url: `${SERVER_BASE_URL}/todo/findall`,
            withCredentials: true
          });
          return response.data?.r;
        } catch (error) {
          return error
        }
      },

    createTodo: async (newTodo: Todo) => {
        try {
            const { id, text, ddl, complete, priority } = newTodo
            const response = await axios({
                method: "post",
                withCredentials: true,
                url: `${SERVER_BASE_URL}/todo/create`,
                data: {
                    id,
                    text,
                    ddl,
                    complete,
                    priority
                },
            })
            return response.data
        } catch(error) {
            return error
        }
    },
};



export default TodoApi;
