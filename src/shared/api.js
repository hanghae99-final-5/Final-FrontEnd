import axios from "axios";
import { BASE_URL } from "../assets/config";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("jwtToken");
  const googleToken = localStorage.getItem("googleToken");
  if (googleToken !== null) {
    config.headers.common["Authorization"] = `Bearer ${googleToken}`;
  }

  if (accessToken !== null) {
    config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export const apis = {
  signUp: (email, nickname, password) =>
    api.post("/api/users/signup", {
      username: email,
      nickname: nickname,
      password: password,
    }),
  signIn: (email, password) =>
    api.post(
      "/api/users/login",
      {
        username: email,
        password: password,
      }
      //   { withCredentials: true }
    ),
  GoogleLogin: (userInfo) => api.post("/api/users/login/google", userInfo),
  GetDailyStatistics: () => 
    api.get("/api/statistics/daily")
};
