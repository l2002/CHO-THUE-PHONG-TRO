import axiosConfig from "../axiosConfig";

export const apiGetPosts = (payload) =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/v1/post/all",
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPostsLimit = (page) =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/v1/post/limit?page=${page}`,
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });
