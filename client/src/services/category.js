import axiosConfig from "../axiosConfig";

export const apiGetCategories = (payload) =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/v1/category/all",
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });
