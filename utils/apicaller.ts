/* eslint-disable no-param-reassign */
// import Axios from "axios";
import axios from "axios";








const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
 
  (error: any) => {
    return Promise.reject(error);
  }
);
export default instance;
