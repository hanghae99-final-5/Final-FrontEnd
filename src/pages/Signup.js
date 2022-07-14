import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  FirstPageWrapper,
  LOGO,
  FirstButtonWrap,
  SignupButtonWrap,
} from "../components/FirstPageCSS";
import { useNavigate } from "react-router-dom";
import { registerAccount } from "../redux/modules/user";

import main_logo from "../assets/images/logos/logo.png";

const Signup = () => {
  const emailInputRef = useRef();
  const nicknameInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordCheckInputRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickSignUp = (e) => {
    e.preventDefault();
    dispatch(
      registerAccount(
        {
          email: emailInputRef.current.value,
          nickname: nicknameInputRef.current.value,
          password: passwordInputRef.current.value,
        },
        () => navigate("/login")
      )
    );
  };

  return (
    <FirstPageWrapper>
      <LOGO top="106px">
        <img src={main_logo} />
      </LOGO>
      <SignupButtonWrap top="246px" gap="8px">
        <input type="text" placeholder="이메일" ref={emailInputRef}></input>
        <input type="text" placeholder="닉네임" ref={nicknameInputRef}></input>
        <input
          type="text"
          placeholder="비밀번호"
          ref={passwordInputRef}
        ></input>
        <input
          type="text"
          placeholder="비밀번호 확인"
          ref={passwordCheckInputRef}
        ></input>
      </SignupButtonWrap>
      <FirstButtonWrap top="440px" gap="10px">
        <button onClick={onClickSignUp}>
          <span>회원가입</span>
        </button>
      </FirstButtonWrap>
    </FirstPageWrapper>
  );
};

export default Signup;
