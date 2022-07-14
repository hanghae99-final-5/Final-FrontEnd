import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as todoActions } from "../../redux/modules/todo"
import { useNavigate,useParams } from "react-router-dom";

import styled from "styled-components";
import backArrow from "../../assets/images/icons/back_arrow_24.png"
import Button from "../../element/Button";

const WriteHeader = ({todoObj,openErrModal,onConfirm}) => {
    const todoId = useParams().id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const createBtn = () => {
        dispatch(todoActions.addTodolistDB(todoObj,(modalText)=>openErrModal(modalText),()=>navigate("/")));
    } 
    const editBtn = () => {
        dispatch(todoActions.editTodolistDB(todoObj,todoId,(modalText)=>openErrModal(modalText),()=>navigate("/")))
    }

    return (
        <MainHeaderWrap>
            <Wrapper>
                <BackDiv onClick={()=>navigate(-1)}>
                    <img src={backArrow}/>
                </BackDiv>
                {todoId? 
                <NicknameDiv>Edit To Do</NicknameDiv>
                :
                <NicknameDiv>Create To Do</NicknameDiv>
                }
            </Wrapper>
            <NavDiv>
                <div>
                    {todoId?
                    <Button 
                    color="EXPColor"
                    size="small"
                    onClick={editBtn}
                    >
                        <p>Edit</p>
                    </Button>
                    :
                    <Button 
                    color="EXPColor"
                    size="small"
                    onClick={createBtn}
                    >
                        <p>Create</p>
                    </Button>
                    }
                </div>
            </NavDiv>
        </MainHeaderWrap>
    )

}
export default WriteHeader;

const MainHeaderWrap = styled.nav`
    max-width: 360px;
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
const NicknameDiv = styled.div`
    width: 186px;
    height: auto;
    padding: 0 0 0 12px;
    font-size: 20px;
    font-weight: 500;
`;
const NavDiv = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0 15px 0 0;
    
`;



