import React, { useEffect, useState } from 'react';
import styled, {keyframes,css} from 'styled-components';
import { useDispatch, useSelector, } from 'react-redux';
import { actionCreators as todoAction } from '../redux/modules/todo';


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
        todoId
    }) {
        const dispatch = useDispatch();
        const [img,setImg] = useState(null);
        const [imgSrc,setImgSrc] = useState(null);
        const uploadImage = (e) => {
            console.log(e.target.files[0]);
            setImg(e.target?.files[0]);
            encodeFileToBase64(e.target.files[0]);
        }

        const encodeFileToBase64 = (fileBlob) => {
            const reader = new FileReader();
            reader.readAsDataURL(fileBlob);
            return new Promise((resolve) => {
              reader.onload = () => {
                setImgSrc(reader.result);
                resolve();
              };
            });
          };

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
                <label htmlFor="contained-button-file">
                    <input accept="image/*" 
                    id="contained-button-file" 
                    multiple type="file"
                    onChange={uploadImage}
                    />
                    <ImgDiv>
                    {imgSrc && 
                        <img src={imgSrc} alt="preview-img" />
                    }
                    </ImgDiv>
                </label>
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
                <div onClick={()=>{
                    dispatch(todoAction.ProofImgUploadDB(img,todoId))
                }}>
                    <Icon onClick={onProof}></Icon>
                    {proofText}
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