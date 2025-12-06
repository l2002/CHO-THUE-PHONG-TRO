import axiosConfig from "../axiosConfig";

export const apiGetPrices = (payload) =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/v1/price/all",
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetAreas = (payload) =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/v1/area/all",
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });
