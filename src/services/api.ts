import axios from "axios";

import { AppError } from "@utils/AppError";

const vehicleDataApi = axios.create({
  baseURL: "https://api-baccan.pesquisaplacas.com.br",
  headers: {
    "Content-type": "application/json",
    chave: "adc0bd293ce27d575d038c6ae6a53f15",
  },
});

vehicleDataApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(error);
    }
  }
);

const databaseApi = axios.create({
  baseURL: "https://api.center.joinads.me/api",
});

databaseApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(error);
    }
  }
);

export { vehicleDataApi, databaseApi };
