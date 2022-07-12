import axios from "axios";

const api = axios.create({
  baseURL: "http://3.35.218.23",
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
    console.log(accessToken);
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
};
