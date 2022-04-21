import axios from "axios";

const PhotoApi = {
    findAll: async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/photo/findall`,
          withCredentials: true,
        });
        return response.data?.r;
      } catch (error) {
        return error;
      }
    },
    like: async (data) => {
        try {
          const response = await axios({
            method: "post",
            url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/photo/like`,
            withCredentials: true,
            data
          });
          return response.data
        } catch (error) {
          return error;
        }
      },
}

export default PhotoApi