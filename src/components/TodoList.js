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
                    <div>
                        <div>내용부분</div>
                        <div>
                            <div>1</div>
                            <div>2</div>
                        </div>
                    </div>
                </TodoListContext>
            </TodoListWrap>

        </TodoListContainer>
    )
}

export default TodoList;

const TodoListContainer = styled.div`
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
        border: 1px solid;
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