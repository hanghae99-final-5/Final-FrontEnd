import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backArrow from "../../assets/images/icons/back_arrow_24.png";
import deleteIcon from "../../assets/images/icons/delete_24.png"


const NotificationHeader = () => {
    const navigate = useNavigate();
    return(
        <HeaderWrap>
            <Wrapper>
                <BackDiv onClick={()=>navigate("/")}>
                    <img src={backArrow}/>
                </BackDiv>
                <NicknameDiv>Activity</NicknameDiv>
            </Wrapper>
                <NavDiv>
                    <div>
                    <img src={deleteIcon} />
                    </div>
                </NavDiv>
        </HeaderWrap>
    )
}

export default NotificationHeader;

const HeaderWrap = styled.nav`
  max-width: 360px;
  width: 100%;
  height: 54px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const BackDiv = styled.div`
    font-weight: 500;
    font-size: 20px;
    width: 24px;
    height: 24px;
    margin:0 0 0 12px;
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