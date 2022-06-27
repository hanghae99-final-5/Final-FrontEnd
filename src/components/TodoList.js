import React from "react";
import styled from "styled-components";

const TodoList = () => {
    return (
        <TodoListWrap>
            <div>todolist</div>
        </TodoListWrap>
    )
}

export default TodoList;

const TodoListWrap = styled.div`
    max-width: 360px;
    width: 100%;
    height: 402px;
    background-color: white;
    display: flex;
    position: fixed;
    top: 174px;
`;