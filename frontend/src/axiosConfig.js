import axios from "axios";

const api = axios.create({
  baseURL: "https://blog-2-p13k.onrender.com",
  withCredentials: true,
});

export default api;
