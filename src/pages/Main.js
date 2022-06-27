import React from "react";
import styled from "styled-components";
import Character from "../components/Character";
import MainHeader from "../components/MainHeader";
import TodoList from "../components/TodoList";

const Main = () => {
    return(
        <>
        <MainHeader/>
        <Character/>
        <TodoList/>
        </>
    )
}

export default Main;


