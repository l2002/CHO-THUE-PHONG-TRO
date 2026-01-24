import axiosConfig from "../axiosConfig";
import axios from "axios";

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

export const apiGetProvinces = (payload) =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/v1/province/all",
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPublicProvinces = (payload) =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://provinces.open-api.vn/api/v1/p/",
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPublicDistrict = (provinId) =>
  new Promise(async (resole, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://provinces.open-api.vn/api/v1/p/${provinId}?depth=2`,
      });
      resole(response);
    } catch (error) {
      reject(error);
    }
  });
