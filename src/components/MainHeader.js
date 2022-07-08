import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import heart from "../assets/images/icons/heart.png";
import search from "../assets/images/icons/search.png";
import logout from "../assets/images/icons/인증하기_24.png";

const MainHeader = ({ headerName, headerImg }) => {
  const navigate = useNavigate();
  return (
    <MainHeaderWrap>
      {headerName ? (
        <NicknameDiv>{headerName}</NicknameDiv>
      ) : (
        <HeaderIconDiv>
          <HeaderIconImg src={headerImg} />
        </HeaderIconDiv>
      )}

      <NavDiv>
        <div>
          <img src={heart} onClick={() => navigate("/notification")}/>
        </div>
        <div onClick={() => navigate("/matching")}>
          <img src={search} />
        </div>
        <div onClick={() => navigate("/logout")}>
          <img src={logout} />
        </div>
      </NavDiv>
    </MainHeaderWrap>
  );
};
export default MainHeader;

const MainHeaderWrap = styled.nav`
  max-width: 360px;
  width: 100%;
  height: 54px;
  position: fixed;
  top: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`;
const HeaderIconDiv = styled.div`
  width: 186px;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0 0 0 12px;
`;

const HeaderIconImg = styled.img`
  width: 47px;
`;
const NicknameDiv = styled.div`
  width: 186px;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0 0 0 12px;
  font-size: 20px;
  font-weight: 500;
`;
const NavDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 15px 0 0;
  div {
    width: 24px;
    height: 24px;
  }
`;
