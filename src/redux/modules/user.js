import axios from "axios";
import { apis } from "../../shared/api";
import { BASE_URL } from "../../assets/config";

import jwt_decode from "jwt-decode";

const initialState = {
  is_login: false,
  username: null,
  nickname: null,
  password: null,
};

// 미들웨어 Actions
const LOAD = "user/LOAD";
const LOGOUT = "user/LOGOUT";

// Action Creators
export function setUser(userInfo) {
  return { type: LOAD, userInfo };
}
export function deleteUser(userInfo) {
  return { type: LOGOUT, userInfo };
}

export const checkUser = () => {
  return async function (dispatch, getState) {
    dispatch(setUser());
  };
};

export const logoutAccount = () => {
  return async function (dispatch) {
    dispatch(deleteUser());
    window.location.href = "/login";
  };
};

export const logoutAccountByError = (err) => {
  return async function (dispatch) {
    if (err.response.status === 403) {
      return dispatch(logoutAccount());
    } else {
      return;
    }
  };
};

export const registerAccount = (user, callback) => {
  return async function (dispatch, getState) {
    await apis
      .signUp(user.email, user.nickname, user.password)
      .then((res) => {
        alert("회원가입 성공");
        callback();
      })
      .catch((err) => {
        window.alert(err);
      });
  };
};

export const LoginAccount = (user, callback) => {
  return async function (dispatch, getState) {
    await apis
      .signIn(user.email, user.password)
      .then((res) => {
        const token = res.headers.authorization;
        localStorage.setItem("jwtToken", token);
        dispatch(setUser());
        callback();
      })
      .catch((err) => {
        console.log("===setLoginDB err === ", err);
        window.alert("아이디와 비밀번호를 다시확인해주세요");
      });
  };
};

export const getJwtByGoogleOauth = (code, callback) => {
  return async function (dispatch, getState) {
    await axios({
      method: "get",
      url: `${BASE_URL}/api/login/oauth2/code/google/callback/?code=${code}`,
    })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.authorization);

        callback();
      })
      .catch((err) => {
        console.log("google err", err);
      });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "user/LOAD": {
      const decoded = jwt_decode(localStorage.getItem("jwtToken"));
      return {
        nickname: decoded.nickname,
        is_login: true,
      };
    }
    case "user/LOGOUT": {
      if (localStorage.getItem("jwtToken")) localStorage.removeItem("jwtToken");
      if (localStorage.getItem("accessToken"))
        localStorage.removeItem("accessToken");
      if (localStorage.getItem("KakaoToken"))
        localStorage.removeItem("KakaoToken");

      const newUser = {
        is_login: false,
        username: null,
        nickname: null,
      };
      return newUser;
    }
    default:
      return state;
  }
}
