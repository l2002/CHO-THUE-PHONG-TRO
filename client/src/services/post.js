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

export const apiGetPostsLimit = (query) =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/v1/post/limit`,
        params: query,
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetNewPost = () =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/v1/post/new-post`,
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });
