import React from "react";
import styled from "styled-components";

const TodoList = () => {
    return (
        <TodoListContainer>
            <TodoListWrap>
                <div>작성일자</div>
                <TodoListContext>
                    <PlusButtonWrap>
                        <div></div>
                    </PlusButtonWrap>
                    <TodoDetailBox>
                        <DetailBoxDiv1>
                            <div>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                            </div>
                            <div>밥먹고 누워있기ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
                            <div>2022.06.25</div>
                        </DetailBoxDiv1>
                        <div>
                            <div>1</div>
                            <div>2</div>
                        </div>
                    </TodoDetailBox>
                </TodoListContext>
            </TodoListWrap>

            <TodoListWrap>
                <div>작성일자</div>
                <TodoListContext>
                    <PlusButtonWrap>
                        <div></div>
                    </PlusButtonWrap>
                    <TodoDetailBox>
                        <DetailBoxDiv1>
                            <div>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                            </div>
                            <div>밥먹고 누워있기ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
                            <div>2022.06.25</div>
                        </DetailBoxDiv1>
                        <div>
                            <div>1</div>
                            <div>2</div>
                        </div>
                    </TodoDetailBox>
                </TodoListContext>
            </TodoListWrap>


            <TodoListWrap>
                <div>작성일자</div>
                <TodoListContext>
                    <PlusButtonWrap>
                        <div></div>
                    </PlusButtonWrap>
                    <TodoDetailBox>
                        <DetailBoxDiv1>
                            <div>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                                <DifficultyIcon/>
                            </div>
                            <div>밥먹고 누워있기ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
                            <div>2022.06.25</div>
                        </DetailBoxDiv1>
                        <div>
                            <div>1</div>
                            <div>2</div>
                        </div>
                    </TodoDetailBox>
                </TodoListContext>
            </TodoListWrap>

        </TodoListContainer>
    )
}

export default TodoList;

const TodoListContainer = styled.div`
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
        background: #C2C2C2;
    }
`;
const PlusButtonWrap = styled.div`
    width: 52px;
    background: #6C6C6C;
    min-height: 74px;
    border-radius: 10px 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 24px;
        height: 24px;
        background: #C2C2C2;
    
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
const TodoDetailBox = styled.div`
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
            background-color: white;
        }
    }
`;
const DifficultyIcon = styled.div`
    width: 16px;
    height: 16px;
    background: #6C6C6C;
`;