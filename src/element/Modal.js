import React, { useEffect, useState } from 'react';
import styled, {keyframes,css} from 'styled-components';


const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    background: rgba(0, 0, 0, 0.4);

`;

const ModalTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 15px 0 23px 0;
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
    background: #C2C2C2;
    font-size: 12px;
`;

const ModalBox = styled.div`
    transform: translate(-50%, -50%);
    position: fixed;
    left: 50%;
    top: 40%;
    min-width: 280px;
    min-height: 134px;
    background: #EFEFEF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${ModalTitle}

    ${ModalCancel}
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
const Icon = styled.div`
    width: 24px;
    height: 24px;
    background: #D9D9D9;
`;

//사진인증 이미지 박스
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
        object-fit:contain;
    }

    
`;


function Modal(
    {
        title,
        udtText,
        proofText,
        deleteText,
        onUpdate,
        onProof,
        ondelete,
        onCancel,
        visible,
        isProof,
    }) {

    if(!visible) return null;
    return (
    <DarkBackground >
        <ModalBox>
            <ModalTitle>
                <div></div>
                <p>{title}</p>
                <ModalCancel onClick={onCancel}>취소</ModalCancel>
            </ModalTitle>

            {isProof && 
                <ImgDiv>
                <img src = "https://firebasestorage.googleapis.com/v0/b/myweb-961b1.appspot.com/o/images%2Favatar.jpg?alt=media&token=9dbbf968-6917-4f67-a264-bfac9090a7b5"/>
                </ImgDiv>
            }

            {!isProof? (
            <ButtonGroup>
                <div>
                    <Icon onClick={onUpdate}></Icon>
                    {udtText}
                </div>
                
                <div>
                <Icon onClick={ondelete}></Icon>
                    {deleteText}
                </div>
            </ButtonGroup>
            ):(
            <ButtonGroup>
                <div>
                    <Icon onClick={onUpdate}></Icon>
                    {udtText}
                </div>
            </ButtonGroup>
            )}
        </ModalBox>
    </DarkBackground>

    );
}

Modal.defaultProps = {
  confirmText: '확인',
  cancelText: '취소'
};

export default Modal;