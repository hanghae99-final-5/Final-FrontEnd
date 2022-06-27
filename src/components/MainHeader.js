import React from "react";
import styled from "styled-components";

const MainHeader = () => {
    return (
        <MainHeaderWrap>
            <div>닉네임</div>
            <div>
                <span>검색</span>
                <span>알림</span>
            </div>
        </MainHeaderWrap>

    )

}
export default MainHeader;

const MainHeaderWrap = styled.nav`
    max-width: 360px;
    width: 100%;
    height: 54px;
    position: fixed;
    top: 0;
    background-color: #C2C2C2;
    z-index: 10;
    display: flex;
`;


