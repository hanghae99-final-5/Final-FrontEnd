import axios from "axios";
import { apis } from "../../shared/api";
import { setCookie, deleteCookie } from "../../shared/cookie";

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
        let decoded = jwt_decode(token);
        dispatch(
          setUser({
            nickname: decoded.nickname,
          })
        );

        callback();
      })
      .catch((err) => {
        console.log("===setLoginDB err === ", err);
        window.alert("아이디와 비밀번호를 다시확인해주세요");
      });
  };
};

export const loginCheckDB = () => {
  return async function (dispatch, getState) {
    apis
      .loginCheck()
      .then((res) => {
        const userInfo = res.data.user;
        console.log(userInfo);
        dispatch(setUser(userInfo));
      })
      .catch((err) => {
        alert("유저 정보가 없네요" + err);
      });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "user/LOAD": {
      return {
        // email: action.email,
        nickname: action.userInfo.nickname,
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
