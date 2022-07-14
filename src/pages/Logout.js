import React from "react";
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { logoutAccount } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/images/icons/back_arrow_24.png"
import logo from "../assets/images/logos/logo.png"
import creater from "../assets/images/logos/logout.png"
import Button from "../element/Button";


const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container>
      <HeaderWrap>
          <Wrapper>
              <BackDiv onClick={()=>navigate(-1)}>
                  <img src={backArrow}/>
              </BackDiv>
          </Wrapper>
      </HeaderWrap>
      <LogoContainer>
        <img src={logo}/>
      </LogoContainer>
      <CreaterContainer>
        <img src={creater}/>
      </CreaterContainer>
      <Button
      size="XXlarge"
      color="sub02"
      onClick={() => {
        dispatch(
          logoutAccount(() => {
            navigate("/login");
          })
        );
      }}>
          로그아웃
    </Button> 
    </Container>
 
  );
};

export default Logout;
const Container = styled.div`
    min-width: 360px;
    height: 640px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const HeaderWrap = styled.nav`
    width: 100%;
    height: 54px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E4E4E4;
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
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30%;
`;
const CreaterContainer = styled.div`
  padding-bottom: 76px;
  
`;

