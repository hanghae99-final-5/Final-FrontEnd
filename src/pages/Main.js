import React from "react";
import styled from "styled-components";
import Character from "../components/Character";
import MainHeader from "../components/MainHeader";
import TodoList from "../components/TodoList";
import MainFooter from "../components/MainFooter";

const Main = () => {
    return (
        <>
            <MainHeader />
            <Character />
            <TodoList />
            <MainFooter />
        </>
    )
}

export default Main;


