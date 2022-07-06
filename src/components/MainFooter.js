import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainFooter = () => {
  const navigate = useNavigate();
  return (
    <MainFooterWrap>
      <ButtonGroup onClick={() => navigate("/")}>
        <Button></Button>
        <Text>My page</Text>
      </ButtonGroup>
      <ButtonGroup>
        <Button></Button>
        <Text>Friend</Text>
      </ButtonGroup>
      <ButtonGroup>
        <WriteButton>
          <button></button>
        </WriteButton>
      </ButtonGroup>
      <ButtonGroup onClick={() => navigate("/shop")}>
        <Button></Button>
        <Text>Shop</Text>
      </ButtonGroup>
      <ButtonGroup>
        <Button></Button>
        <Text>Inventory</Text>
      </ButtonGroup>
    </MainFooterWrap>
  );
};
export default MainFooter;

const MainFooterWrap = styled.nav`
  max-width: 360px;
  width: 100%;
  height: 56px;
  position: fixed;
  top: 576px;
  background-color: orange;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  padding: 7px 12px;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-left: 1rem;
  }
`;
const WriteButton = styled.div`
  display: flex;
  position: fixed;
  top: 543px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: pink;
  justify-content: center;
  align-items: center;
  & > button {
    position: fixed;
    top: 559px;
    width: 24px;
    height: 24px;
    background: white;
  }
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  background: yellow;
  border: transparent;
  position: fixed;
  top: 583px;
`;

const Text = styled.span`
  position: fixed;
  top: 607px;
  font-size: 12px;
  height: 18px;
  display: flex;
  align-items: center;
`;
