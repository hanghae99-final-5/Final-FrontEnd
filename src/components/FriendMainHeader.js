import React from "react";
import styled from "styled-components";

const FriendMainHeader = () => {
    return (
        <MainHeaderWrap>
            <NicknameDiv>FriendNickname</NicknameDiv>
            <NavDiv>
                <div>C</div>
                <div></div>
                <div></div>
            </NavDiv>
        </MainHeaderWrap>
    )

}
export default FriendMainHeader;

const MainHeaderWrap = styled.nav`
    max-width: 360px;
    width: 100%;
    height: 54px;
    position: fixed;
    top: 0;
    background-color: #C2C2C2;
    z-index: 10;
    display: flex;
    justify-content: space-between;
`;
const NicknameDiv = styled.div`
    width: 186px;
    height: auto;
    display: flex;
    align-items: center;
    padding: 0 0 0 12px;
    font-size: 20px;
    font-weight: 500;
`;
const NavDiv = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0 15px 0 0;
    div {
        width: 24px;
        height: 24px;
        background: #EFEFEF;
    }
`;


