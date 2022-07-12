import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../assets/config";
import {
  FirstWrap,
  LOGO,
  FirstButtonWrap,
  SignupButtonWrap,
} from "../components/FirstPageCSS";
import { useDispatch } from "react-redux";
import { LoginAccount, LoginGoogleAccount } from "../redux/modules/user";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import main_logo from "../assets/images/icons/main_logo.png";

const Login = () => {
  const idInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogin = (e) => {
    e.preventDefault();
    dispatch(
      LoginAccount(
        {
          email: idInputRef.current.value,
          password: passwordInputRef.current.value,
        },
        () => navigate("/")
      )
    );
  };

  const onClickGoogleLogin = (e) => {
    // e.preventDefault();
    console.log("env :", process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID);
    const ClientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;
    console.log("Cli::", ClientId);
    const redirectUri = "http://localhost:3000/login-process";
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile email&response_type=code&redirect_uri=${redirectUri}&client_id=${ClientId}.apps.googleusercontent.com`;
  };

  return (
    <FirstWrap>       
      <LOGO top="106px">
        <img src={main_logo} />
      </LOGO>
      <SignupButtonWrap top="246px" gap="8px">
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          ref={idInputRef}
        ></input>
        <input
          type="text"
          placeholder="비밀번호를 입력하세요"
          ref={passwordInputRef}
        ></input>
      </SignupButtonWrap>
      <FirstButtonWrap top="344px" gap="10px">
        <button onClick={onClickLogin}>
          <span>로그인</span>
        </button>
        <button onClick={onClickGoogleLogin}>
          <span>Google 계정으로 로그인</span>
        </button>
      </FirstButtonWrap>
    </FirstWrap>
  );
};

export default Login;
