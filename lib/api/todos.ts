import axios from "axios";

const TodoApi = {
  findAll: async (cookie: string) => {
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/todo/findall`,
        headers: {
          Authorization:`Bearer ${cookie}`
        },
      });
      return response.data?.r;
    } catch (error) {
      return error;
    }
  },
  findAllT: async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/todo/findall`,
        withCredentials: true,
      });
      return response.data?.r;
    } catch (error) {
      return error;
    }
  },
  createTodo: async (newTodo: Todo, cookie:string) => {
    try {
      const { id, text, ddl, complete, priority } = newTodo;
      const response = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/todo/create`,
        headers: {
          Authorization:`Bearer ${cookie}`
        },
        data: {
          id,
          text,
          ddl,
          complete,
          priority,
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  finishTodo: async (todoId: string, cookie:string) => {
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/todo/finish`,
        headers: {
          Authorization:`Bearer ${cookie}`
        },
        data: {
          id: todoId,
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  deleteTodo: async (todoId: string, cookie:string) => {
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/todo/delete`,
        headers: {
          Authorization:`Bearer ${cookie}`
        },
        data: {
          id: todoId,
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  editTodo: async (
    id: string,
    text: string,
    newDdl: Date,
    newPriority: number,
    cookie:string
  ) => {
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/todo/update`,
        headers: {
          Authorization:`Bearer ${cookie}`
        },
        data: {
          id: id,
          text: text,
          ddl: newDdl,
          priority: newPriority,
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default TodoApi;
