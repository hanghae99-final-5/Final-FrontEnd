import React, { useEffect, useState, useCallback, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as todoAction } from "../redux/modules/todo";
import editIcon from "../assets/images/icons/edit_24.png"
import deleteIcon from "../assets/images/icons/delete_24.png"
import closeIcon from "../assets/images/icons/close_24.png"
import proofIcon from "../assets/images/icons/proof_24.png"

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* display: flex;
    align-items: center;
    justify-content: center; */
  background: rgba(0, 0, 0, 0.1);
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
  background: #c2c2c2;
  font-size: 12px;
  cursor: pointer;
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
  cursor: pointer;
`;

//사진인증 이미지 박스
const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  height: 250px;
  border: 1px solid;
  cursor: pointer;

  & > img {
    max-width: 250px;
    height: 250px;
    object-fit: contain;
  }
`;
const ImgInput = styled.input`
  display: none;
`;

function Modal({
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
  todoId,
  proofImg,
}) {
  const dispatch = useDispatch();
  const [img, setImg] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const uploadImage = (e) => {
    setImg(e.target?.files[0]);
    encodeFileToBase64(e.target.files[0]);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    new Promise((resolve) => {
      reader.onload = () => {
        resolve();
        setImgSrc(reader.result);
      };
    }).then(console.log("promise resolve"));
  };

  const inputRef = useRef(null);
  const onUploadImageButtonClick = useCallback(() => {
    inputRef.current.click();
  }, []);

  if (!visible) return null;
  return (
    <DarkBackground>
      <ModalBox>
        <ModalTitle>
          <div></div>
          <p>{title}</p>
          <ModalCancel
            onClick={() => {
              onCancel();
              setImgSrc(null);
            }}
          >
            <img src={closeIcon}/>
          </ModalCancel>
        </ModalTitle>

        {isProof && (
          <>
            <label htmlFor="contained-button-file">
              <ImgInput
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={uploadImage}
                ref={inputRef}
              />
            </label>
            <ImgDiv onClick={onUploadImageButtonClick}>
              {imgSrc ? (
                <img src={imgSrc} alt="preview-img" />
              ) : proofImg ? (
                <img src={proofImg} />
              ) : (
                <img src="https://marchericche.com/ui/assets/admin/img/default.jpg" />
              )}
            </ImgDiv>
          </>
        )}
        {!isProof ? (
          <ButtonGroup>
            <div>
              <Icon onClick={onUpdate}>
                <img src={editIcon}/>
              </Icon>
              {udtText}
            </div>

            <div>
              <Icon onClick={ondelete}>
                <img src={deleteIcon}/>
              </Icon>
              {deleteText}
            </div>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <div
              onClick={() => {
                dispatch(todoAction.ProofImgUploadDB(img, todoId));
                setImgSrc(null);
              }}
            >
              <Icon
                onClick={() => {
                  onProof();
                  setImgSrc(null);
                }}
              >
                <img src={proofIcon}/>
              </Icon>
              {proofText}
            </div>
          </ButtonGroup>
        )}
      </ModalBox>
    </DarkBackground>
  );
}

Modal.defaultProps = {
  confirmText: "확인",
  cancelText: "취소",
};

export default Modal;
