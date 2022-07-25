import styled from "styled-components";
import mainImg from "../assets/images/icons/main_new.jpg";

export const FirstPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 360px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 auto;
  position: relative;
  background-image: url(${mainImg});
  background-repeat: no-repeat;
`;

export const FirstWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const LOGO = styled.div`
  width: 188px;
  height: 120px;
  display: flex;
  position: fixed;
  top: ${(props) => props.top};
  justify-content: center;
  align-items: center;
`;

export const FirstButtonWrap = styled.button`
  position: fixed;
  top: ${(props) => props.top};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  background: transparent;
  border: transparent;

  & > button {
    width: 280px;
    height: 40px;
    border: transparent;
    border-radius: 6px;
  }
  & > button > span {
    font-size: 14px;
    color: ${(props) => props.theme.gray1};
    font-family: "Noto Sans Korean 500";
  }
`;

export const SignupButtonWrap = styled.button`
  position: fixed;
  top: ${(props) => props.top};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  background: transparent;
  border: transparent;
  & > button {
    border: transparent;
    border-radius: 6px;
  }
  & > input {
    padding: 16px;
    width: 280px;
    height: 40px;
    border: transparent;
    border-radius: 6px;
    color: ${(props) => props.theme.gray1};
  }
  input::placeholder {
    color: ${(props) => props.theme.gray3};
  }
`;
