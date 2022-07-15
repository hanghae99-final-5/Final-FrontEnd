import { useRef, useState } from "react";
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
import CommonModal from "../element/CommonModal";

const Signup = () => {
  const emailInputRef = useRef();
  const nicknameInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordCheckInputRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState(null);

  const onConfirm = () => {
    setModal(false);
    setModalText(null);
    navigate("/login");
  };

  const onClickSignUp = (e) => {
    e.preventDefault();
    console.log("onclick!");
    if (
      !(
        emailInputRef.current.value &&
        nicknameInputRef.current.value &&
        passwordInputRef.current.value &&
        passwordCheckInputRef.current.value
      )
    ) {
      setModalText("빈 칸을 모두 입력해주세요");
      setModal(true);
    } else if (
      passwordInputRef.current.value !== passwordCheckInputRef.current.value
    ) {
      setModalText("비밀번호가 일치하지 않습니다");
      setModal(true);
    } else {
      dispatch(
        registerAccount(
          {
            email: emailInputRef.current.value,
            nickname: nicknameInputRef.current.value,
            password: passwordInputRef.current.value,
          },
          () => openSuccessModal()
        )
      );
    }
  };

  const openSuccessModal = () => {
    setModal(true);
    setModalText("회원가입에 성공했습니다");
  };

  return (
    <FirstPageWrapper>
      <CommonModal
        title={"notice"}
        visible={modal}
        modalText={modalText}
        isSingleBtn={true}
        onConfirm={onConfirm}
        confirmText={"확인"}
      />
      <LOGO top="106px" onClick={() => navigate("/firstPage")}>
        <img src={main_logo} />
      </LOGO>
      <SignupButtonWrap top="246px" gap="8px">
        <input type="text" placeholder="이메일" ref={emailInputRef}></input>
        <input type="text" placeholder="닉네임" ref={nicknameInputRef}></input>
        <input
          type="password"
          placeholder="비밀번호"
          ref={passwordInputRef}
        ></input>
        <input
          type="password"
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
