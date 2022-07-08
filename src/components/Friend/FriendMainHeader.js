import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import heart from "../../assets/images/icons/heart.png"
import search from "../../assets/images/icons/search.png"
import cancelMatching from "../../assets/images/icons/link_off_24.png"
import styled from "styled-components";

const FriendMainHeader = ({openModal}) => {
    const navigate = useNavigate();
    
    return (
      <MainHeaderWrap>
        <NicknameDiv>로고</NicknameDiv>
        <NavDiv>
          <div onClick={openModal}>
            <img src={cancelMatching} />
          </div>
          <div>
            <img src={heart} onClick={() => navigate("/notification")}/>
          </div>
          <div onClick={() => navigate("/matching")}>
            <img src={search} />
          </div>
        </NavDiv>
        
      </MainHeaderWrap>
    );

}
export default FriendMainHeader;

const MainHeaderWrap = styled.nav`
  max-width: 360px;
  width: 100%;
  height: 54px;
  position: fixed;
  top: 0;
  background-color: #c2c2c2;
  display: flex;
  justify-content: space-between;
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




