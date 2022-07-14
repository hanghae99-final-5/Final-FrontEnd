import React from "react";
import {
  FirstPageWrapper,
  LOGO,
  FirstButtonWrap,
} from "../components/FirstPageCSS";
import { useNavigate } from "react-router-dom";

import main_logo from "../assets/images/icons/main_logo.png";

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <FirstPageWrapper>
      <LOGO top="106px">
        <img src={main_logo} />
      </LOGO>
      <FirstButtonWrap top="450px" gap="14px">
        <button onClick={() => navigate("/login")}>
          <span>로그인</span>
        </button>
        <button onClick={() => navigate("/signup")}>
          <span>회원가입</span>
        </button>
      </FirstButtonWrap>
    </FirstPageWrapper>
  );
};

export default FirstPage;
