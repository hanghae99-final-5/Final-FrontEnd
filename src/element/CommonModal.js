import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "./Button";

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.15); */
  z-index: 100;
`;

const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  & > div:nth-child(1) {
    width: 24px;
    height: 24px;
  }
  & > p:nth-child(2) {
    line-height: 21px;
    font-size: 14px;
  }
`;
const ModalCancel = styled.div`
  width: 24px;
  height: 24px;
  background: #c2c2c2;
  font-size: 12px;
`;

const ModalBox = styled.div`
  transform: translate(-50%, -50%);
  position: fixed;
  left: 50%;
  top: 40%;
  min-width: 280px;
  min-height: 134px;
  background: #efefef;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${ModalTitle} ${ModalCancel};
`;
const ChildrenText = styled.div`
  font-size: 14px;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  padding: 5% 0;
  justify-content: space-evenly;
  font-size: 12px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  height: 250px;
  border: 1px solid;

  & > img {
    max-width: 250px;
    height: 250px;
    object-fit: contain;
  }
`;

function CommonModal({
  title,
  modalText,
  confirmText,
  isSingleBtn,
  visible,
  cancelText,
  onCancel,
  onConfirm,
  proofImg,
  isConfirmProofImg,
}) {
  if (!visible) return null;
  return (
    <DarkBackground>
      <ModalBox>
        <ModalTitle>
          <p>{title}</p>
        </ModalTitle>
        <ChildrenText>{modalText}</ChildrenText>
        {isConfirmProofImg && (
          <ImgDiv>
            <img src={proofImg} />
          </ImgDiv>
        )}
        {isSingleBtn ? (
          <ButtonGroup>
            <Button color="main01" onClick={onConfirm}>
              {confirmText}
            </Button>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <Button color="main01" onClick={onConfirm}>
              {confirmText}
            </Button>
            <Button color="main01" onClick={onCancel}>
              {cancelText}
            </Button>
          </ButtonGroup>
        )}
      </ModalBox>
    </DarkBackground>
  );
}

CommonModal.defaultProps = {
  confirmText: "확인",
  cancelText: "취소",
};

export default CommonModal;
