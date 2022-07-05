import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ShopContent = () => {
  const navigate = useNavigate();
  return (
    <ShopContentContainer>
      <div>모달을 넣을 예정</div>
      <button>모달 테스트용</button>
    </ShopContentContainer>
  );
};
export default ShopContent;

const ShopContentContainer = styled.div`
  overflow: auto;
  max-width: 360px;
  width: 100%;
  height: 402px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 174px;
`;
