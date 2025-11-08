import axiosConfig from "../axiosConfig";

export const apiRegister = (payload) =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "/api/v1/auth/register",
        data: payload,
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiLogin = (payload) =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "/api/v1/auth/login",
        data: payload,
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });
