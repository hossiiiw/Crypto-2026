import axios from "axios";

const api = axios.create({
  baseURL: "https://api.binance.com",
  timeout: 10000,
});

export default api;
