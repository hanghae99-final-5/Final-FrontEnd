import React, { useRef, useState } from "react";
import styled from "styled-components";
import "../../styles/radiobtn.css"

const TodoWrite = ({setTodoType,setTodoText}) => {


    const clickedMatchingBtn = (e) => {
        console.log(e.target.value);
        setTodoType(e.target.value)
    }
    const clickedPrivateBtn = (e) => {
        console.log(e.target.value);
        setTodoType(e.target.value);
    }

    return(
        <Container>
            <div>To Do</div>
            <ButtonGroup>
                <input 
                type="radio" 
                id="option1" 
                name="todoType" value="1"
                onChange={clickedMatchingBtn}
                />
                <label for="option1">Matching</label>
                <input type="radio" 
                id="option2" 
                name="todoType" 
                value="0"
                onChange={clickedPrivateBtn}
                />
                <label for="option2" >Private</label>
            </ButtonGroup>
            <TodoInput 
            onChange={(e)=>{setTodoText(e.target.value)}} 
            type="text" 
            placeholder="할 일을 적어주세요"/>
        </Container>
    )
}

export default TodoWrite;



const Container = styled.div`
    width: 100%;
    height: 25%;
    padding: 12px;

    //Todo Text
    & > div:nth-child(1) {
        font-weight: 400;
        font-size: 16px;
        padding: 0 0 12px 0;
    }
`;
const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    padding: 0 0 12px 0;

`
const TodoInput = styled.input`
    width: 100%;
    height: 64px;
    border-radius: 6px;
    background: ${props => props.theme.gray5};
    border: 0;
    padding: 10px;
`;
