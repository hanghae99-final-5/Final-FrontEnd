import React ,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as todoActions } from "../redux/modules/todo";
import { useNavigate } from "react-router-dom";
import diffCount from "../element/diffCount";

import styled, { css } from 'styled-components';
import Modal from "../element/Modal";

//icons
import add from "../assets/images/icons/add.png"
import add_image from "../assets/images/icons/add_image.png"
import more_horiz from "../assets/images/icons/more_horiz.png"
import Button from "../element/Button";



const TodoList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //store에서 todo load data 가져오기
    const todoObj = useSelector((state)=>state.todo);
    const todosList = useSelector(state=>state.todo.todo.todos)
    //modal 상태관리
        //사진인증
    const [proofModal,setProofModal] = useState(false);
    const [selectedTodoId,setSelectedTodoId] = useState(null);
    const [proofImg,setproofImg] = useState(null);
    const clickedproofBtn = (e) => {
        setProofModal(true);
        setSelectedTodoId(e.target.getAttribute("value"));
        setproofImg(e.target.getAttribute("value2"));
    }
          //상세보기
    const [detailModal,setDetailModal] = useState(false);
    const [clickedTodoId,setClickedTodoId] = useState(null);

    const clickedDetailBtn = (e) => {
        setDetailModal(true);
        setClickedTodoId(e.target.getAttribute("value"));
       };
    const onCancel = () => {
        setDetailModal(false);
        setProofModal(false);
    }
    const onUpdate = () => {
        navigate("/edit/"+clickedTodoId)
        setDetailModal(false);
        setProofModal(false);
    }
    const onProof = () => {
        setDetailModal(false);
        setProofModal(false);

    }
    const ondelete = (e) => {
        dispatch(todoActions.deleteTodolistDB(clickedTodoId));
        setDetailModal(false);
        setProofModal(false);
    }

    useEffect(() => {
        dispatch(todoActions.getTodolistDB());
    },[])
    return (
        <TodoListContainer>
            <GuideBtn 
            color="main02"
            onClick={()=>navigate("/guide")}
            >App Guide</GuideBtn>
        {/* 개인투두  */}
        {todosList && todosList.map((todo,idx) => {
            return (
                <TodoListWrap key={idx}> 
                <div>{todo.createdAt}</div>
                <TodoListContext>
                    <PlusButtonWrap completionState={todo.completionState} todoType = {todo.todoType}>
                        {
                        todo.todoType === 2 && todo.confirmState && !todo.completionState?(
                        <div>
                            <img src={add} onClick={() => 
                                dispatch(todoActions.completeTodolistDB(todo.todoId))} />

                        </div>
                        ):null}
                        {todo.todoType === 1 && !todo.completionState? 
                        (<div>
                            <img src={add} onClick={() => 
                                dispatch(todoActions.completeTodolistDB(todo.todoId))} />

                        </div>)
                        :
                        null }
                    </PlusButtonWrap>
                    <TodoDetailBox completionState={todo.completionState} >
                        <DetailBoxDiv1>
                            <div>
                           {diffCount(todo.difficulty)}
                            </div>
                            <div>{todo.content}</div>
                            <div>{todo.startDate} - {todo.endDate}</div>
                        </DetailBoxDiv1>
                        <div>
                            {/* 개인투두는 사진인증 없음 */}
                            {todo.todoType === 1 ? null : (
                            <div>
                                <img onClick={clickedproofBtn} value={todo.todoId} value2={todo.proofImg} src={add_image}/>
                            </div>
                            )}
                            <div onClick={clickedDetailBtn}>
                                <img value={todo.todoId} src={more_horiz}/> 
                            </div>
                        </div>
                    </TodoDetailBox>
                </TodoListContext>

                {/* 상세보기 모달 */}
                <Modal
                title={"상세보기"}
                udtText={"수정"}
                deleteText={"삭제"}
                onUpdate={onUpdate}
                onProof={onProof}
                ondelete={ondelete}
                onCancel={onCancel}
                visible={detailModal}
                >
                </Modal>
                {/* 사진인증모달 */}
                <Modal
                isProof = {true}
                title={"사진인증"}
                proofText={"인증요청"}
                onUpdate={onUpdate}
                onProof={onProof}
                onCancel={onCancel}
                visible={proofModal}
                todoId={selectedTodoId}
                proofImg={proofImg}
                >
                </Modal>
            </TodoListWrap>
            )
        })}

        </TodoListContainer>
    )
}

export default TodoList;

const TodoListContainer = styled.div`
    overflow: auto;
    max-width: 360px;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: 174px;
    bottom: 70px;
    ::-webkit-scrollbar {
    display: none;
    }
`;
const GuideBtn = styled(Button)`
    width: 90%;
    height: 30px;
`;

const TodoListContext = styled.div`

`
const TodoListWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 14px;
    gap: 4px;

    & > div:nth-child(1) {
        font-size: 14px;
    }
    ${TodoListContext} {
        display: flex;
        width: 336px;
        min-height: 74px;
        border-radius: 10px;
        background: ${props=>props.theme.gray5};
    }
`;

const PlusButtonColorSt = css`
    ${props => 
    props.todoType === 2 && 
        css`
        background: ${props.theme.main02};
        `
    }
    ${props => 
    props.todoType === 1 && 
        css`
        background: ${props.theme.main01};
        `
    }
    ${props => 
    props.completionState  && 
        css`
        opacity: 0.4;
        `
    }  
`;
const PlusButtonWrap = styled.div`
    //plus버튼 색깔
    ${PlusButtonColorSt}

    width: 52px;
    min-height: 74px;
    border-radius: 10px 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 24px;
        height: 24px;
    
    }
`;
const DetailBoxDiv1 = styled.div`
    font-size: 12px;
    gap:5px;
    padding: 10px 0;
    
    & > div:nth-child(1) {
        gap: 2px;
        display: flex;

    }
    & > div:nth-child(3) {
        color: #6C6C6C;
        }

`;
const TodoDetailBoxSt =  css`
    ${props => 
    props.completionState === true  && 
        css`
        opacity: 0.4;
        `
    } 
`;
const TodoDetailBox = styled.div`
    //detailBox 색깔
    ${TodoDetailBoxSt}
    display: flex;
    width: 100%;
    justify-content: space-between;
    

    ${DetailBoxDiv1} {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-left: 14px;
    }
    & > div:nth-child(2) {
        display: flex;
        align-items: center;
        padding: 0 14px 0 20px;
        gap: 11px;

        div {
            width: 24px;
            height: 24px;
        }
    }
`;
