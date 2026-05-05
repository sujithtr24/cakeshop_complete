import axios from "axios";

export const BASE_URL = "http://127.0.0.1:8000/";

export const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
);

// if token expired

API.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response && error.response.status === 401){
      console.log("Unauhorized - Token expired");

      localStorage.removeItem('token');

      window.location.href = '/login'
    }

    return Promise.reject(error)
  }
)