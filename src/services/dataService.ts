import { IOrder } from "../interfaces/ICart";
import config from "./config.json";
import axios from "axios";

export const getDatas = (endpoint: string) => {
  return axios.get(`${config.apiUrl}/${endpoint}`);
};

export const getData = (endpoint: string, id: string) => {
  return axios.get(`${config.apiUrl}/${endpoint}/${id}`);
};

// export const saveData = (endpoint: string, id: string | null, data: any) => {
//   if (id) return axios.put(`${config.apiUrl}/${endpoint}/${id}`, data);
//   return axios.post(`${config.apiUrl}/${endpoint}`, data);
// };

export const saveData = (endpoint: string, data: IOrder) => {
  return axios.post(`${config.apiUrl}/${endpoint}`, data);
};

export const deleteData = (endpoint: string, id: string) => {
  return axios.delete(`${config.apiUrl}/${endpoint}/${id}`);
};
