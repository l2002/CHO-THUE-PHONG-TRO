import axios from "../axiosConfig";

export const apiGetCurrent = () =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: `/api/v1/user/get-current`,
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });
