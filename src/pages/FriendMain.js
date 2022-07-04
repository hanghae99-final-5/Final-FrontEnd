import React from "react";
import MainFooter from "../components/MainFooter";
import FriendMainHeader from "../components/FriendMainHeader";
import FriendCharacter from "../components/FriendCharacter";
import FriendTodoList from "../components/FriendTodoList";

const FriendMain = () => {
    return(
        <>
        <FriendMainHeader/>
        <FriendCharacter/>
        <FriendTodoList/>
        <MainFooter/>
        </>
    )
}

export default FriendMain;


