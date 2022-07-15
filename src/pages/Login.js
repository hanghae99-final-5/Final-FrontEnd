import React, { useState } from "react";

import {
  FirstPageWrapper,
  LOGO,
  FirstButtonWrap,
  SignupButtonWrap,
} from "../components/FirstPageCSS";
import { useDispatch } from "react-redux";
import { LoginAccount } from "../redux/modules/user";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import main_logo from "../assets/images/logos/logo.png";
import google_logo from "../assets/images/icons/google_login.png";
import CommonModal from "../element/CommonModal";

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
        () => navigate("/"),
        () => openErrorModal()
      )
    );
  };

  const openErrorModal = () => {
    setModal(true);
  };

  const onConfirm = () => {
    setModal(false);
  };

  const onClickGoogleLogin = (e) => {
    const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URI;
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile email&response_type=code&redirect_uri=${redirectUri}&client_id=${clientId}.apps.googleusercontent.com`;
  };

  const [modal, setModal] = useState(false);

  return (
    <FirstPageWrapper>
      <CommonModal
        title={"notice"}
        visible={modal}
        modalText={"아이디와 비밀번호를 확인해주세요"}
        isSingleBtn={true}
        onConfirm={onConfirm}
        confirmText={"확인"}
      />
      <LOGO top="106px" onClick={() => navigate("/firstPage")}>
        <img src={main_logo} />
      </LOGO>
      <SignupButtonWrap top="246px" gap="8px">
        <input type="text" placeholder="아이디" ref={idInputRef}></input>
        <input
          type="password"
          placeholder="비밀번호"
          ref={passwordInputRef}
        ></input>
      </SignupButtonWrap>
      <FirstButtonWrap top="344px" gap="10px">
        <button onClick={onClickLogin}>
          <span>로그인</span>
        </button>
        <button
          onClick={onClickGoogleLogin}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={google_logo} style={{ verticalAlign: "bottom" }} />
          <span>Google 계정으로 로그인</span>
          <span></span>
        </button>
      </FirstButtonWrap>
    </FirstPageWrapper>
  );
};

export default Login;
