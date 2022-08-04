import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import backArrow from "../assets/images/icons/back_arrow_24.png"
import deleteIcon from "../assets/images/icons/delete_24.png"
import appGuide from "../assets/images/logos/app_guide.jpg"


const Guide = () => {
    const navigate = useNavigate();

    return(
        <>
            <HeaderWrap>
                <Wrapper>
                    <BackDiv onClick={()=>navigate(-1)}>
                        <img src={backArrow}/>
                    </BackDiv>
                    <NicknameDiv>Guide</NicknameDiv>
                </Wrapper>
            </HeaderWrap>
            <Container>
                <img src={appGuide}/>
            </Container>
        </>
    )
}
export default Guide;

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
const Container = styled.div`
    overflow: auto;
    max-width: 360px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: 54px;
    bottom: 0;
    ::-webkit-scrollbar {
    display: none;
    }
`;