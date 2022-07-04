import React from "react";
import styled from "styled-components";
import {
  FirstWrap,
  LOGO,
  FirstButtonWrap,
  SignupButtonWrap,
} from "../components/FirstPageCSS";
import { useDispatch } from "react-redux";
import { setLoginDB } from "../redux/modules/user";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const idInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogin = (e) => {
    e.preventDefault();
    dispatch(
      setLoginDB(
        {
          email: idInputRef.current.value,
          password: passwordInputRef.current.value,
        },
        () => navigate("/")
      )
    );
  };
  return (
    <FirstWrap>
      <LOGO top="70px">LOGO</LOGO>
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
        <button>
          <span>Google 계정으로 로그인</span>
        </button>
      </FirstButtonWrap>
    </FirstWrap>
  );
};

export default Login;
