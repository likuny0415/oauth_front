import axios from "axios";

const TodoApi = {
  findAll: async (cookie: string) => {
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/todo/findall`,
        
        headers: {
          cookie: cookie,
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
  createTodo: async (newTodo: Todo, cookie) => {
    try {
      const { id, text, ddl, complete, priority } = newTodo;
      const response = await axios({
        method: "post",
  withCredentials: true,
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/todo/create`,
        headers: {
          cookie: cookie,
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
  finishTodo: async (todoId: string, cookie) => {
    try {
      const response = await axios({
        method: "post",
        withCredentials: true,
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/todo/finish`,
        headers: {
          cookie: cookie,
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
  deleteTodo: async (todoId: string, cookie) => {
    try {
      const response = await axios({
        method: "post",
        withCredentials: true,
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/todo/delete`,
        headers: {
          cookie: cookie,
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
    cookie
  ) => {
    try {
      const response = await axios({
        method: "post",
        withCredentials: true,
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/todo/update`,
        headers: {
          cookie: cookie,
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
